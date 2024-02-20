"use client";

import React, { ReactNode } from "react";
import HeaderNav from "./HeaderNav";
import { motion, Variants } from "framer-motion";
import { useSidebar } from "@/providers/sidebar-provider";

type Props = {
  children: ReactNode;
};

function MainWrapper({ children }: Props) {
  const { isOpen } = useSidebar();

  const sidebarVariants: Variants = {
    open: {
      x: 0,
      maxWidth: "calc(100dvw - 18.75rem)",
      minWidth: "calc(100dvw - 18.75rem)",
    },
    closed: {
      x: "-18.75rem",
      maxWidth: "calc(100dvw - 0rem)",
      minWidth: "calc(100dvw - 0rem)",
    },
  };

  return (
    <motion.div
      className="flex max-w-full flex-1 flex-col"
      variants={sidebarVariants}
      animate={isOpen ? "open" : "closed"}
      transition={{
        type: "just",
        stiffness: 260,
        damping: 20,
      }}
    >
      <HeaderNav />
      <main className="flex max-w-full flex-1 bg-kanban-veryPaleBlue dark:bg-kanban-darkGray">
        {children}
      </main>
    </motion.div>
  );
}

export default MainWrapper;
