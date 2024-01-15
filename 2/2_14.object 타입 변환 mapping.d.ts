declare let obj2_14: {
    name: string;
    age: number;
};
interface Person2_14 {
    age: number;
    name: string;
}
type PersonKeys = keyof Person2_14;
declare let a2_14: PersonKeys;
interface Person2_14_1 {
    [key: string]: number;
}
type PersonKeys2_14 = keyof Person2_14_1;
type Car2_14 = {
    color: boolean;
    model: boolean;
    price: boolean | number;
};
type TypeChanger<MyType> = {
    [key in keyof MyType]: string;
};
type 변경된타입 = TypeChanger<Car2_14>;
type Bus = {
    color: string;
    model: boolean;
    price: number;
};
type TypeChanger2_14<MyType> = {
    [key in keyof MyType]: string | number;
};
type NewBus = TypeChanger2_14<Bus>;
type TypeChanger2_14_1<MyType, T> = {
    [key in keyof MyType]: T;
};
type NewBus2_14 = TypeChanger2_14_1<Bus, boolean>;
