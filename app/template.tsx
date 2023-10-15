"use client";
import React, { ReactNode } from "react";
import TopNavigation from "@/app/components/TopNavigation";
import BottomDeclaration from "@/app/components/BottomDeclaration";
import { useSearchParams } from "next/navigation";

const Template = ({ children }: { children: ReactNode }) => {
  const s = useSearchParams();
  const search: any = [];
  for (const [key, value] of s.entries()) {
    search[key] = value;
  }
  console.log(search);

  return (
    <div>
      <div>{search.toString()}</div>
      <TopNavigation />
      {children}
      <BottomDeclaration />
    </div>
  );
};

export default Template;
