import { MouseEvent, ReactNode } from "react";
import { Link } from "react-router-dom";

function Button({
  children,
  disabled = false,
  to,
  type = "primary",
  onClick = (_e?: MouseEvent) => {},
}: {
  children: ReactNode;
  disabled?: boolean;
  to?: string;
  type?: "small" | "primary" | "secondary" | "round";
  onClick?: (e: MouseEvent) => void;
}) {
  const base =
    "inline-block rounded-full bg-yellow-400 text-sm font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + "px-4 py-3 md:px-6 md:py-4",
    small: base + "px-4 py-2 text-xs md:px-5 md:py-2.5",
    secondary:
      "inline-block rounded-full border-2 border-stone-300 px-4 py-2.5 text-sm font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-3.5",
    round: base + "px-2.5 py-1 text-sm md:px-3.5 md:py-2",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
