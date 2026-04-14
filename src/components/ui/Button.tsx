import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  disabled = false,
  loading = false,
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-10 py-3.5 font-sans text-xs tracking-[0.2em] rounded-sm cursor-pointer transition-all duration-300";

  const variantStyles = {
    primary:
      "bg-green-deep border border-green-deep text-white hover:bg-green-mid",
    outline:
      "bg-transparent border border-sand text-sand-light hover:bg-sand hover:text-green-deep",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed";

  const styles = `${baseStyles} ${variantStyles[variant]} ${
    disabled || loading ? disabledStyles : ""
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={styles}
      onClick={onClick}
    >
      {loading ? "送信中..." : children}
    </button>
  );
}
