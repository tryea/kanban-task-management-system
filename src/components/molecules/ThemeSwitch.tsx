// ThemeSwitch.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex w-full justify-center pl-6">
      <div
        className={`relative flex h-12 w-64 cursor-pointer items-center justify-center gap-6 rounded-md p-1 ${theme === "dark" ? "bg-kanban-charcoal" : "bg-kanban-veryPaleBlue"}`}
        onClick={toggleTheme}
        style={{ transition: "all 0.3s ease" }}
      >
        <Image
          src="/icons/light-mode.svg"
          alt="Light Mode"
          width={24}
          height={24}
          className="select-none"
        />
        <div className="relative flex h-6 w-12 rounded-full bg-kanban-purple">
          <div
            className={`absolute top-1 size-4 rounded-full bg-kanban-white ${theme === "dark" ? "right-1" : "left-1"}`}
            style={{ transition: "transform 0.3s ease" }}
          />
        </div>

        <Image
          src="/icons/dark-mode.svg"
          alt="Dark Mode"
          width={24}
          height={24}
          className="select-none"
        />
      </div>
    </div>
  );
};

export default ThemeSwitch;
