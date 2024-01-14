declare function 함수2_2(a: string | undefined): void;
type Fish = {
    swim: string;
};
type Bird = {
    fly: string;
};
declare function 함수2_2_1(animal: Fish | Bird): void;
type Car2_2 = {
    wheel: '4개';
    color: string;
};
type Bike2_2 = {
    wheel: '2개';
    color: string;
};
declare function 함수2_2_2(x: Car2_2 | Bike2_2): void;
