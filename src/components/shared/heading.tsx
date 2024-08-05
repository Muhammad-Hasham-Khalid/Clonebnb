import { FC } from "react";
import { cn } from "~/lib/utils/cn";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export const Heading: FC<HeadingProps> = ({ title, subtitle, center }) => (
  <div className={cn(center ? "text-center" : "text-start")}>
    <h2 className="text-2xl font-bold">{title}</h2>
    {subtitle ? (
      <p className="mt-2 font-light text-neutral-500">{subtitle}</p>
    ) : null}
  </div>
);
