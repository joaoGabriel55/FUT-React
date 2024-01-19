import { useState } from "react";
import PlayerCard from "./PlayerCard";
import PlayerCardSlot from "./PlayerCardSlot";
import { Transition } from "@headlessui/react";

const transition = {
  enter: "transition-all ease-in-out duration-500 delay-[200ms]",
  enterFrom: "opacity-0 -translate-x-6",
  enterTo: "opacity-100 translate-x-0",
  leave: "transition-all ease-in-out duration-300",
  leaveFrom: "opacity-100",
  leaveTo: "opacity-0",
};

export default function ReservePlayersMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Transition
        className="cursor-pointer absolute left-0 h-full flex flex-col justify-center bg-zinc-900"
        show={!open}
        onClick={() => setOpen(true)}
        {...transition}
      >
        <button className="p-4 font-bold -rotate-90">{"Reserves"}</button>
      </Transition>
      <Transition
        className="absolute flex flex-col h-full justify-start left-0 bg-zinc-900"
        show={open}
        {...transition}
      >
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
      </Transition>
    </>
  );
}
