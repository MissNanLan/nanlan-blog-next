"use client";

import { useEffect } from "react";
// import { getAllArticlesByCondition } from "@/mock/articles";
import { TimeAxis } from "@/components/TimeAxis";
import { Card, CardContent } from "@/components/ui/card";

export default function TagsPage() {
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
    <Card>
      <CardContent className="p-8">
        <TimeAxis />
      </CardContent>
    </Card>
  );
}
