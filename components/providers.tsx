"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import { makeStore, type AppStore } from "@/lib/store";
export function Providers({ children }: { children: React.ReactNode }) {
  const store = useRef<AppStore | null>(null);
  if (!store.current) store.current = makeStore();
  return (
    <Provider store={store.current}>
      {children}
      <Toaster richColors position="bottom-right" closeButton />
    </Provider>
  );
}
