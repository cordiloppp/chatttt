"use client";

import { useStoreUserEffect } from "@/convex/useStoreUserEffect";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import React from "react";

type Props = {};

const Userloging = (props: Props) => {
  const { isLoading, isAuthenticated } = useStoreUserEffect();
  return (
    <main>
      {isLoading ? (
        <>Loading...</>
      ) : !isAuthenticated ? (
        <SignInButton />
      ) : (
        <>
          <UserButton />
        </>
      )}
    </main>
  );
};

export default Userloging;
