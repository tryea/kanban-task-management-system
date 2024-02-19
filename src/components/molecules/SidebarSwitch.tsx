"use client";

import { useSidebar } from "@/providers/sidebar-provider";
import Image from "next/image";
import React from "react";
import { SidebarOpenIcon } from "../icons/icons";

type Props = {};

const SidebarSwitch = (props: Props) => {
  const { isOpen, toggleSidebar } = useSidebar();

  if (isOpen) {
    return (
      <div
        className="group absolute bottom-8 flex h-12 w-69 min-w-69 cursor-pointer select-none flex-row items-center gap-4 rounded-r-full px-6 text-kanban-grayBlue hover:bg-kanban-lightPurple/10  hover:text-kanban-purple "
        onClick={() => {
          toggleSidebar();
        }}
      >
        <div className="flex items-center">
          <SidebarOpenIcon className=" group-hover:fill-current group-hover:text-kanban-purple" />
        </div>
        <div className="heading-m">
          <p>Hide Sidebar</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="absolute bottom-8 z-20 flex min-h-12 min-w-14 cursor-pointer items-center justify-center rounded-r-full bg-kanban-purple"
      onClick={() => {
        toggleSidebar();
      }}
    >
      <div className="relative size-4">
        <Image src={`/icons/sidebar-close.svg`} fill alt="close sidebar" />
      </div>
    </div>
  );
};

export default SidebarSwitch;
