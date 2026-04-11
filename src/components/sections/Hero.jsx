import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { personalInfo, socialLinks } from "../../data";
import { iconMap, DownloadIcon } from "../icons/Icons";
import { useTheme } from "../../context/ThemeContext";

/* ──────────────────────────────────────────────
   Particle / Network Canvas Background
   ────────────────────────────────────────────── */
const ParticleCanvas = ({ isDark }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let particles = [];
    let cubes = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;

    // Theme-based colors
    // Light mode uses deep blue, dark mode uses sky blue
    const particleRGB = isDark ? "56, 189, 248" : "37, 99, 235";

    // Particles
    const PARTICLE_COUNT = Math.min(80, Math.floor((W() * H()) / 12000));
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * W(),
        y: Math.random() * H(),
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    // Floating cubes
    const CUBE_COUNT = 12;
    for (let i = 0; i < CUBE_COUNT; i++) {
      cubes.push({
        x: Math.random() * W(),
        y: Math.random() * H(),
        size: Math.random() * 20 + 10,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.01,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.15 + 0.05,
      });
    }

    const drawCube = (cube) => {
      ctx.save();
      ctx.translate(cube.x, cube.y);
      ctx.rotate(cube.rotation);
      const s = cube.size;

      // Front face
      ctx.fillStyle = `rgba(${particleRGB}, ${cube.opacity})`;
      ctx.fillRect(-s / 2, -s / 2, s, s);

      // Top face (parallelogram)
      ctx.fillStyle = `rgba(${particleRGB}, ${cube.opacity * 1.4})`;
      ctx.beginPath();
      ctx.moveTo(-s / 2, -s / 2);
      ctx.lineTo(-s / 2 + s * 0.3, -s / 2 - s * 0.3);
      ctx.lineTo(s / 2 + s * 0.3, -s / 2 - s * 0.3);
      ctx.lineTo(s / 2, -s / 2);
      ctx.closePath();
      ctx.fill();

      // Right face
      ctx.fillStyle = `rgba(${particleRGB}, ${cube.opacity * 0.7})`;
      ctx.beginPath();
      ctx.moveTo(s / 2, -s / 2);
      ctx.lineTo(s / 2 + s * 0.3, -s / 2 - s * 0.3);
      ctx.lineTo(s / 2 + s * 0.3, s / 2 - s * 0.3);
      ctx.lineTo(s / 2, s / 2);
      ctx.closePath();
      ctx.fill();

      // Edges
      ctx.strokeStyle = `rgba(${particleRGB}, ${cube.opacity * 2})`;
      ctx.lineWidth = 0.5;
      ctx.strokeRect(-s / 2, -s / 2, s, s);

      ctx.restore();
    };

    const animate = () => {
      const w = W();
      const h = H();
      ctx.clearRect(0, 0, w, h);

      // Update & draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleRGB}, ${p.opacity * 0.8})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            // Dynamic line opacity based on distance and theme
            const maxLineOpacity = isDark ? 0.15 : 0.08;
            ctx.strokeStyle = `rgba(${particleRGB}, ${maxLineOpacity * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Update & draw cubes
      cubes.forEach((c) => {
        c.x += c.vx;
        c.y += c.vy;
        c.rotation += c.rotSpeed;
        if (c.x < -50) c.x = w + 50;
        if (c.x > w + 50) c.x = -50;
        if (c.y < -50) c.y = h + 50;
        if (c.y > h + 50) c.y = -50;
        drawCube(c);
      });

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

/* ──────────────────────────────────────────────
   Hero Section
   ────────────────────────────────────────────── */
export const Hero = () => {
  const { isDark } = useTheme();
  const nameParts = personalInfo.name.split(" ");
  const firstName = nameParts.length > 2 ? nameParts.slice(0, 2).join(" ") : nameParts[0];
  const lastName = nameParts.length > 2 ? nameParts.slice(2).join(" ") : nameParts.slice(1).join(" ");

  return (
    <section
      id="home"
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated particle background respects theme */}
      <ParticleCanvas isDark={isDark} />

      {/* Radial gradient overlays */}
      <div className="hero-gradient-overlay" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-5">
        {/* Name */}
        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="hero-name-first">{firstName}</span>
          <br />
          <span className="hero-name-last">{lastName}</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          className="hero-subtitle mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {personalInfo.title}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <a href="#projects" className="hero-btn hero-btn-primary">
            View Projects
          </a>
          <a href="#contact" className="hero-btn hero-btn-outline">
            Get In Touch
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn hero-btn-download"
          >
            <DownloadIcon size={14} />
            Download Resume
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {socialLinks.map((link) => {
            const IconComponent = iconMap[link.icon];
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="hero-social-icon"
              >
                {IconComponent && <IconComponent size={20} />}
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
