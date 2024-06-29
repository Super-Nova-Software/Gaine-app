import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { getUserByClerkId } from "@/data/user";
import { getUserId } from "@/lib/actions";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div className="space-y-6 text-center">
        <h1 className={cn(
          "text-4xl font-semibold drop-shadow-md",
          font.className,
        )}>
          Main Page
        </h1>
      </div>
      <p>
      Choose a server to start having fun.
      </p>

    </main>
  )
}
