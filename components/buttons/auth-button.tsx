import { Button } from "@heroui/button";

import { AuthButtonProps } from "@/types/interface";

const AuthButton = ({
  children,
  color,
  startContent: Icon,
  className,
}: AuthButtonProps) => {
  return (
    <Button
      fullWidth
      className={className}
      color={color}
      radius="full"
      startContent={<Icon />}
    >
      {children}
    </Button>
  );
};

export default AuthButton;
