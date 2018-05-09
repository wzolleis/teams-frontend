export type State = {
    players: Player[]
};

export type Player = {
    id?: number,
    name: string,
    overall: number,
    typ: string,
    skills: {
        speed: number,
        technik: number,
        endurance: number
    }
};