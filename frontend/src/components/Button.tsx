import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "success" | "danger" | "warning" | "secondary";
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  fullWidth,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-4 py-2 rounded-md shadow transition font-medium focus:outline-none focus:ring-2 focus:ring-offset-1";

  const variants: Record<string, string> = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400",
    success: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-400",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400",
    warning:
      "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400",
    secondary:
      "bg-gray-400 text-white hover:bg-gray-500 focus:ring-gray-300",
  };

  return (
    <button
      {...props}
      className={`${baseStyles} ${variants[variant]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
}
