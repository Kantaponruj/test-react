"use client";
import { ArticalCard } from "@/components/artical-card";
import { articlesList } from "@/utils/article";
import { SearchOutlined } from "@ant-design/icons";
import Input from "antd/es/input";

export default function ArticlePage({
  articles = articlesList,
}: {
  articles: {
    key: string;
    title: string;
    subTitle: string;
  }[];
}) {
  return (
    <div className="w-full">
      <div className="mb-8">
        <Input
          size="large"
          placeholder="ค้นหาด้วยชื่อยา"
          prefix={<SearchOutlined />}
        />
      </div>
      <p className="text-[#464646] mb-4">{articles.length} บทความ</p>
      <div className="flex flex-wrap gap-4">
        {articles.map((article) => (
          <ArticalCard
            key={article.key}
            title={article.title}
            subTitle={article.subTitle}
            bookmarked={false}
          />
        ))}
      </div>
    </div>
  );
}
