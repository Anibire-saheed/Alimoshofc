import { Suspense } from "react";
import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import "./globals.css";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
export const metadata: Metadata = {
  title: "Alimosho FC | The Pride of Lagos",
  description:
    "The home of Alimosho Football Club. Club news, fixtures, youth football and the community behind The Herd.",
  icons: { icon: "/images/1bcac2_43400b7c80e34296a59f25b9cce567ff~mv2.png" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Suspense
          fallback={
            <div
              className="min-h-screen bg-white"
              aria-label="Loading club website"
            />
          }
        >
          <Providers>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-white focus:p-4"
            >
              Skip to content
            </a>
            <Header />
            <main id="main">{children}</main>
            <Footer />
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
