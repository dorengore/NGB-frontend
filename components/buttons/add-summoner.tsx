"use client";
import { Button } from "@heroui/button";
import { useDisclosure } from "@heroui/modal";

import AddSummonerModal from "../modals/add-summoner";

const AddGameAccountButton = ({ game }: { game: string }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const renderModalContent = () => {
    switch (game) {
      case "League of legends":
        return <AddSummonerModal isOpen={isOpen} onOpenChange={onOpenChange} />;

      default:
        return null;
    }
  };

  return (
    <>
      <Button
        className="px-7 text-sm"
        color="primary"
        radius="full"
        onPress={onOpen}
      >
        Add Account
      </Button>
      {renderModalContent()}
    </>
  );
};

export default AddGameAccountButton;
