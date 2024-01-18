import { useState } from "react";
import futCardSlotTemplate from "../assets/fut-card-slot-template.png";
import PlayerCard from "./PlayerCard";

export default function PlayerCardSlot() {
  const [hasPlayer, setHasPlayer] = useState(false);

  function onDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();

    console.log("PlayerCardSlot", event.dataTransfer.getData("player"));

    setHasPlayer(true);
  }

  function onDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  if (hasPlayer) return <PlayerCard />;

  return (
    <div className="relative" onDragOver={onDragOver} onDrop={onDrop}>
      <img className="w-24" src={futCardSlotTemplate} alt="slot" />
      <h1 className="absolute text-zinc-400 text-2xl font-bold bottom-8 left-7">
        CF
      </h1>
    </div>
  );
}
