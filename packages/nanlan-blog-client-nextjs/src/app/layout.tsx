import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/layout/Header";
import { QueryProvider } from "@/providers/query-provider";
// import { articleService } from "@/services/article";
// import { CategoryService } from "@/services/category";
// import { TagService } from "@/services/tag";
// import { ArticleSection } from "@/components/sideBar/ArticleSection";
// import { CategorySection } from "@/components/sideBar/CategorySection";
import { CommentSection } from "@/components/sideBar/CommentSection";
import { comments } from "@/mock/comments";
// import { TagSection } from "@/components/sideBar/TagSection";
// import { ArchiveSection } from "@/components/sideBar/ArchiveSection";
import "./globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nanlan Blog",
  description: "A personal blog built with Next.js",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const articles = await articleService.getArticles({ limit: 10 });
  // const tags = await TagService.getTags();
  // const categories = await CategoryService.getCategories();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <Header />
          <main className="mx-auto max-w-6xl px-4 py-8">
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="w-full md:w-[70%]">{children}</div>
              <div className="w-full md:w-[30%]">
                <div className="flex flex-col gap-6">
                  {/* <ArticleSection articles={articles.content} /> */}
                  <CommentSection comments={comments} />
                  {/* <CategorySection categories={categories} /> */}
                  {/* <TagSection tags={tags} /> */}
                  {/* <ArchiveSection articles={articles.content} /> */}
                </div>
              </div>
            </div>
          </main>
        </QueryProvider>
      </body>
    </html>
  );
}
