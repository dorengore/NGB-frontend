import { Radio, RadioGroup } from "@heroui/radio";
import { cn } from "@heroui/theme";
import React from "react";

const PlansModal = ({ setSelectedPlan }: { setSelectedPlan: any }) => {
  return (
    <RadioGroup
      defaultValue="1 month"
      description="Selected plan can be changed at any time."
      label="Plans"
      onValueChange={setSelectedPlan}
    >
      <CustomRadio description="Renews every 30 days at €4.99" value="1 month">
        1 month
      </CustomRadio>
      <CustomRadio
        description="Renews every 90 days at €11.99."
        value="3 months"
      >
        3 months
      </CustomRadio>
      <CustomRadio
        description="Renews every 360 days at €29.99."
        value="12 months"
      >
        12 months
      </CustomRadio>
    </RadioGroup>
  );
};

export default PlansModal;

export const CustomRadio = (props: any) => {
  const { children, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
          "flex-row-reverse max-w-full cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary"
        ),
      }}
    >
      {children}
    </Radio>
  );
};
