import Image from "next/image";

export function Avatar() {
  return (
    <Image
      alt="Avatar"
      className="rounded-full"
      src="/images/placeholder-avatar.png"
      width="30"
      height="30"
    />
  );
}
