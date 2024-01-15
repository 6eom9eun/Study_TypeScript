interface StringOnly {
    [key: string]: string;
}
interface StringOnly2 {
    age: number;
    [key: string]: string | number;
}
declare let user: StringOnly;
interface StringOnly3 {
    [key: string]: string;
}
declare let user2: StringOnly3;
interface MyType2_13 {
    'font-size': {
        'font_size': {
            'font-size': number;
        };
    };
}
interface MyType2_13_1 {
    'font-size': MyType2_13_1 | number;
}
declare let css: MyType2_13_1;
type Car2_13 = {
    [key: string]: number | string;
};
declare let obj: Car2_13;
interface MyType2_13_2 {
    'font-size': number;
    [key: string]: number | MyType;
}
