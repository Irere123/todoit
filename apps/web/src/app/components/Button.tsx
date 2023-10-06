import React from "react";

const colorStyles = {
  primary: "bg-emerald-600 text-white rounded-md",
  secondary: "",
};

const sizeStyles = {
  sm: "",
  md: "px-4 py-2",
  lg: "",
};

export interface ButtonProps {
  children: React.ReactNode;
  color?: keyof typeof colorStyles;
  icon?: React.ReactNode;
  size?: keyof typeof sizeStyles;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  color = "primary",
  size = "md",
  icon,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex gap-4 items-center ${colorStyles[color]} ${sizeStyles[size]}`}
    >
      {icon ? <span>{icon}</span> : null}
      {children}
    </button>
  );
};
