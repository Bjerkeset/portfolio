// layout.tsx
import { Metadata } from "next";
import { Noto_Sans_Display } from "next/font/google";
import "../lib/style/globals.css";
import { ThemeProvider } from "@/components/ui/next-theme-provider";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { CSPostHogProvider } from "@/components/context/providers";
import PostHogPageView from "@/components/context/PostHogPageView";

const interUnused = Noto_Sans_Display({ subsets: ["latin"] });

// // Configure Open Sauce One font
const inter = localFont({
  src: [
    {
      path: "../../public/fonts/open-sauce-one/OpenSauceOne-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    // Add other font weights and styles as needed
  ],
  display: "swap",
});

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
          {/* <Topbar /> */}
          {/* <AnimateTransition> */}
          <CSPostHogProvider>
            <PostHogPageView />
            {children}
          </CSPostHogProvider>
          {/* </AnimateTransition> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
