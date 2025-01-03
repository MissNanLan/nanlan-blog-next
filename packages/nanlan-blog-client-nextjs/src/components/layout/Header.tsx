"use client";

import Link from "next/link";
import { Home, Tags, Archive, FolderTree, Search, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Header() {
  const NavBar = () => {
    const pathname = usePathname();
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

    // 抽取共用的链接样式
    const linkStyles = "flex items-center gap-2 text-sm transition-colors";
    const activeLinkStyles = "text-primary";
    const hoverLinkStyles = "hover:text-primary";
    const underlineStyles =
      "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all";

    return (
      <>
        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          <span className={cn(linkStyles, hoverLinkStyles)}>
            <Search className="h-4 w-4" /> 搜索
          </span>
          {navbarList.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                linkStyles,
                hoverLinkStyles,
                "group relative",
                pathname === item.href && activeLinkStyles,
              )}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.name}</span>
              <span
                className={cn(
                  underlineStyles,
                  "w-0 group-hover:w-full",
                  pathname === item.href && "w-full",
                )}
              />
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <Sheet>
            <Search className="h-4 w-4" />
            <SheetTrigger asChild>
              <Menu className="h-6 w-6" />
            </SheetTrigger>

            <SheetContent showCloseButton={false}>
              <nav className="mt-4 flex flex-col space-y-2">
                {navbarList.map((item) => (
                  <SheetClose asChild key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        linkStyles,
                        hoverLinkStyles,
                        "p-2",
                        pathname === item.href && activeLinkStyles,
                      )}
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
