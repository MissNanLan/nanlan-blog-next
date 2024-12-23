import Link from "next/link";
import {
  Home,
  Tags,
  Archive,
  FolderTree,
  Search,
  Menu, // 移动端菜单图
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";

export default function Header() {
  const NavBar = () => {
    const navbarList = [
      {
        name: "首页",
        icon: Home,
        href: "/",
      },
      {
        name: "标签",
        icon: Tags,
        href: "/tag",
      },
      {
        name: "分类",
        icon: FolderTree,
        href: "/category",
      },
      {
        name: "归档",
        icon: Archive,
        href: "/archive",
      },
    ];

    return (
      <>
        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          <span className="flex items-center gap-2">
            <Search className="h-4 w-4" /> 搜索
          </span>
          {navbarList.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-primary group relative flex items-center gap-2 text-sm transition-colors"
            >
              <item.icon className="h-4 w-4" />
              <span>{item.name}</span>
              <span className="bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>
        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <Sheet>
            <Search className="h-4 w-4" />
            <SheetTrigger>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent showCloseButton={false}>
              <nav className="mt-4 flex flex-col space-y-2">
                {navbarList.map((item) => (
                  <SheetClose asChild key={item.name} className="md:hidden">
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 p-2"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </>
    );
  };

  return (
    <header className="bg-background sticky top-0 z-50 border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold">
          Nanlan Blog
        </Link>
        <NavBar />
      </div>
    </header>
  );
}
