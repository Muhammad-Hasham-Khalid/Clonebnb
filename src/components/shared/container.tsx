"use client";

import { PropsWithChildren } from "react";
import { cn } from "~/lib/utils/cn";

type ContainerProps = PropsWithChildren<{ className?: string }>;

export const Container = ({ children, className }: ContainerProps) => (
  <div
    className={cn(
      "container mx-auto px-4 sm:px-2 md:px-10 xl:px-20",
      className,
    )}
  >
    {children}
  </div>
);
