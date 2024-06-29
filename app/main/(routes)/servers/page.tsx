import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div className="space-y-6 text-center">
        <h1 className={cn(
          "text-6xl font-semibold  drop-shadow-md",
          font.className,
        )}>
          Server Page
        </h1>
      </div>
      <ModeToggle />
    </main>
  )
}
