import { FC, forwardRef, InputHTMLAttributes } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { DollarSign } from "lucide-react";
import { cn } from "~/lib/utils/cn";

type InputProps = {
  label: string;
  formatPrice?: boolean;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  function Input({ formatPrice, label, error, ...props }, ref) {
    const hasErrors = !!error;
    return (
      <div className="relative w-full">
        {formatPrice ? (
          <DollarSign
            size={24}
            className="absolute left-2 top-5 text-neutral-700"
          />
        ) : null}
        <input
          {...props}
          ref={ref}
          className={cn(
            "peer w-full rounded-md border-2 bg-white p-4 pt-6 font-light outline-none transition disabled:cursor-not-allowed disabled:opacity-70",
            formatPrice ? "pl-9" : "pl-4",
            hasErrors
              ? "border-rose-500 focus:border-rose-500"
              : "border-neutral-300 focus:border-black",
          )}
        />
        <label
          htmlFor={props.id}
          className={cn(
            "text-md absolute top-5 z-10 origin-[0] -translate-y-3 transform duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75",
            formatPrice ? "left-9" : "left-4",
            hasErrors ? "text-rose-500" : "text-zinc-400",
          )}
        >
          {label}
        </label>
      </div>
    );
  },
);
