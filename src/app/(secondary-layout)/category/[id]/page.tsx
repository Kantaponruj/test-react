"use client";
import ArticlePage from "@/app/(secondary-layout)/article/page";
import { articlesCategoryA } from "@/utils/article";

export default function CategorySelectedPage() {
  return <ArticlePage articles={articlesCategoryA}></ArticlePage>;
}
