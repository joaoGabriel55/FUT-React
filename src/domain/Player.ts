export namespace Player {
  export type Positions =
    | "GK"
    | "CB"
    | "LB"
    | "RB"
    | "CM"
    | "LM"
    | "RM"
    | "CDM"
    | "CAM"
    | "LW"
    | "RW"
    | "CF"
    | "ST";

  export type Type = {
    id: number;
    name: string;
    knownAs: string;
    overall: number;
    position: Positions;
    firstTeam: boolean;
    photoUrl: string;
  };

  export const create = (props: Type): Type => {
    return {
      id: props.id,
      name: props.name,
      knownAs: props.knownAs,
      overall: props.overall,
      position: props.position,
      firstTeam: props.firstTeam,
      photoUrl: props.photoUrl,
    };
  };
}
