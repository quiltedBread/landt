export interface Bullet {
    selected: boolean;
    text: string;
    tags: string[]
}

export interface Position {
    title: string;
    company: string;
    start_date: string;
    end_date: string;
    selected: boolean;
    bullets: Bullet[];
}

export interface State {
    positions: Position[];
}