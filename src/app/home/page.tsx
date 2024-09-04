"use client";
import React from "react";
import { MedicineCard } from "@/components/medicine-card";
import Section from "@/components/section";
import { ArticalCard } from "@/components/artical-card";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Home = () => {
  const medicineName = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const article = [
    {
      key: "atenolol",
      title: "Atenolol",
      subTitle: "อะทีโนลอล",
    },
    {
      key: "promethazine",
      title: "Promethazine",
      subTitle: "โปรเมทาซีน",
    },
    {
      key: "methylphenidate",
      title: "Methylphenidate",
      subTitle: "เมทิลเฟนิเดต",
    },
    {
      key: "ibuprofen",
      title: "Ibuprofen",
      subTitle: "อิบูโพฟัน",
    },
    {
      key: "aspirin",
      title: "Aspirin",
      subTitle: "อะซิพิร์น",
    },
    {
      key: "diclofenac",
      title: "Diclofenac",
      subTitle: "ดิคโซนาค",
    },
  ];

  return (
    <div className="min-h-screen ">
      <div className=" bg-gray-300 h-[200px] rounded-lg mb-8"></div>
      {/* Search Section */}
      <div className="mb-4">
        <Input
          size="large"
          placeholder="ค้นหาด้วยชื่อยา"
          prefix={<SearchOutlined />}
        />
      </div>

      <Section name="รายชื่อยา A-Z" link={"/category"}>
        {/* Letters Grid */}
        <div className="grid grid-cols-4 gap-4">
          {medicineName.map((name) => (
            <MedicineCard key={name} name={name} />
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center mt-4">
          <span className="w-2 h-2 bg-gray-800 rounded-full mr-1"></span>
          <span className="w-2 h-2 bg-gray-300 rounded-full mr-1"></span>
          <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
        </div>
      </Section>

      <Section name="บทความยาของฉัน" link={"/article"}>
        <div className="w-full flex flex-nowrap gap-4 overflow-x-auto ">
          {article.map((article) => (
            <div key={article.key} className="flex-nowrap">
              <ArticalCard
                title={article.title}
                subTitle={article.subTitle}
                bookmarked={true}
              ></ArticalCard>
            </div>
          ))}
        </div>
      </Section>

      <Section name="แบบประเมินอาการ" link={undefined}>
        <div className=" bg-gray-300 h-[200px] rounded-lg"></div>
      </Section>

      <Section name="บทความแนะนำเกี่ยวกับยา" link={undefined}>
        <div className="w-full flex flex-nowrap gap-4 overflow-x-auto ">
          {article.map((article) => (
            <div key={article.key} className="flex-nowrap">
              <ArticalCard
                title={article.title}
                subTitle={article.subTitle}
                bookmarked={false}
              ></ArticalCard>
            </div>
          ))}
        </div>
      </Section>

      <Section name="บทความยอดนิยมเกี่ยวกับยา" link={undefined}>
        <div className="w-full flex flex-nowrap gap-4 overflow-x-auto ">
          {article.map((article) => (
            <div key={article.key} className="flex-nowrap">
              <ArticalCard
                title={article.title}
                subTitle={article.subTitle}
                bookmarked={false}
              ></ArticalCard>
            </div>
          ))}
        </div>
      </Section>

      {/* My Articles Section */}
      {/* <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">บทความยาของฉัน</h3>
        <div className="grid grid-cols-2 gap-4">
          {["Atenolol", "Methylphenidate", "Promethazine", "Nitroglycerin"].map(
            (article) => (
              <Card key={article} className="rounded-lg">
                <Image
                  src={`/path_to_${article.toLowerCase()}_image`} // Replace with actual image paths
                  alt={article}
                  className="rounded-lg"
                />
                <CardBody>
                  <h4 className="text-base font-semibold">{article}</h4>
                  <p className="text-gray-600">รายละเอียดเกี่ยวกับ {article}</p>
                </CardBody>
              </Card>
            )
          )}
        </div>
      </div> */}

      {/* Symptom Assessment */}
      {/* <Card className="mb-6">
        <Image
          src="/path_to_symptom_assessment_image" // Replace with actual image path
          alt="Symptom Assessment"
          className="rounded-lg"
        />
        <CardBody>
          <h4 className="text-lg font-semibold">โรคหอบหืด</h4>
          <p className="text-gray-600">
            โรคทางเดินหายใจร้ายแรง จนอาจทำให้เสียชีวิต
          </p>
        </CardBody>
      </Card> */}
    </div>
  );
};

export default Home;
