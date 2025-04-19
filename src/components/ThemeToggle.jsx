import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa"; // Optional: Icons for Dark/Light Mode

const ThemeToggle = () => {
  // Initialize theme from localStorage or default to 'dark'
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    // Apply the theme by adding the `dark` class to <html> when the theme is dark
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Save the theme to localStorage so that it's persistent on page reload
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    // Toggle the theme between light and dark
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button onClick={toggleTheme} className="text-gray-300 hover:text-white transition-colors">
      {theme === "light" ? <FaMoon /> : <FaSun />} {/* Icons for Light/Dark Mode */}
    </button>
  );
};

export default ThemeToggle;
