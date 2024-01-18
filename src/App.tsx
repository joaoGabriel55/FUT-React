import PlayerCard from "./components/PlayerCard";
import PlayerCardSlot from "./components/PlayerCardSlot";
import fieldBackground from "./assets/field.png";
import ReservePlayersMenu from "./components/ReservePlayersMenu";

function App() {
  const formation = [4, 4, 2];
  const [defense, midfield, attack] = formation;

  return (
    <div className="flex relative items-center justify-center bg-gradient-to-b from-slate-900 to-black h-svh">
      <img
        className="absolute bottom-12"
        src={fieldBackground}
        alt="Football Field"
      />
      <div className="flex flex-col items-center justify-center">
        <div className="mt-16 flex gap-48">
          {Array.from({ length: attack }, (_, i) => (
            <PlayerCardSlot key={i} />
          ))}
        </div>
        <div className="mt-8 flex gap-48">
          {Array.from({ length: midfield }, (_, i) => (
            <PlayerCard key={i} />
          ))}
        </div>
        <div className="mt-20 flex gap-48">
          {Array.from({ length: defense }, (_, i) => (
            <PlayerCard key={i} />
          ))}
        </div>
        <div className="mt-18 gap-48">
          <PlayerCard />
        </div>
      </div>
      <ReservePlayersMenu />
    </div>
  );
}

export default App;
