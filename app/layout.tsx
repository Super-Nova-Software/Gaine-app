import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import { ApolloWrapper } from "@/lib/apollo-wrapper";
import { ModalProvider } from "@/components/providers/modal-provider";
import { SheetProvider } from "@/components/providers/sheet-provider";
const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gaine',
  description: 'The connected workspace where better, faster work happens.',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/greer-light.svg",
        href: "/greer-light.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "./greer-dark.svg",
        href: "/greer-dark.svg",
      }
    ]
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <ApolloWrapper>
        <html lang="en" suppressHydrationWarning>
          <body className={cn(font.className, "bg-white dark:bg-[#313338]")}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
              <ModalProvider/>
              <SheetProvider />
              <Toaster />
              {children}
            </ThemeProvider>
          </body>
        </html>
      </ApolloWrapper>
  );
}





