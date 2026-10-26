"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setMenuOpen, type RootState } from "@/lib/store";
import { primaryNavigation, secondaryNavigation } from "@/lib/navigation";
import { assets } from "@/lib/content";
import { Button } from "@/components/ui/button";

const desktopNavigation = [
  { label: "HOME", href: "/" },
  { label: "GOALFUNDA", href: "/goalfunda" },
  {
    label: "MEMBERS",
    href: "/members",
    children: [
      ["MEMBERS", "/members"],
      ["YOUTH TEAM", "/youth-team"],
      ["PREDICT & WIN", "/predict-win"],
      ["CLUB STORE", "/club-store"],
      ["TOURS", "/tours"],
    ],
  },
  { label: "BLOG", href: "/blog" },
  {
    label: "LEARN FOOTBALL",
    href: "/soccer-schools",
    children: [
      ["SOCCER SCHOOLS", "/soccer-schools"],
      ["SCHOOL SPORTS", "/school-sports"],
    ],
  },
  { label: "SCHEDULE", href: "/schedule" },
  {
    label: "ABOUT",
    href: "/about",
    children: [["CONTACT", "/contact"]],
  },
];

export function Header() {
  const pathname = usePathname();
  const open = useSelector((s: RootState) => s.club.menuOpen);
  const dispatch = useDispatch();

  return (
    <header className="club-header sticky top-0 z-40 text-black">
      <div className="mx-auto flex min-h-24 max-w-[1444px] items-center justify-between gap-8 px-6 xl:h-[137px]">
        <div className="flex shrink-0 items-center gap-3 xl:gap-[14px]">
          <Link
            href="/"
            aria-label="Alimosho FC home"
            onClick={() => dispatch(setMenuOpen(false))}
            className="shrink-0"
          >
            <Image
              src={assets.logo}
              width={80}
              height={87}
              alt="Alimosho Sports Club crest"
              className="h-auto w-[55px] xl:w-20"
              priority
            />
          </Link>
          <a href="https://www.plus.fifa.com/" aria-label="FIFA Plus">
            <Image
              src={assets.fifa}
              width={130}
              height={82}
              alt="FIFA+"
              className="h-auto w-[95px] xl:w-[130px]"
            />
          </a>
        </div>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 xl:flex 2xl:gap-[42px]">
          {desktopNavigation.map(({ label, href, children }) => {
            const active = pathname === href || children?.some(([, path]) => pathname === path);
            return (
              <div key={label} className="group relative py-5">
                <Link
                  href={href}
                  aria-current={pathname === href ? "page" : undefined}
                  className={`nav-link ${active ? "text-white" : "text-black"}`}
                >
                  {label}
                </Link>
                {children && (
                  <div className="invisible absolute left-0 top-full min-w-52 border-t-2 border-white/60 bg-[#88bf73] p-3 opacity-0 shadow-lg transition-[opacity,visibility] group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    {children.map(([text, path]) => (
                      <Link
                        key={path}
                        href={path}
                        className="block px-3 py-3 font-heading text-lg hover:bg-white/15 focus-visible:bg-white/15"
                        aria-current={pathname === path ? "page" : undefined}
                        onClick={(event) => event.currentTarget.blur()}
                      >
                        {text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <Button
          variant="outline"
          size="icon"
          className="shrink-0 xl:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => dispatch(setMenuOpen(!open))}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="grid max-h-[calc(100dvh-96px)] grid-cols-2 gap-x-4 gap-y-2 overflow-x-hidden overflow-y-auto border-t border-black/10 px-6 py-5 xl:hidden"
        >
          {[...primaryNavigation, ...secondaryNavigation].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              onClick={() => dispatch(setMenuOpen(false))}
              className="min-w-0 py-3 font-heading text-lg hover:text-white aria-[current=page]:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
