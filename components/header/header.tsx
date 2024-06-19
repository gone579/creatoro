import Image from "next/image";
import React, { FC } from "react";
import { LinkHeader } from "./link-header";
import { UserHeader } from "./user-header";
interface Props {}
export const HeaderComponent: FC<Props> = ({}) => {
  return (
    <div className="max-w-screen-2xl border-b border-border-bottom">
      <div className="py-[10px] px-10 flex flex-row max-w-screen-xl mx-auto justify-between items-center md:gap-[90px] border-b border-border-bottom">
        <div className="flex flex-row gap-[10px] items-center">
          <Image src="/logo.svg" alt="logo" width={44} height={44} />
          <h1 className="font-bold text-[30px] hidden md:block">CREATORO</h1>
        </div>
        <LinkHeader />
        <UserHeader />
      </div>
    </div>
  );
};
