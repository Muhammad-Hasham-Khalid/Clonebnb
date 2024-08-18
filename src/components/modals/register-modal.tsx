"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Modal } from "~/components/shared/modal";
import { useRegisterModal } from "~/hooks/use-register-modal";
import { signUp } from "~/lib/auth/actions";
import { Logger } from "~/lib/logger";
import { Button } from "../shared/button";
import { Heading } from "../shared/heading";
import { Input } from "../shared/input";

const RegisterFormSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password is too short"),
});
type FieldValues = z.infer<typeof RegisterFormSchema>;

export const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const signUpMutation = useMutation({
    mutationFn: signUp,
  });

  const form = useForm({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    reValidateMode: "onSubmit",
  });

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    Logger.info("Signing up", data);
    signUpMutation.mutate(data, {
      onSuccess(data) {
        registerModal.close();
        form.reset();
      },
    });
  };

  return (
    <Modal
      disabled={signUpMutation.isPending}
      isOpen={registerModal.isOpen}
      onClose={registerModal.close}
      title="Register"
      actionLabel="Continue"
      onAction={handleSubmit(onSubmit)}
      footer={<RegisterModalFooter />}
    >
      <div className="flex flex-col gap-4">
        <Heading title="Welcome to Clonebnb" subtitle="Create an account" />
        <Input
          {...register("email", { required: true })}
          type="email"
          label="Email"
          error={errors.email?.message}
        />
        <Input
          {...register("name", { required: true })}
          label="Name"
          error={errors.name?.message}
        />
        <Input
          {...register("password", { required: true })}
          type="password"
          label="Password"
          error={errors.password?.message}
        />
      </div>
    </Modal>
  );
};

function RegisterModalFooter() {
  const registerModal = useRegisterModal();

  return (
    <div className="mt-3 flex flex-col gap-4">
      <hr />
      <Button variant="outlined" icon="Google">
        Continue with Google
      </Button>
      <Button variant="outlined" icon="Github">
        Continue with GitHub
      </Button>
      <div className="mt-4 text-center font-light text-neutral-500">
        <div className="flex flex-row items-center justify-center gap-2">
          <p>Already have an account?</p>
          <button
            className="cursor-pointer text-neutral-800 hover:underline"
            onClick={() => registerModal.close()}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
