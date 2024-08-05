import { FC, MouseEventHandler } from "react";

type UserMenuItemProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  label: string;
};

export const UserMenuItem: FC<UserMenuItemProps> = ({ onClick, label }) => (
  <button
    className="px-4 py-3 text-left font-semibold transition hover:bg-neutral-100"
    onClick={onClick}
  >
    {label}
  </button>
);
