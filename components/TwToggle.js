import { useTheme } from "next-themes";

export default function ToggleMe() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="order-2 md:order-3"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        Switch Theme
      </button>
    </>
  );
}
