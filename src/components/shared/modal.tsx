"use client";
import React, {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import { cn } from "~/lib/utils/cn";
import { X } from "lucide-react";
import { Button } from "~/components/shared/button";

type ModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  title?: string;
  footer?: React.ReactNode;
  disabled?: boolean;
  actionLabel: string;
  onAction?: () => void;
  secondaryActionLabel?: string;
  onSecondaryAction?: () => void;
};

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  isOpen,
  actionLabel,
  onClose,
  onAction,
  disabled,
  children,
  footer,
  title,
  secondaryActionLabel,
  onSecondaryAction,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;

    setShowModal(false);
    if (typeof onClose === "function") {
      setTimeout(onClose, 300);
    }
  }, [disabled, onClose]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-neutral-800/70 outline-none focus:outline-none">
      <div className="relative mx-auto my-6 h-full w-full md:h-auto md:w-4/6 lg:h-auto lg:w-3/6 xl:w-2/5">
        <div
          className={cn("translate h-full duration-300", {
            "translate-y-0 opacity-100": showModal,
            "translate-y-full opacity-0": !showModal,
          })}
        >
          <div className="translate relative flex h-full w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none md:h-auto lg:h-auto">
            <div className="relative flex items-center justify-center rounded-t border-b p-6">
              <button
                className="absolute right-9 border-0 p-1 transition hover:opacity-70"
                onClick={handleClose}
              >
                <X size={18} />
              </button>
              <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <div className="relative flex-auto p-6">{children}</div>
            <div className="flex flex-col gap-2 p-6">
              <div className="flex w-full flex-row items-center gap-4">
                {secondaryActionLabel ? (
                  <Button
                    disabled={disabled}
                    onClick={onSecondaryAction}
                    variant="outlined"
                  >
                    {secondaryActionLabel}
                  </Button>
                ) : null}
                <Button disabled={disabled} onClick={onAction}>
                  {actionLabel}
                </Button>
              </div>
              {footer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
