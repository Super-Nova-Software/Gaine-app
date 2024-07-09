"use client";

import { useEffect, useState } from "react";
import MemberListSheet from "../sheet/member-list-Sheet";

export const SheetProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <MemberListSheet />
    </>
  )
}