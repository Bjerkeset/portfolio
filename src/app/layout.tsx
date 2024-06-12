// layout.tsx
import { Metadata } from "next";
import { Noto_Sans_Display } from "next/font/google";
import "../lib/style/globals.css";
import { ThemeProvider } from "@/components/ui/next-theme-provider";
import { cn } from "@/lib/utils";
import { CSPostHogProvider } from "@/components/context/providers";
import PostHogPageView from "@/components/context/PostHogPageView";

const inter = Noto_Sans_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bonds on Bitcoin",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn("flex flex-col items-center w-screen h-screen", inter)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* <CSPostHogProvider> */}
          {/* <PostHogPageView /> */}
          {children}
          {/* </CSPostHogProvider> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
