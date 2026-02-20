"use client";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Input, Textarea } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import { useEffect, useState } from "react";
import { Image } from "@heroui/image";

import { countries, languages } from "@/data";
import NavigateBackButton from "@/components/buttons/navigate-back-button";
import { useAppSelector } from "@/lib/redux/hooks";

const ProfileSettingsPage = () => {
  const [loading, setIsLoading] = useState<boolean>(false);
  const { bannerData } = useAppSelector((state) => state.auth);
  const [userImage, setUserImage] = useState("");

  useEffect(() => {
    if (bannerData) {
      setUserImage(bannerData);
    }
  }, [bannerData]);

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
    <section className="w-full ">
      <NavigateBackButton />
      <Card fullWidth className="bg-transparent pt-10" shadow="none">
        <CardBody>
          <div className="items-center justify-center  mb-10 mx-auto w-full">
            <h2 className="text-4xl  leading-[60px] font-bold">
              Profile Settings
            </h2>
            <p className="text-tiny">
              Your profile settings are public and visible for other users.
            </p>
          </div>
          <div className="my-10">
            <h2 className="text-2xl mt-5 font-bold">Profile banner</h2>
            <div className="h-[300px] my-3 rounded-lg border-2 border-dotted overflow-hidden">
              <Image
                className="h-[300px]"
                src={`${bannerData}`}
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <p className="text-tiny">
              We recommend an image that is 2400 x 600 pixels.
            </p>
          </div>

          <h2 className="text-2xl my-5 font-bold">Username & biography</h2>
          <form
            className="flex gap-4 flex-col"
            // onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              // {...register("username")}
              // errorMessage={errors?.username?.message}
              // isInvalid={!!errors?.username?.message}
              label="Username"
              labelPlacement="outside"
              placeholder="username"
              size="lg"
              variant="bordered"
            />
            <Textarea
              // {...register("email")}
              // errorMessage={errors?.email?.message}
              // isInvalid={!!errors?.email?.message}
              label="Biography"
              labelPlacement="outside"
              placeholder="Biography"
              size="lg"
              variant="bordered"
            />
            <h2 className="text-2xl mt-5 font-bold">Country & languages</h2>
            <Select
              // {...register("currency")}
              // errorMessage={errors?.currency?.message}
              // isInvalid={!!errors?.currency?.message}
              label="Languages"
              labelPlacement="outside"
              placeholder="English"
              size="lg"
              variant="bordered"
            >
              {languages.map((language) => (
                <SelectItem key={language.key}>{language.label}</SelectItem>
              ))}
            </Select>
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

export default ProfileSettingsPage;
