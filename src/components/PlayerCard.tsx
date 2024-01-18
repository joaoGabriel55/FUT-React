import futCardTemplate from "../assets/fut-card-template.png";

const PLAYER_IMAGE_CDN =
  "https://cdn.futbin.com/content/fifa24/img/players/241637.png?v=23";

export default function PlayerCard() {
  function onDrop(event: unknown) {
    console.log(event);
  }

  function onDragOver(event: unknown) {
    console.log(event);
  }

  function onDragStart(event: React.DragEvent<HTMLDivElement>) {
    event.dataTransfer.setData("player", "player");
  }

  return (
    <div
      id="player"
      className="relative transition-transform hover:scale-125 cursor-pointer"
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragStart={onDragStart}
    >
      <img className="w-24" src={futCardTemplate} alt="player" />
      <img
        className="w-16 top-4 left-4 absolute"
        src={PLAYER_IMAGE_CDN}
        alt="player"
      />
      <h1 className="absolute text-amber-950 text-2xl font-bold bottom-8 left-2">
        88 CM
      </h1>
    </div>
  );
}
