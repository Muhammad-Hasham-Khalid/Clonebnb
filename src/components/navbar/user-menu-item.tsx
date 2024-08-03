type UserMenuItemProps = Readonly<{
  onClick?: () => void;
  label: string;
}>;

export function UserMenuItem({ onClick, label }: UserMenuItemProps) {
  return (
    <button
      className="px-4 py-3 text-left font-semibold transition hover:bg-neutral-100"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
