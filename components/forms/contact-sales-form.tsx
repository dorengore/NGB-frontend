"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import { Input, Textarea } from "@heroui/input";
import { Divider } from "@heroui/divider";
import { Select, SelectItem } from "@heroui/select";
import { Checkbox } from "@heroui/checkbox";

import { ContactSalesSchema } from "@/lib/validations";
import { companySizes, companyTypes, countries } from "@/data";

type ContactSalesFormData = z.infer<typeof ContactSalesSchema>;

const ContactSalesForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSalesFormData>({
    resolver: zodResolver(ContactSalesSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      workEmail: "",
      workTitle: "",
      companyName: "",
      companySize: "",
      companyType: "",
      country: "",
      anythingElse: "",
      forMarketingOptIn: false,
    },
  });

  const onSubmit = async (values: ContactSalesFormData) => {
    try {
      console.log(values);
      toast.success("Message sent");
    } catch (error) {
      toast.error("Message sending error");
    }
  };

  return (
    <Card fullWidth>
      {/* <CardHeader>
        <h2>Contact Us</h2>
      </CardHeader> */}
      {/* <Divider /> */}
      <CardBody className="py-7">
        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex gap-3 items-start">
            <Input
              {...register("firstName")}
              errorMessage={errors.firstName?.message}
              isInvalid={!!errors.firstName?.message}
              label="First Name"
              labelPlacement="outside"
              placeholder="First Name"
              variant="bordered"
            />
            <Input
              {...register("lastName")}
              errorMessage={errors.lastName?.message}
              isInvalid={!!errors.lastName?.message}
              label="Last Name"
              labelPlacement="outside"
              placeholder="Last Name"
              variant="bordered"
            />
          </div>
          <div className="flex gap-3 items-start">
            <Input
              {...register("workEmail")}
              errorMessage={errors.workEmail?.message}
              isInvalid={!!errors.workEmail?.message}
              label="Work Email"
              labelPlacement="outside"
              placeholder="Work Email"
              variant="bordered"
            />
            <Input
              {...register("workTitle")}
              errorMessage={errors.workTitle?.message}
              isInvalid={!!errors.workTitle?.message}
              label="Work Title"
              labelPlacement="outside"
              placeholder="Work Title"
              variant="bordered"
            />
          </div>
          <Select
            {...register("country")}
            errorMessage={errors?.country?.message}
            isInvalid={!!errors?.country?.message}
            label="Country"
            labelPlacement="outside"
            placeholder="Afghanistan"
            variant="bordered"
          >
            {countries.map((country) => (
              <SelectItem key={country.key}>{country.label}</SelectItem>
            ))}
          </Select>

          <div className="flex gap-3 items-start">
            <Input
              {...register("companyName")}
              errorMessage={errors.companyName?.message}
              isInvalid={!!errors.companyName?.message}
              label="Company Name"
              labelPlacement="outside"
              placeholder="Company Name"
              variant="bordered"
            />
            <Select
              {...register("companySize")}
              errorMessage={errors?.companySize?.message}
              isInvalid={!!errors?.companySize?.message}
              label="Company Size"
              labelPlacement="outside"
              placeholder="1-10 employees"
              variant="bordered"
            >
              {companySizes.map((companySize) => (
                <SelectItem key={companySize.key}>
                  {companySize.label}
                </SelectItem>
              ))}
            </Select>
          </div>

          <Select
            {...register("companyType")}
            errorMessage={errors?.companyType?.message}
            isInvalid={!!errors?.companyType?.message}
            label="Company Type"
            labelPlacement="outside"
            placeholder="Technology"
            variant="bordered"
          >
            {companyTypes.map((companyType) => (
              <SelectItem key={companyType.key}>{companyType.label}</SelectItem>
            ))}
          </Select>

          <Divider className="my-6" />

          <Textarea
            {...register("anythingElse")}
            errorMessage={errors?.anythingElse?.message}
            isInvalid={!!errors?.anythingElse?.message}
            label="Anything Else?"
            labelPlacement="outside"
            placeholder="Anything else we can help you with?"
            variant="bordered"
          />
          <Checkbox {...register("forMarketingOptIn")}>
            Yes, I would like to receive marketing communications from NBG. I
            can unsubscribe at any time.
          </Checkbox>
        </form>
      </CardBody>

      <CardFooter>
        <Button
          fullWidth
          color="primary"
          radius="full"
          size="lg"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContactSalesForm;
