"use client";

import { useSidebar } from "@/providers/sidebar-provider";
import Image from "next/image";
import React from "react";
import { SidebarOpenIcon } from "../icons/icons";

type Props = {};

const SidebarSwitch = (props: Props) => {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <div
      className={`group absolute bottom-8 z-20 flex h-12 ${isOpen ? "w-69 min-w-69 justify-start px-6" : "w-14 min-w-14 justify-center bg-kanban-purple"} cursor-pointer select-none flex-row items-center gap-4 rounded-r-full text-kanban-grayBlue ${isOpen ? "hover:bg-kanban-purple/10 dark:hover:bg-kanban-white" : "hover:bg-kanban-lightPurple"}  transition-all duration-300 hover:text-kanban-purple`}
      onClick={() => {
        toggleSidebar();
      }}
    >
      {isOpen ? (
        <>
          <div className="flex items-center">
            <SidebarOpenIcon className=" group-hover:fill-current group-hover:text-kanban-purple" />
          </div>
          <div className="heading-m">
            <p>Hide Sidebar</p>
          </div>
        </>
      ) : (
        <div className="relative size-4">
          <Image src={`/icons/sidebar-close.svg`} fill alt="close sidebar" />
        </div>
      )}
    </div>
  );
};

export default SidebarSwitch;
