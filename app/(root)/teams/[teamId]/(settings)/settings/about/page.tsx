"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input, Textarea } from "@heroui/input";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { useState } from "react";
import toast from "react-hot-toast";
import { Select, SelectItem } from "@heroui/select";

import { TeamAboutSchema } from "@/lib/validations";
import { countries } from "@/data";

type TeamAboutData = z.infer<typeof TeamAboutSchema>;

const TeamAboutSettings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TeamAboutData>({
    resolver: zodResolver(TeamAboutSchema),
    defaultValues: {
      description: "",
      location: "",
      teamContactEmail: "",
      videoUrl: "",
      websiteUrl: "",
    },
  });

  const onSubmit = (values: TeamAboutData) => {
    setIsLoading(true);
    try {
      console.log(values);
      toast.success("Team Update Success");
    } catch (error) {
      toast.error("Error Team Update.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-transparent" shadow="none">
      <CardHeader className="flex-col gap-2 items-start">
        <h2 className="text-3xl font-bold">About</h2>
        <p>
          Let others learn more about this Team by adding relevant information.
        </p>
      </CardHeader>
      <CardBody className="gap-6 pr-7">
        <Textarea
          {...register("description")}
          errorMessage={errors.description?.message}
          isInvalid={!!errors.description?.message}
          label="Description"
          labelPlacement="outside"
          placeholder="My Cool Team Is Amazing"
          variant="bordered"
        />
        <Input
          {...register("videoUrl")}
          errorMessage={errors.videoUrl?.message}
          isInvalid={!!errors.videoUrl?.message}
          label="Video URL"
          labelPlacement="outside"
          placeholder="Insert video link"
          variant="bordered"
        />

        <Input
          {...register("websiteUrl")}
          errorMessage={errors.websiteUrl?.message}
          isInvalid={!!errors.websiteUrl?.message}
          label="Website"
          labelPlacement="outside"
          placeholder="Website URL"
          variant="bordered"
        />

        <Input
          {...register("teamContactEmail")}
          errorMessage={errors.teamContactEmail?.message}
          isInvalid={!!errors.teamContactEmail?.message}
          label="Team Contact Email"
          labelPlacement="outside"
          placeholder="Team Contact Email"
          variant="bordered"
        />
        <Select
          items={countries}
          label="Location"
          labelPlacement="outside"
          variant="bordered"
          {...register("location")}
          placeholder="Location"
        >
          {(item) => <SelectItem key={item.key}>{item.label}</SelectItem>}
        </Select>
      </CardBody>
      <CardFooter>
        <Button isLoading={isLoading} onClick={handleSubmit(onSubmit)}>
          Save
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TeamAboutSettings;
