declare class Person {
    data: number;
}
declare let 사람1: Person;
declare let 사람2: Person;
declare class Person1 {
    name: string;
    constructor(a: string);
}
declare let 사람3: Person1;
declare let 사람4: Person1;
declare class Person2 {
    name: string;
    constructor(a: string);
    함수(a: string): void;
}
declare let 사람5: Person2;
declare class Car {
    model: string;
    price: number;
    constructor(a: string, b: number);
    tax(): number;
}
declare class Word {
    num: any;
    str: any;
    constructor(...param: (number | string)[]);
}
