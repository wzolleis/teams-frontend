export type State = {
    players: Player[],
    selectedPlayer: Player,
};

export type Player = {
    id?: number,
    name: string,
    overall: number,
    typ: string,
    skills: {
        speed: number,
        technik: number,
        condition: number
    }
};
