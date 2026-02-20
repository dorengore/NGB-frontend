"use client";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Input } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import { useState } from "react";

import { countries, currencies, days, months, years } from "@/data";
import NavigateBackButton from "@/components/buttons/navigate-back-button";

const UserPersonalPage = () => {
  const [loading, setIsLoading] = useState<boolean>(false);

  // const {
  //   handleSubmit,
  //   register,
  //   formState: { errors },
  // } = useForm<UserInfoType>({
  //   resolver: zodResolver(UserInfoSchema),
  //   defaultValues: {
  //     username: "",
  //     email: "",
  //     currency: "",
  //   },
  // });

  // const onSubmit = (values: UserInfoType) => {
  //   setIsLoading(true);
  //   try {
  //     console.log(values);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <section className="w-full pb-32">
      <NavigateBackButton />
      <Card fullWidth className="bg-transparent pt-10" shadow="none">
        <CardBody>
          <div className="items-center justify-center  mb-10 mx-auto w-full">
            <h2 className="text-4xl  leading-[60px] font-bold">
              Personal settings
            </h2>
            <p className="text-tiny">
              Neither your full name, your birth date nor other contact details,
              will be visible for other users.
            </p>
          </div>

          <form
            className="flex gap-4 flex-col"
            // onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="text-2xl my-5 font-bold">Full Name</h2>
            <div className="flex gap-3">
              <Input
                // {...register("username")}
                // errorMessage={errors?.username?.message}
                // isInvalid={!!errors?.username?.message}
                label="First Name"
                labelPlacement="outside"
                placeholder="First Name"
                size="lg"
                variant="bordered"
              />
              <Input
                // {...register("email")}
                // errorMessage={errors?.email?.message}
                // isInvalid={!!errors?.email?.message}
                label="Last Name"
                labelPlacement="outside"
                placeholder="Last Name"
                size="lg"
                variant="bordered"
              />
            </div>
            <h2 className="text-2xl mt-5 font-bold">Date of birth</h2>
            <div className="flex gap-4">
              <Select
                // {...register("currency")}
                // errorMessage={errors?.currency?.message}
                // isInvalid={!!errors?.currency?.message}
                label="Years"
                labelPlacement="outside"
                placeholder="1"
                size="lg"
                variant="bordered"
              >
                {years.map((year) => (
                  <SelectItem key={year.key}>{year.label}</SelectItem>
                ))}
              </Select>
              <Select
                // {...register("currency")}
                // errorMessage={errors?.currency?.message}
                // isInvalid={!!errors?.currency?.message}
                label="Months"
                labelPlacement="outside"
                placeholder="January"
                size="lg"
                variant="bordered"
              >
                {months.map((month) => (
                  <SelectItem key={month.key}>{month.label}</SelectItem>
                ))}
              </Select>
              <Select
                // {...register("currency")}
                // errorMessage={errors?.currency?.message}
                // isInvalid={!!errors?.currency?.message}
                label="Day"
                labelPlacement="outside"
                placeholder="1"
                size="lg"
                variant="bordered"
              >
                {days.map((day) => (
                  <SelectItem key={day.key}>{day.label}</SelectItem>
                ))}
              </Select>
            </div>

            <h2 className="text-2xl my-5 font-bold">Home address</h2>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <Input
                  // {...register("username")}
                  // errorMessage={errors?.username?.message}
                  // isInvalid={!!errors?.username?.message}
                  label="Address"
                  labelPlacement="outside"
                  placeholder="Address"
                  size="lg"
                  variant="bordered"
                />
                <Input
                  // {...register("email")}
                  // errorMessage={errors?.email?.message}
                  // isInvalid={!!errors?.email?.message}
                  label="Address 2"
                  labelPlacement="outside"
                  placeholder="Address 2"
                  size="lg"
                  variant="bordered"
                />
              </div>

              <div className="flex gap-3">
                <Input
                  // {...register("username")}
                  // errorMessage={errors?.username?.message}
                  // isInvalid={!!errors?.username?.message}
                  label="Zip code"
                  labelPlacement="outside"
                  placeholder="Zip code"
                  size="lg"
                  variant="bordered"
                />
                <Input
                  // {...register("email")}
                  // errorMessage={errors?.email?.message}
                  // isInvalid={!!errors?.email?.message}
                  label="City"
                  labelPlacement="outside"
                  placeholder="City"
                  size="lg"
                  variant="bordered"
                />
              </div>
              <Select
                // {...register("currency")}
                // errorMessage={errors?.currency?.message}
                // isInvalid={!!errors?.currency?.message}
                label="Country"
                labelPlacement="outside"
                placeholder="Afghanistan"
                size="lg"
                variant="bordered"
              >
                {countries.map((country) => (
                  <SelectItem key={country.key}>{country.label}</SelectItem>
                ))}
              </Select>
            </div>

            <div>
              <h2 className="text-2xl mt-5 mb-2 font-bold">Currency</h2>
              <p className="text-tiny">
                All values on NBG are in EUR but can be displayed in your
                preferred currency using recent exchange rates.
              </p>
            </div>
            <div className="flex gap-4">
              <Select
                // {...register("currency")}
                // errorMessage={errors?.currency?.message}
                // isInvalid={!!errors?.currency?.message}
                labelPlacement="outside"
                placeholder="EUR"
                size="lg"
                variant="bordered"
              >
                {currencies.map((currency) => (
                  <SelectItem key={currency.key}>{currency.label}</SelectItem>
                ))}
              </Select>
            </div>
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

export default UserPersonalPage;
