"use client";
import { ButtonHTMLAttributes } from "react";
import { cn } from "~/lib/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { Icon, IconName } from "./icon";
import { icons } from "lucide-react";

export const buttonVariants = cva(
  "relative w-full rounded-lg transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-70",
  {
    variants: {
      variant: {
        default: "bg-rose-500 text-white border-rose-500",
        outlined: "bg-white border-black text-black",
      },
      size: {
        default: "py-3 text-md font-semibold border-2",
        small: "py-1 text-sm font-light border",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    className?: string;
    icon?: IconName;
  };

export const Button = ({
  className,
  children,
  size,
  variant,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {icon ? (
        <Icon name={icon} size={24} className="absolute left-4 top-3" />
      ) : null}
      {children}
    </button>
  );
};
