declare function 함수2_7(x: unknown[]): unknown;
declare let a: unknown;
declare function 함수2_7_1<MyType>(x: MyType[]): MyType;
declare let a2_7: number;
declare let a2_7_1: string;
declare function 함수2_7_2<MyType extends number>(x: MyType): number;
declare let a2_7_2: number;
interface LengthCheck {
    length: number;
}
declare function 함수2_7_3<MyType extends LengthCheck>(x: MyType): number;
declare let a2_7_3: number;
