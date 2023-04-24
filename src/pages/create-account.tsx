import {
  ButtonPrimary,
  ButtonSecondary,
  Divider,
  FormFieldError,
  FormHeading,
  ProductPreview,
  ProfileUploadInput,
  TextInput,
} from "#/components";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createAccountSchema } from "#/validation";

type FormData = z.infer<typeof createAccountSchema>;

const CreateAccount = (): JSX.Element => {
  const [uploadProfile, setUploadPofile] = useState(false);
  const [profileView, setProfileView] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(createAccountSchema),
  });

  const router = useRouter();

  const handleCreateAccount = async (data: FormData) => {
    console.log(data);
  };

  const handleUploadProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(profileView);
  };

  return (
    <section className="md:flex">
      {/* form  */}
      <div className="md:flex-1 bg-form-bg-blob min-h-screen bg-no-repeat bg-contain">
        {!uploadProfile ? (
          <form
            className="sm:max-w-[320px] w-[90%] m-auto sm:ml-[10%] sm:pt-[10%] pt-[5%]"
            onSubmit={handleSubmit(handleCreateAccount)}
            noValidate
          >
            <FormHeading heading="Create account" />

            <div className="flex flex-col gap-4 mt-6">
              <TextInput
                type="text"
                inputId="username"
                labelText="Username"
                placeholder="Your username"
                register={register}
              />

              {errors.username?.message && (
                <FormFieldError error={errors.username.message} />
              )}

              <TextInput
                type="email"
                inputId="email"
                labelText="Email"
                placeholder="example@gmail.com"
                register={register}
              />

              {errors.email?.message && (
                <FormFieldError error={errors.email.message} />
              )}

              <TextInput
                type="password"
                inputId="password"
                labelText="Password"
                placeholder="minium 8 characters"
                register={register}
              />

              {errors.password?.message && (
                <FormFieldError error={errors.password.message} />
              )}
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <ButtonPrimary text="Create my account" type="submit" />
              <Divider />
              <ButtonSecondary
                text="Login"
                type="button"
                onClick={() => router.push("/login")}
              />
            </div>
          </form>
        ) : (
          <form
            className="sm:max-w-[320px] w-[90%] m-auto sm:ml-[10%] sm:pt-[10%] pt-[5%]"
            onSubmit={handleUploadProfile}
            noValidate
          >
            <FormHeading heading={`Hey upload your profile`} />

            <div className="flex flex-col gap-4 mt-6">
              <ProfileUploadInput
                profileView={profileView}
                setProfileView={setProfileView}
              />
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <ButtonPrimary text="Save Profile" type="submit" />
              <ButtonSecondary text="Skip for now" type="button" />
            </div>
          </form>
        )}
      </div>

      {/* product preview */}
      <div className="text-base-content md:block md:flex-1 md:self-center hidden">
        <ProductPreview />
      </div>
    </section>
  );
};

export default CreateAccount;
