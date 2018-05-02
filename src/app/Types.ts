export type State = {
    teams: Team[],
    cleaners: Cleaner[]
};

export type Team = {
    id: number;
    name: string;
};

export type Cleaner = {
    id?: number;
    name: string;
    team?: Team;
};

export type Player = {
    id?: number,
    name: string,
    overall: number,
    skills: {
        speed: number,
        technik: number,
        kondition: number
    }
};