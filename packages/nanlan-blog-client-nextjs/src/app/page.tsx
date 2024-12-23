import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/mock/articles";

export default function Home() {
  return (
    <div className="space-y-4">
      {articles.map((article) => (
        <div key={article.id}>
          <ArticleCard {...article} />
        </div>
      ))}
    </div>
  );
}
