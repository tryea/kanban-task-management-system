import Image from "next/image";
import React from "react";

type Props =
  | {
      label: string;
      active?: boolean;
    }
  | {
      create: true;
    };

function BoardItem(props: Props) {
  if ("create" in props) {
    return (
      <div
        className={`flex h-12 flex-row items-center gap-4 rounded-r-full pl-8`}
      >
        <div className="relative aspect-square w-4">
          <Image src={`/icons/board-purple.svg`} alt="board-icon" fill />
        </div>
        <div className={`text-kanban-purple heading-m`}>
          <p>+ Create New Board</p>
        </div>
      </div>
    );
  }
  return (
    <div
      className={`flex h-12 flex-row gap-4 rounded-r-full ${props.active ? "bg-kanban-purple" : ""} items-center pl-8`}
    >
      <div className="relative aspect-square w-4">
        {props.active ? (
          <Image src={`/icons/board-white.svg`} alt="board-icon" fill />
        ) : (
          <Image src={`/icons/board.svg`} alt="board-icon" fill />
        )}
      </div>
      <div
        className={`heading-m ${props.active ? "text-kanban-white" : "text-kanban-mediumGray"}`}
      >
        <p>{props.label}</p>
      </div>
    </div>
  );
}

export default BoardItem;
