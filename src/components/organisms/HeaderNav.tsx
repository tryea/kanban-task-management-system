import React from "react";
import { TrippleDotIcon } from "../icons/icons";

type Props = {};

function HeaderNav(props: Props) {
  return (
    <div
      className={`flex h-24 w-full flex-row items-center justify-between bg-kanban-white px-6 dark:bg-kanban-darkGray`}
    >
      <div className={`select-none heading-xl`}>
        <p>Platform Launch</p>
      </div>
      <div className="flex flex-row items-center gap-6">
        <div>
          <button
            type="button"
            className={`rounded-full bg-kanban-purple px-6 py-3.5 text-kanban-white heading-m hover:bg-kanban-lightPurple dark:hover:bg-kanban-purple/65`}
          >
            + Add New Task
          </button>
        </div>
        <div>
          <TrippleDotIcon
            className={`aspect-auto h-5 cursor-pointer fill-current text-kanban-grayBlue`}
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderNav;
