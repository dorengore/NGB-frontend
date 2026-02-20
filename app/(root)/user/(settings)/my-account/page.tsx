"use client";
import { Select, SelectItem } from "@heroui/select";
import { Input } from "@heroui/input";
import { Card, CardBody } from "@heroui/card";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@heroui/button";

import { currencies } from "@/data";
import { UserInfoSchema } from "@/lib/validations";
import NavigateBackButton from "@/components/buttons/navigate-back-button";

type UserInfoType = z.infer<typeof UserInfoSchema>;

const MyAccountPage = () => {
  const [loading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserInfoType>({
    resolver: zodResolver(UserInfoSchema),
    defaultValues: {
      username: "",
      email: "",
      currency: "",
    },
  });

  const onSubmit = (values: UserInfoType) => {
    setIsLoading(true);
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full pb-24">
      <NavigateBackButton />
      <Card fullWidth className="bg-transparent pt-10" shadow="none">
        <CardBody>
          <div className="items-center justify-center  mx-auto w-full">
            <h2 className="text-3xl  leading-[60px] font-bold mb-5">
              My Account
            </h2>
          </div>
          <form
            className="flex gap-4 flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              {...register("username")}
              errorMessage={errors?.username?.message}
              isInvalid={!!errors?.username?.message}
              label="Username"
              labelPlacement="outside"
              placeholder="username"
              size="lg"
              variant="bordered"
            />
            <Input
              {...register("email")}
              errorMessage={errors?.email?.message}
              isInvalid={!!errors?.email?.message}
              label="Email"
              labelPlacement="outside"
              placeholder="example@user.com"
              size="lg"
              variant="bordered"
            />
            <Select
              {...register("currency")}
              errorMessage={errors?.currency?.message}
              isInvalid={!!errors?.currency?.message}
              label="Currency"
              labelPlacement="outside"
              placeholder="EUR"
              size="lg"
              variant="bordered"
            >
              {currencies.map((currency) => (
                <SelectItem
                  key={currency.key}
                  description={currency.description}
                >
                  {currency.label}
                </SelectItem>
              ))}
            </Select>
            <Button
              className="w-fit ml-auto"
              color="primary"
              isLoading={loading}
              radius="full"
              type="submit"
            >
              Save
            </Button>
          </form>
        </CardBody>
      </Card>
    </section>
  );
};

export default MyAccountPage;
