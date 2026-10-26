import Image from "next/image";
import { assets } from "@/lib/content";
export function Footer() {
  return (
    <footer className="bg-[#efefef] text-center">
      <Image
        src={assets.footer}
        alt="Alimosho FC club partners"
        width={1345}
        height={140}
        className="h-auto w-full"
      />
      <p className="px-5 py-8 text-xs">
        © 2024 by MATCHDAY HYPE. Proudly Nigerian
      </p>
    </footer>
  );
}
