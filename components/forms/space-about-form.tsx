"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Input, Textarea } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";

import { SpaceAboutSettingsSchema } from "@/lib/validations";
import { spaceCategories } from "@/data";
import { apiRequest } from "@/lib/utils/api-request";
import { useAppSelector } from "@/lib/redux/hooks";

type SpaceAboutFormData = z.infer<typeof SpaceAboutSettingsSchema>;

const SpaceAboutForm = () => {
  const { token } = useAppSelector((state) => state.auth);
  const { url } = useAppSelector((state) => state.currentSpace);

  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SpaceAboutFormData>({
    resolver: zodResolver(SpaceAboutSettingsSchema),
    defaultValues: {
      category: "",
      description: "",
      name: "",
    },
  });

  const onSubmit = async (values: SpaceAboutFormData) => {
    setIsLoading(true);
    try {
      await apiRequest(`/spaces/?url=${url}`, "PUT", token, {
        name: values.name,
        description: values.description,
        category: values.category,
      });
      toast.success("Space Updated Successfully.", {
        position: "top-right",
      });
    } catch (error: any) {
      toast.error(`${error.message}`, {
        position: "top-right",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full ">
      <Card fullWidth className="bg-transparent pt-10" shadow="none">
        <CardBody>
          <div className="items-center justify-center  mb-10 mx-auto w-full">
            <h2 className="text-4xl  leading-[60px] font-bold">
              Space settings
            </h2>
            <p className="text-tiny">Update Your Space</p>
          </div>

          <form
            className="flex gap-4 flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              {...register("name")}
              errorMessage={errors?.name?.message}
              isInvalid={!!errors?.name?.message}
              label="Name"
              labelPlacement="outside"
              placeholder="Name"
              size="lg"
              variant="bordered"
            />
            <Textarea
              {...register("description")}
              errorMessage={errors?.description?.message}
              isInvalid={!!errors?.description?.message}
              label="Description"
              labelPlacement="outside"
              placeholder="Description"
              size="lg"
              variant="bordered"
            />
            <div className="flex gap-4">
              <Select
                {...register("category")}
                errorMessage={errors?.category?.message}
                isInvalid={!!errors?.category?.message}
                label="Category"
                labelPlacement="outside"
                placeholder="Brand"
                size="lg"
                variant="bordered"
              >
                {spaceCategories.map((category) => (
                  <SelectItem key={category.key}>{category.label}</SelectItem>
                ))}
              </Select>
            </div>

            <Button
              className="w-fit ml-auto"
              color="primary"
              isLoading={isLoading}
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

export default SpaceAboutForm;
