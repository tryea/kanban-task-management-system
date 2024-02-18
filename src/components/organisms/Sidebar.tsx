import Image from "next/image";
import React from "react";
import BoardItem from "../molecules/BoardItem";

type Props = {};

function Sidebar(props: Props) {
  return (
    <div className="flex max-h-dvh min-h-dvh w-75 min-w-75 flex-col border-r border-kanban-paleBlue py-8 pr-6">
      <div className="relative ml-8 aspect-auto h-6 w-38">
        <Image src={`/icons/brand.svg`} alt="kanban" fill />
      </div>
      <div className="ml-8 mt-14">
        <p className="text-xs font-bold ">ALL BOARDS (3)</p>
      </div>
      <div className="mt-5">
        <BoardItem label="Platform Launch" active />
        <BoardItem label="Marketing Plan" />
        <BoardItem label="Roadmap" />
        <BoardItem label="+ Create New Board" create />
      </div>
    </div>
  );
}

export default Sidebar;
