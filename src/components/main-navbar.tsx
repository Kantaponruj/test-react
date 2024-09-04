"use client";

const { Header } = Layout;

import { LocationIcon, NotificationIcon, QRcodeIcon } from "@/components/icons";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Layout } from "antd";

export const MainNavbar = () => {
  return (
    <Header
      className="flex justify-between shadow-md rounded-2xl"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        height: "auto",
        backgroundColor: "white",
        padding: "24px 16px",
      }}
    >
      <div className="flex items-center">
        <div className="flex items-center">
          <Avatar size="large" icon={<UserOutlined />} />
          <div className="ml-4">
            <h2 className="text-base font-semibold">Telehealth Thailand</h2>
            <div className="flex items-center space-x-1">
              <LocationIcon />
              <p className="text-lg text-[#3C6CE7]">สำนักงานเลขาธิการ...</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <QRcodeIcon />
        <NotificationIcon />
      </div>
    </Header>
  );
};
