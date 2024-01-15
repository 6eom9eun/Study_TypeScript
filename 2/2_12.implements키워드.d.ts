declare class Car2_12 {
    model: string;
    price: number;
    constructor(a: string);
}
declare let 자동차: Car2_12;
interface CarType {
    model: string;
    price: number;
}
declare class Car2_12_1 implements CarType {
    model: string;
    price: number;
    constructor(a: string);
}
declare let 자동차2_12: Car2_12_1;
interface CarType2_12 {
    model: string;
    tax: (price: number) => number;
}
declare class Car2_12_2 implements CarType2_12 {
    model: any;
    tax(a: any): number;
}
