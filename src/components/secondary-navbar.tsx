"use client";
import { useRouter } from "next/navigation";
import { BackIcon } from "./icons";
import { Button } from "antd";
import { Header } from "antd/es/layout/layout";

export const SecondaryNavbar = ({ name }: { name: string }) => {
  const router = useRouter();

  return (
    <Header
      className="flex justify-start shadow-md rounded-2xl"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        height: "auto",
        backgroundColor: "white",
        padding: "16px 8px",
      }}
    >
      <div className="flex w-full items-center">
        <Button
          className="flex-none text-gray-600"
          style={{ padding: "0px" }}
          type="link"
          onClick={() => router.back()}
        >
          <BackIcon />
        </Button>
        <div className="flex grow items-center justify-center">
          <h2 className="font-semibold">{name}</h2>
        </div>
      </div>
    </Header>
  );
};
