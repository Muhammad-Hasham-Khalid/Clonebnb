"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export function Logo() {
  const router = useRouter();

  return (
    <Image
      alt="Clonebnb Logo"
      src="/images/logo.jpg"
      width="100"
      height="100"
      className="hidden cursor-pointer md:block"
      onClick={() => router.push("/")}
    />
  );
}
