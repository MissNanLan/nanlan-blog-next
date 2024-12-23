"use client";

import { TimeAxis } from "@/components/TimeAxis";
import { useEffect } from "react";

export default function ArchivePage() {
  useEffect(() => {
    // 组件加载时的副作用
  }, []);

  const timeAxis = {
    title: "2024-01-01",
    year: "2024",
    image: "",
    date: "2024-01-01",
    description: "2024-01-01",
    id: "1",
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <TimeAxis timeAxis={timeAxis} />
    </div>
  );
}
