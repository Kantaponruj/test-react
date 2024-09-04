"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Main = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  });

  return <></>;
};

export default Main;
