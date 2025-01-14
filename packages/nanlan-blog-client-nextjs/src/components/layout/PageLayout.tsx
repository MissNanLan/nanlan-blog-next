import { ArticleProvider } from "../../contexts/ArticleContext";
import { Sidebar } from "../sidebar";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <div className="w-full md:w-[70%]">{children}</div>
      <div className="w-full md:w-[30%]">
        <ArticleProvider>
          <Sidebar />
        </ArticleProvider>
      </div>
    </div>
  );
}
