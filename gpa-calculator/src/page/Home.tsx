import React, { useState } from "react";
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import NavBar from "../components/Navbar";

interface Board {
  id: string;
  content: string;
}

const initialBoards: Board[] = [
  { id: "board-1", content: "Board 1" },
  { id: "board-2", content: "Board 2" },
  { id: "board-3", content: "Board 3" },
];

interface SortableItemProps {
  id: string;
  content: string;
}

const SortableItem: React.FC<SortableItemProps> = ({ id, content }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white p-4 shadow rounded-lg"
    >
      {content}
    </div>
  );
};

const Home: React.FC = () => {
  const [boards, setBoards] = useState<Board[]>(initialBoards);

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setBoards((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-gray-900 text-white p-4">
          <h2 className="text-xl font-bold mb-4">Workspaces</h2>
          <ul>
            <li className="p-2 hover:bg-gray-700 rounded">Workspace 1</li>
            <li className="p-2 hover:bg-gray-700 rounded">Workspace 2</li>
            <li className="p-2 hover:bg-gray-700 rounded">Workspace 3</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-100">
          <h1 className="text-2xl font-bold mb-4">Your Boards</h1>
          <SortableContext items={boards.map((board) => board.id)} strategy={verticalListSortingStrategy}>
            <div className="grid grid-cols-3 gap-4">
              {boards.map((board) => (
                <SortableItem key={board.id} id={board.id} content={board.content} />
              ))}
            </div>
          </SortableContext>
        </div>
      </div>
    </DndContext>
  );
};

export default Home;
