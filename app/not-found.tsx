import { Plane } from "lucide-react";
import Link from "next/link";


export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="">
        <Plane fontSize={62} />
      </div>
      <h1 className="text-2xl ">Not found</h1>
      <h2 className="text-lg ">
        Whooops! Couldn&apos;t find what you looking for
      </h2>
      <Link
        href="/"
        className="py-4 text-sm  "
      >
        Go back home
      </Link>
    </div>
  );
}
