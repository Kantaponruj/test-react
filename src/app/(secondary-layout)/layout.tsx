"use client";

import SecondaryLayout from "@/components/secondary-layout";
import { useParams, usePathname } from "next/navigation";

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const params = useParams();

  const title: Record<string, string> = {
    "/category": "รายชื่อยา A-Z",
    "/article": "บทความยาของฉัน",
  };

  const { id } = params;

  return (
    <SecondaryLayout name={id ? "รายชื่อยา " + id : title[pathname]}>
      {children}
    </SecondaryLayout>
  );
}
