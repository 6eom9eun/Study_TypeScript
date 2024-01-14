declare let 동물: string | number | undefined;
type Animal = string | number | undefined;
declare let 동물1: Animal;
declare let 동물2: {
    name: string;
    age: number;
};
type Aninal1 = {
    name: string;
    age: number;
};
declare let 동물3: Animal;
declare const 출생지역 = "seoul";
declare const 출생지역1: {
    region: string;
};
type Cat = {
    name: string;
};
type Cat1 = {
    readonly name: string;
};
declare const 고양이: Cat;
declare const 고양이1: Cat1;
type Cat2 = {
    name?: string;
};
type Name1_6 = string;
type Age1_6 = number;
type Person1_6 = Name1_6 | Age1_6;
type PositionX = {
    x: number;
};
type PositionY = {
    y: number;
};
type Position = PositionX & PositionY;
declare let position: Position;
type Age1_6_1 = number;
type MyType = {
    color?: string;
    size: number;
    readonly position: number[];
};
declare let 테스트용변수: MyType;
type User1_6 = {
    name: string;
    email: string;
    phone: number;
};
declare let 회원가입정보: User1_6;
type Adult = {
    adult: boolean;
};
type NewUser = User1_6 & Adult;
declare let 회원가입정보1_6: NewUser;
