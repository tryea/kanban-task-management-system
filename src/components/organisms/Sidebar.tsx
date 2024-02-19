"use client";

import Image from "next/image";
import React from "react";
import BoardItem from "../molecules/BoardItem";
import ThemeSwitch from "../molecules/ThemeSwitch";
import { useSidebar } from "@/providers/sidebar-provider";
import { motion } from "framer-motion";

type Props = {};

function Sidebar(props: Props) {
  const { isOpen } = useSidebar();

  const sidebarVariants = {
    open: {
      x: 0,
      opacity: 1,
      display: "flex",
    },
    closed: {
      x: "-100%",
      opacity: 0,
    },
  };

  return (
    <motion.div
      className="flex max-h-dvh min-h-dvh w-75 min-w-75 flex-col border-r border-kanban-paleBlue pb-22 pr-6 pt-8 dark:border-kanban-mediumGray dark:bg-kanban-darkGray"
      variants={sidebarVariants}
      animate={isOpen ? "open" : "closed"}
      initial={false}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <div className="flex flex-row items-center gap-4">
        <div className="relative ml-8 aspect-auto size-6 cursor-pointer">
          <Image src={`/icons/brand.svg`} alt="kanban" fill />
        </div>
        <p className="text-3xl font-bold">kanban</p>
      </div>
      <div className="ml-8 mt-14">
        <p className="text-xs font-bold text-kanban-grayBlue ">
          ALL BOARDS (3)
        </p>
      </div>
      <div className="mt-5 flex-1">
        <BoardItem label="Platform Launch" active />
        <BoardItem label="Marketing Plan" />
        <BoardItem label="Roadmap" />
        <BoardItem label="+ Create New Board" create />
      </div>
      <div className="flex flex-col">
        <ThemeSwitch />
      </div>
    </motion.div>
  );
}

export default Sidebar;
