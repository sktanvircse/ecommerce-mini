"use client";

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Provider } from "react-redux";
import { store, persistor } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";

export const metadata: Metadata = {
  title: "E-Commerce Mini",
  description: "A mini e-commerce project with Next.js 15 + TailwindCSS + shadcn/ui",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
