import { Tag } from "@/types/tag";
import Link from "next/link";

export function TagCloud({ tags }: { tags: Tag[] }) {
  // 预定义的颜色列表
  const COLORS = [
    "#2196f3", // 蓝色
    "#4caf50", // 绿色
    "#ff9800", // 橙色
    "#9c27b0", // 紫色
    "#f44336", // 红色
    "#009688", // 青色
  ];

  // 根据标签名生成固定的颜色索引
  function getColorIndex(name: string): number {
    const result =
      name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
      COLORS.length;
    return result;
  }

  // 获取最大和最小计数，用于计算字体大小
  const maxCount = tags ? Math.max(...tags.map((tag) => tag.count)) : 0;
  const minCount = tags ? Math.min(...tags.map((tag) => tag.count)) : 0;

  // 计算标签的字体大小（12px - 24px）
  const getFontSize = (count: number) => {
    if (maxCount === minCount) return 16;
    const size = 12 + ((count - minCount) / (maxCount - minCount)) * (24 - 12);
    return Math.round(size);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {tags?.map((tag) => {
        return (
          <Link
            key={tag.id}
            href={`/tag/${tag.id}`}
            className="transition-colors hover:opacity-80"
            style={{
              fontSize: `${getFontSize(tag.count)}px`,
              color: COLORS[getColorIndex(tag.name)],
            }}
          >
            {tag.name}
            <span className="text-gray-custom ml-1">({tag.count})</span>
          </Link>
        );
      })}
    </div>
  );
}
