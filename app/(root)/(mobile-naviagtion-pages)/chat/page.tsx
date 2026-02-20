"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { useAppSelector } from "@/lib/redux/hooks";

const ChatPage = () => {
  const [user, setUser] = useState<boolean | null>(null);
  const { token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      setUser(true);
    }
  }, [token]);

  return (
    <section className="w-full ">
      <section className="hidden lg:block">
        Not available for this screen size
      </section>
      <section className="lg:hidden ">
        {user ? (
          <h2>ChatPage</h2>
        ) : (
          <div className="flex items-center justify-center flex-col gap-4 w-full min-h-[300px] ">
            <h2>No user found</h2>
            <div className="flex items-center justify-center gap-4">
              <Link href="/login">
                <Button radius="full" variant="bordered">
                  Login
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button color="primary" radius="full">
                  Sign up for free
                </Button>
              </Link>
            </div>
          </div>
        )}
      </section>
    </section>
  );
};

export default ChatPage;
