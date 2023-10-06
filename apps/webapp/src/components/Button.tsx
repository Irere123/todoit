"use client";

import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const colorStyles = {
  primary: "bg-emerald-600 shadow-md text-white rounded-md",
  secondary: "",
};

const sizeStyles = {
  sm: "",
  md: "px-4 py-2",
  lg: "",
};

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLElement>,
  HTMLButtonElement
> & {
  children: React.ReactNode;
  color?: keyof typeof colorStyles;
  icon?: React.ReactNode;
  size?: keyof typeof sizeStyles;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  color = "primary",
  size = "md",
  icon,
  onClick,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex gap-4 items-center ${colorStyles[color]} ${sizeStyles[size]}`}
      {...props}
    >
      {icon ? <span>{icon}</span> : null}
      {children}
    </button>
  );
};
