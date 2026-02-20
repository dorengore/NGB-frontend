"use client";

import { Button } from "@heroui/button";
import { useDisclosure } from "@heroui/modal";

import LoginFormModal from "../modals/login-form-modal";
import SignUpFormModal from "../modals/signup-form-modal";

const LoginButton = () => {
  const {
    isOpen: isOpenLogin,
    onOpen: onOpenLogin,
    onOpenChange: onOpenChangeLogin,
    onClose: onCloseLogin,
  } = useDisclosure();
  const {
    isOpen: isOpenSignUp,
    onOpen: onOpenSignUp,
    onOpenChange: onOpenChangeSignUp,
    onClose: onCloseSignUp,
  } = useDisclosure();

  const switchToLogin = () => {
    onOpenLogin();
    onCloseSignUp();
  };

  const switchToSignUp = () => {
    onOpenSignUp();
    onCloseLogin();
  };

  return (
    <>
      <Button
        className="px-6"
        color="success"
        radius="full"
        size="sm"
        variant="ghost"
        onPress={onOpenLogin}
      >
        Login
      </Button>

      <LoginFormModal
        isOpen={isOpenLogin}
        onOpenChange={onOpenChangeLogin}
        onSwitch={switchToSignUp}
      />
      <SignUpFormModal
        isOpen={isOpenSignUp}
        onOpenChange={onOpenChangeSignUp}
        onSwitch={switchToLogin}
      />
    </>
  );
};

export default LoginButton;
