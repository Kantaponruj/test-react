import type { Metadata } from "next";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import theme from "@/theme/themeConfig";
import { notoSans } from "@/config/fonts";

export const metadata: Metadata = {
  title: "Test React",
  description: "Test React Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <AntdRegistry>
          <ConfigProvider theme={theme}>
            <div className=" bg-[#F1F1F1]">{children}</div>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
