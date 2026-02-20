"use client";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { Input } from "@heroui/input";
import {
  AppleIcon,
  Eye,
  EyeOffIcon,
  FacebookIcon,
  TwitchIcon,
} from "lucide-react";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { Divider } from "@heroui/divider";
import { useRouter } from "next/navigation";

import AuthButton from "../buttons/auth-button";

import { LoginFormSchema } from "@/lib/validations";
import { useLoginMutation } from "@/lib/redux/api";
import { useAppSelector } from "@/lib/redux/hooks";

type LoginFormData = z.infer<typeof LoginFormSchema>;

const LoginFormCard = ({
  isModal,
  onSwitch,
  onOpenChange,
}: {
  isModal?: boolean;
  onSwitch?: () => void;
  onOpenChange?: () => void;
}) => {
  const { token, userId } = useAppSelector((state) => state.auth);
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const router = useRouter();

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormData) => {
    // setIsSubmitting(true);
    try {
      const result = await login({
        email: values.email,
        password: values.password,
      }).unwrap();

      if (result.success) {
        toast.success("Login Success", {
          position: "top-right",
        });
        reset();
        if (onOpenChange) {
          onOpenChange();
        }
        router.push(`/`);
      }
    } catch (error: any) {
      toast.error(`${error?.data ? error?.data?.message : "Error Login"}`, {
        position: "top-right",
      });
    }
  };

  // if (token) {
  //   router.push(`/users/${userId}`);
  // }

  return (
    <Card className="mx-auto w-full max-w-[418px] py-5 px-5" shadow="none">
      <CardHeader className="flex gap-8 flex-col items-stretch">
        <div className="flex items-center justify-center">
          <Image
            alt="logo"
            height={60}
            src={"/assets/images/game-logo.png"}
            style={{
              objectFit: "cover",
            }}
            width={60}
          />
        </div>
        <div className="text-center flex flex-col items-center">
          <h2 className="text-4xl mb-3 font-bold">Log in</h2>
          <div className="flex items-center gap-2 text-tiny">
            <p>Don&apos;t have an account?</p>
            {isModal ? (
              <button onClick={onSwitch}>Sign up</button>
            ) : (
              <Link href="/sign-up">Sign up</Link>
            )}
          </div>
        </div>

        <div className="flex flex-col  gap-3">
          <AuthButton color="secondary" startContent={TwitchIcon}>
            Login With Twitch
          </AuthButton>
          <AuthButton color="primary" startContent={FacebookIcon}>
            Login With Facebook
          </AuthButton>
          <AuthButton
            className="bg-white text-black"
            color="primary"
            startContent={AppleIcon}
          >
            Login With Apple
          </AuthButton>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <Divider />
          <h2>or</h2>
          <Divider />
        </div>
      </CardHeader>

      <CardBody>
        <form
          className="flex flex-col items-center justify-center gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* <Input
            {...register("username")}
            errorMessage={errors.username?.message}
            isInvalid={!!errors.username?.message}
            label="Username"
            labelPlacement="outside"
            placeholder="username20"
            radius="sm"
            size="lg"
          /> */}
          <Input
            label="Email"
            labelPlacement="outside"
            placeholder="example@email.com"
            radius="sm"
            size="lg"
            {...register("email")}
            errorMessage={errors.email?.message}
            isInvalid={!!errors.email?.message}
          />

          <Input
            {...register("password")}
            endContent={
              <button
                aria-label="toggle password visibility"
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? <EyeOffIcon /> : <Eye />}
              </button>
            }
            errorMessage={errors.password?.message}
            isInvalid={!!errors.password?.message}
            label="Password"
            labelPlacement="outside"
            placeholder="secret@password123"
            radius="sm"
            size="lg"
            type={isVisible ? "text" : "password"}
          />
          <Button
            fullWidth
            color="primary"
            isLoading={isLoginLoading}
            radius="full"
            size="lg"
            type="submit"
          >
            Login
          </Button>
          <Link className="cursor-pointer" size="sm">
            Forgot Password?
          </Link>
        </form>
      </CardBody>
    </Card>
  );
};

export default LoginFormCard;
