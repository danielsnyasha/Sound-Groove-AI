import Sidebar from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";

const inter = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stream Groove",
  description: "Most awesome tunes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <SupabaseProvider>
        <UserProvider>
          <ModalProvider/>
        
          <Sidebar>{children}</Sidebar>
          
        
        </UserProvider>
        </SupabaseProvider>
        
      </body>
    </html>
  );
}