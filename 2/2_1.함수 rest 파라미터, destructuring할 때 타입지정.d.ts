declare function 함수1(...a: any[]): void;
declare function 함수2_1(...a: number[]): void;
declare let arr: number[];
declare let arr2: number[];
declare let arr3: number[];
declare let arr4: (string | number)[];
declare let 변수1: string, 변수2: number;
declare let student: boolean, age: number;
declare let 오브젝트2_1: {
    student: boolean;
    age: number;
};
declare function 함수2_1_1(a: any, b: any): void;
declare function 함수2_1_2({ student, age }: {
    student: boolean;
    age: number;
}): void;
declare function 최댓값(...x: number[]): number;
type UserType = {
    user: string;
    comment: number[];
    admin: boolean;
};
declare function 함수2_1_3({ user, comment, admin }: UserType): void;
type 어레이 = (number | string | boolean)[];
declare function 함수2_1_4([a, b, c]: 어레이): void;
