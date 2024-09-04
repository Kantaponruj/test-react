import { Button } from "antd";
import { useState } from "react";
import { BookmarkedIcon, UnBookmarkedIcon } from "./icons";
import { useRouter } from "next/navigation";

export const ArticalCard = ({
  title,
  subTitle,
  bookmarked = false,
}: {
  title: string;
  subTitle: string;
  bookmarked: boolean | null;
}) => {
  const [isBookmarked, setIsBookmarked] = useState(bookmarked);
  const router = useRouter();

  return (
    <div
      className="relative rounded-lg bg-gray-400 shadow-lg w-[300px] h-[169px]"
      onClick={() => {
        router.push(`/category/a/detail`);
      }}
    >
      {bookmarked !== null && (
        <div className="absolute right-0 px-4 py-4">
          <Button
            style={{ backgroundColor: "white", color: "#464646" }}
            type="primary"
            icon={isBookmarked ? <BookmarkedIcon /> : <UnBookmarkedIcon />}
            onClick={() => setIsBookmarked(!isBookmarked)}
          />
        </div>
      )}
      <div className="absolute left-0 bottom-0 px-6 py-4">
        <h2 className="font-bold mb-2 text-white">
          <div>{title}</div>
          <div>{subTitle}</div>
        </h2>
      </div>
    </div>
  );
};
