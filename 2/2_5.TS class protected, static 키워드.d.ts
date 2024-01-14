declare class User2_5 {
    x: number;
}
declare class NewUser2_5 extends User2_5 {
}
declare let 사람: NewUser2_5;
declare class User2_5_1 {
    protected x: number;
}
declare class NewUser2_5_1 extends User2_5_1 {
    doThis(): void;
}
declare class User2_5_2 {
    static x: number;
    y: number;
}
declare let 자식2_5: User2_5_2;
declare class User2_5_3 {
    private static x;
    y: number;
}
declare class User2_5_4 {
    static skill: string;
    intro: string;
}
declare let 범근: User2_5_4;
declare let 범근2: User2_5_4;
declare class User2_5_5 {
    private static x;
    static y: number;
    static addOne(파라미터: number): void;
    static printX(): void;
}
declare class Square {
    width: number;
    height: number;
    color: string;
    constructor(width: number, height: number, color: string);
    draw(): void;
}
