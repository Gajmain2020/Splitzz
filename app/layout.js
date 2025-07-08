import { Inter } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "../components/convexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "../components/Header";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Splitzz",
  description: "The smartest way to split expense with friends.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/splitzz.png" sizes="any" />
      </head>
      <body className={`${inter.className}`}>
        <ClerkProvider>
          <ConvexClientProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
          </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
