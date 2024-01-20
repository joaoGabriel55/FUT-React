import { Player } from "./Player";

export namespace Team {
  export type Formations = "4-4-2" | "4-3-3" | "3-5-2";

  export type Type = {
    id: number;
    name: string;
    overall: number;
    formation: Formations;
    players: Array<Player.Type>;
  };

  export const create = (props: Type): Type => {
    return {
      id: props.id,
      name: props.name,
      overall: props.overall,
      formation: props.formation,
      players: props.players,
    };
  };

  export const calcTeamOverall = (team: Type): number => {
    return (
      team.players.reduce((acc, player) => acc + player.overall, 0) /
      team.players.length
    );
  };
}
