import React from "react";
import { useTheme } from "@/theme";
import IconButton from "@/components/atoms/IconButton";

const SunIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 15a5 5 0 100-10 5 5 0 000 10zm0 2a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm0-16a1 1 0 011 1v1a1 1 0 11-2 0V2a1 1 0 011-1zm8 8a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zm-16 0a1 1 0 01-1 1H1a1 1 0 110-2h1a1 1 0 011 1zm12.071 6.071a1 1 0 010 1.415l-.707.707a1 1 0 11-1.415-1.415l.707-.707a1 1 0 011.415 0zm-10.142 0a1 1 0 010 1.415l-.707.707a1 1 0 11-1.415-1.415l.707-.707a1 1 0 011.415 0zm10.142-12.142a1 1 0 010 1.415l-.707.707a1 1 0 11-1.415-1.415l.707-.707a1 1 0 011.415 0zm-10.142 0a1 1 0 010 1.415l-.707.707A1 1 0 112.05 3.05l.707-.707a1 1 0 011.415 0z" />
  </svg>
);
const MoonIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
);

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <IconButton
      icon={theme === "dark" ? <SunIcon /> : <MoonIcon />}
      aria-label="Toggle theme"
      onClick={toggleTheme}
      style={{ marginLeft: 8 }}
    />
  );
};

export default ThemeToggle;
