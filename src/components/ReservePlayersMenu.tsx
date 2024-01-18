import { useState } from "react";
import PlayerCard from "./PlayerCard";
import PlayerCardSlot from "./PlayerCardSlot";

export default function ReservePlayersMenu() {
  const [open, setOpen] = useState(false);

  if (!open)
    return (
      <div
        className="cursor-pointer absolute left-0 h-full flex flex-col justify-center bg-zinc-900"
        onClick={() => setOpen(true)}
      >
        <button
          className="p-4 font-bold -rotate-90"
          onClick={() => setOpen(false)}
        >
          {"Reserves"}
        </button>
      </div>
    );

  return (
    <div className="absolute flex flex-col h-full justify-start left-0 bg-zinc-900">
      <div className="flex gap-4 p-4">
        <PlayerCard />
        <PlayerCard />
      </div>
      <div className="flex gap-4 p-4">
        <PlayerCardSlot />
        <PlayerCardSlot />
      </div>
      <button
        className="mt-auto m-4 p-4 font-bold"
        onClick={() => setOpen(false)}
      >
        {"<< Close"}
      </button>
    </div>
  );
}
