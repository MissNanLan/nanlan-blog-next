import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArchiveGroup } from "@/types/archive";
import { Calendar } from "lucide-react";
import Image from "next/image";

const timelineData = [
  {
    year: "2020",
    items: [
      {
        id: "1",
        title: "mysql 查询设置事务隔离级别",
        date: "2020-05-18",
        image: "/images/thumbnail.jpeg",
      },
      {
        id: "2",
        title: "InnoDB 为什么要选择 B + 树来存储数据",
        date: "2020-02-27",
        image: "/images/thumbnail.jpeg",
      },
      {
        id: "3",
        title: "mvcc 浅析",
        date: "2020-02-22",
        image: "/images/thumbnail.jpeg",
      },
    ],
  },
  {
    year: "2019",
    items: [
      {
        id: "4",
        title: "Mysql Explain 工具使用及索引调优",
        date: "2019-09-15",
        image: "/images/thumbnail.jpeg",
      },
    ],
  },
];

export type TimeAxisItemProps = {
  title: string;
  date: string;
  image?: string;
  id: string;
};

export type TimeAxisGroupProps = {
  year: string;
  items: TimeAxisItemProps[];
};

export function TimeAxis({ groups }: { groups: TimeAxisGroupProps[] }) {
  return (
    <div className="relative">
      {/* 主竖线 */}
      <div className="bg-primary absolute left-0 top-0 h-full w-[2px]" />

      <div className="space-y-8">
        {timelineData.map((group) => (
          <div key={group.year} className="relative">
            {/* 年份标记点 */}
            <div className="left border-primary absolute left-[-10px] top-0 h-6 w-6 rounded-full border-4 bg-white" />
            {/* 年份 */}
            <h2 className="mb-6 ml-6 text-2xl font-bold">{group.year}</h2>

            <div className="space-y-4">
              {group.items.map((item) => (
                <div key={item.id} className="relative">
                  <div className="left absolute left-[-6px] top-1/2 h-3 w-3 rounded-full border-2 border-orange-400 bg-white" />
                  <div className="ml-8 flex">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="rounded-md object-cover"
                    />
                    <div className="ml-2">
                      <div className="text-gray-custom flex items-center gap-1 text-sm">
                        <Calendar size={12} />
                        {item.date}
                      </div>
                      <div className="line-clamp-2 text-lg">{item.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
