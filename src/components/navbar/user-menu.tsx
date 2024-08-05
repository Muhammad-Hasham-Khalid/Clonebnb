"use client";
import { Menu } from "lucide-react";
import { useCallback, useState } from "react";
import { Avatar } from "~/components/shared/avatar";
import { UserMenuItem } from "./user-menu-item";
import { useRegisterModal } from "~/hooks/use-register-modal";

export function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen((current) => !current), []);
  const registerModal = useRegisterModal();

  return (
    <>
      <div className="relative">
        <div className="flex flex-row items-center gap-3">
          <button
            onClick={() => {}}
            className="hidden cursor-pointer rounded-full px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100 sm:block"
          >
            Clonebnb your home
          </button>
          <button
            className="flex cursor-pointer flex-row items-center gap-3 rounded-full border border-neutral-200 p-4 transition hover:shadow-md md:px-2 md:py-1"
            onClick={toggle}
          >
            <Menu />
            <div className="hidden md:block">
              <Avatar />
            </div>
          </button>
        </div>

        {isOpen ? (
          <div className="absolute right-0 top-12 w-[40vw] overflow-hidden rounded-xl bg-white text-sm shadow-md md:w-3/4">
            <div className="flex cursor-pointer flex-col">
              <UserMenuItem label="Login" />
              <UserMenuItem label="Sign up" onClick={registerModal.open} />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
