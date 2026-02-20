"use client";
import { Button } from "@heroui/button";

import AddFriends from "./add-friends";

const NoFriends = () => {
  return (
    <AddFriends
      renderPressable={(onPress) => (
        <Button color="primary" variant="ghost" onPress={onPress}>
          Add Friends
        </Button>
      )}
    />
  );
};

export default NoFriends;
