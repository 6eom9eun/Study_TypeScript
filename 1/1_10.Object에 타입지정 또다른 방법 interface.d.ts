type 타입명 = string;
type Square1 = {
    color: string;
    width: number;
};
interface Square2 {
    color: string;
    width: number;
}
declare let 네모: {
    color: string;
    width: number;
};
interface Student {
    name: string;
}
interface Teacher extends Student {
    age: number;
}
type Animal1_10 = {
    name: string;
};
type Cat1_10 = {
    age: number;
} & Animal1_10;
interface Student {
    score: number;
}
type Animal1_10_1 = {
    name: string;
};
type Cat1_10_1 = {
    name: number;
} & Animal1_10;
interface Product {
    brand: string;
    serialNumber: number;
    model: string[];
}
interface Cart {
    product: string;
    price: number;
}
interface Cart {
    product: string;
    price: number;
}
interface NewCart extends Cart {
    card: boolean;
}
interface MathObj {
    plus: (a: number, b: number) => number;
    minus: (a: number, b: number) => number;
}
declare let 오브젝트1_10: MathObj;
