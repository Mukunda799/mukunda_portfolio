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

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
      style={{
        background: isDark 
          ? "radial-gradient(ellipse at 50% 50%, #0f172a 0%, #020617 100%)"
          : "radial-gradient(ellipse at 50% 50%, #ffffff 0%, #f1f5f9 100%)"
      }}
    >
      {/* Animated particle background respects theme */}
      <ParticleCanvas isDark={isDark} />

      {/* Radial gradient overlays */}
      <div className="hero-gradient-overlay" />

      {/* Dot Grid Layer to match example tempate */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.15] dark:opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='currentColor'/%3E%3C/svg%3E")`,
          backgroundSize: "32px 32px"
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Hello,
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[rgb(var(--accent-rgb))] to-[#0ea5e9] dark:to-[#818cf8] break-words">
              Mukunda Krishna{" "}
              <br className="sm:hidden" />
              Ramisetti here!
            </span>
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ repeat: Infinity, repeatDelay: 1.5, duration: 2 }}
              className="inline-block origin-bottom-right ml-2"
              style={{ transformOrigin: "bottom right" }}
            >
              👋
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 text-[var(--text-secondary)] text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mt-4 px-2"
          >
            <p>
              I'm a 🚀 <span className="font-semibold text-[var(--text-primary)]">Full Stack Developer</span>{" "}
              specializing in robust Java server-side architectures, REST APIs, and responsive frontends.
            </p>
            
            <p className="font-medium text-[var(--text-primary)]">
              All things Dev: Backend. Frontend. Cloud.{" "}Yep, I do them all.
            </p>

            <p>
              Let's build systems that perform flawlessly, breathe innovation, and make a real impact.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-col items-center gap-4"
          >
            <span className="font-semibold text-[var(--text-primary)] uppercase tracking-wider text-sm">Find me online</span>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => {
                const IconComponent = iconMap[link.icon];
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-secondary)] hover:text-[rgb(var(--accent-rgb))] hover:bg-[rgb(var(--accent-rgb)/0.1)] p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  >
                    {IconComponent && <IconComponent size={24} />}
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-3 w-full px-2"
          >
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[rgb(var(--accent-rgb))] text-white border border-transparent rounded-full font-bold text-sm hover:bg-[rgb(var(--accent-hover-rgb))] transition-all duration-300 shadow-lg shadow-[rgb(var(--accent-rgb)/0.3)] hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <DownloadIcon size={16} />
              Download Resume
            </a>
            <a
              href="mailto:mukundakrishnaramisetti04@gmail.com"
              className="px-6 py-3.5 bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-color)] rounded-full font-bold text-xs sm:text-sm hover:bg-[rgb(var(--accent-rgb)/0.05)] hover:border-[rgb(var(--accent-rgb)/0.5)] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 flex items-center justify-center w-full sm:w-auto overflow-hidden"
            >
              <span className="truncate">mukundakrishnaramisetti04@gmail.com</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
