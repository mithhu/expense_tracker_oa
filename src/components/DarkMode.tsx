import { useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function DarkMode() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  };
  return (
    <div className="flex justify-between mb-4">
      <h1 className="text-3xl">Expense Tracker</h1>
      <button
        name={theme === "light" ? "light theme" : "dark theme"}
        className="rounded-full"
        onClick={() => toggleTheme()}
        data-testid="themeChange-btn"
      >
        {theme === "dark" ? (
          <MdLightMode size={40} color="yellow" />
        ) : (
          <MdDarkMode size={40} />
        )}
      </button>
    </div>
  );
}
