declare let 이름: string;
declare let 어레이: string[];
declare let 오브젝트: {
    name: string;
};
declare let 오브젝트2: {
    name?: string;
};
declare let 유니온: string | number;
declare let 유니온2: string[] | number;
type Name = string | number;
declare let 이름2: Name;
declare function 함수(x: number): number;
declare function 함수2(x: number): number;
type Member = [number, boolean];
declare let john: Member;
type Member2 = {
    [key: string]: string;
};
declare let john2: Member2;
declare class User {
    name: string;
    constructor(name: string);
}
