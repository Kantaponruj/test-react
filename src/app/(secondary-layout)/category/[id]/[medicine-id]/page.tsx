"use client";
import { ArticalCard } from "@/components/artical-card";
import { ChatIcon } from "@/components/icons";
import Section from "@/components/section";
import { articlesList } from "@/utils/article";
import { Button } from "antd";
import "dayjs/locale/th";

export default function DetailPage() {
  const tag = ["ยารับประทาน", "ยาฉีด"];
  const listData = [
    { title: "กำลังยา", description: "ยาซัดยายเลื่อน" },
    { title: "ประชาการ", description: "ยาตามความจำเป็น" },
    { title: "สรรพคุณ", description: "ดังยายเลื่อนยิ้ม ซิตียาเชียงใหม่" },
    { title: "กำลังยาวย", description: "เด็กแล้วยำเบย" },
    { title: "รูปแบบของยา", description: "ยาหอมแดงใช้เย็น ยายบุปผชาติ" },
  ];
  const about = {
    name: "Acetylcysteine",
    description:
      "การใช้ยา Acetylcysteine เพื่อป้องกันอาการป่วย และความ เสียหายที่อาจเกิดขึ้นกับตับจากการใช้ยาพาราเซตามอลเกินขนาด หรือเพื่อป้องกันความเสียหายที่อาจเกิดขึ้นกับไตจาก การใช้สารทึบรังสีช่วยในขั้นตอนการฉายภาพเอกซเรย์ หรือ  CT scan แพทย์อาจจ่ายยาในรูปแบบยารับประทานหรือยาฉีด ในปริมาณที่เหมาะสม ดังนั้น ผู้ป่วยต้องใช้ยาตามปริมาณ และ วิธีการที่แพทย์กำหนดเท่านั้น เพื่อป้องกันการเกิดผลข้างเคียง ที่เป็นอันตรายจากการใช้ยา เมื่อมีข้อสงสัยเกี่ยวกับการใช้ยา ต้องสอบถามแพทย์ผู้ดูแลให้เข้าใจถี่ถ้วนก่อนเสมอ",
  };

  return (
    <div>
      <div className="w-full">
        <div className="relative rounded-lg bg-gray-400 shadow-lg w-full h-[169px]">
          <div className="absolute left-0 bottom-0 px-6 py-4">
            <h2 className="font-bold mb-2 text-white">
              <div>{"Acetylcysteine"}</div>
              <div>{"(อะเซทิลซิสเทอีน)"}</div>
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {tag.map((tag) => DisplayTag({ tag: tag }))}
        </div>
        <div className="flex flex-wrap gap-2 my-4">
          <p>7 ก.ย. 2566</p>
          <p>ดูจำนวน 2.3 หมื่นครั้ง</p>
        </div>

        <HorizontalLine />

        <div>
          <span>
            <span className="font-bold">Acetylcysteine (อะเซทิลซิสเทอีน) </span>
            คือ ยาขับเสมหะ หรือยา ละลายเสมหะ
            ใช้รักษาอาการป่วยจากการรับประทานยาพารา เซตามอล เกินขนาด
            เพื่อป้องกันการเกิดความเสียหายที่ตับ
            และรักษาภาวะอาการที่เกิดมูกเหลวเหนียวข้นขึ้นจนเกิดปัญหาการหายใจจากภาวะหรือโรคที่เกี่ยวข้องกับอวัยวะในระบบทาง
            เดินหายใจ เช่น หลอดลมอักเสบ ถุงลมโป่งพอง ปอดบวม ปอดอักเสบ เป็นต้น
            โดยยาจะช่วยสลายมูกเหนียวข้นให้เจือ
            จางลงเพื่อให้ระบบทางเดินหายใจขับมูกเสมหะเหล่านั้นออกมาได้
            และช่วยให้ผู้ป่วยหายใจได้สะดวกขึ้นในที่สุด
          </span>
        </div>

        <HorizontalLine />

        <div>
          {listData.map((item, index) => (
            <ListItem
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <div>
          <h3 className="text-lg font-semibold">เกี่ยวกับ {about.name}</h3>
          <p className="pt-3">{about.description}</p>
        </div>

        <HorizontalLine />

        <Section name="บทความประเภทของยาที่เกี่ยวข้อง" link={undefined}>
          <div className="w-full flex flex-nowrap gap-4 overflow-x-auto ">
            {articlesList.map((article) => (
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
      </div>
      <div className="sticky bottom-0 bg-transparent pb-3">
        <Button
          className="w-full h-[73px]"
          style={{ height: "73px" }}
          type="primary"
        >
          <div>
            <div className="flex items-center justify-center gap-2">
              <ChatIcon />
              <p className="text-base font-bold">ปรึกษาด่วน</p>
            </div>
            <p className="text-sm">ปรึกษาสุขภาพกับบุคลากรทางการเเพทย์</p>
          </div>
        </Button>
      </div>
    </div>
  );
}

const DisplayTag = ({ tag }: { tag: string }) => {
  return (
    <div className="w-fit rounded-lg bg-white border-solid border-1 border-[#EDEDED]">
      <p className="px-4 py-2">{tag}</p>
    </div>
  );
};

interface ListItemProps {
  title: string;
  description: string;
}

const ListItem: React.FC<ListItemProps> = ({ title, description }) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="text-lg font-medium">{title}</div>
        <div className="text-sm text-gray-600">{description}</div>
      </div>
      <HorizontalLine />
    </div>
  );
};

const HorizontalLine: React.FC = () => {
  return (
    <div className="my-4">
      <hr className="mt-2 border-solid border-1 border-black " />
    </div>
  );
};
