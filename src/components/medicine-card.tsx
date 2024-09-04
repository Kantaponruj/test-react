"use client";

import { useRouter } from "next/navigation";

export const MedicineCard = ({ name }: { name: string }) => {
  const router = useRouter();
  return (
    <div
      key={name}
      className="flex flex-col items-center space-y-1"
      onClick={() => {
        router.push(`/category/a`);
      }}
    >
      <div className="bg-white shadow-lg shadow-[#C4DAFF80] opacity-50 w-[74px] h-[74px]  flex items-center justify-center rounded-full">
        <span className="text-2xl font-bold text-gray-800">{name}</span>
      </div>
      <p className="text-sm text-gray-600 pt-2">รายชื่อยา {name}</p>
    </div>
  );
};
