// 타입 한꺼번에 바꾸기 가능

let obj2_14 = { name : 'kim', age : 20 }
Object.keys(obj2_14); // ['name', 'age'] 출력


// key값을 전부 가져오는 keyof
// keyof는 object 타입에 사용하면 object 타입이 가지고 있는 모든 key값을 union type으로 합쳐서 내보냄
interface Person2_14{
    age :number,
    name :string,
}
type PersonKeys = keyof Person2_14; // 'age' | 'name'
let a2_14 :PersonKeys = 'name';

// index signature에다가 keyof 사용하면?
interface Person2_14_1{
    [key :string] :number
}
type PersonKeys2_14 = keyof Person2_14_1; // string | number



type Car2_14 = {
    color : boolean,
    model : boolean,
    price : boolean | number,
}
// 타입 만들었는데.. 전부 string으로 바꾸려면 ?
type TypeChanger<MyType> = {
    [key in keyof MyType] : string
}
// 파라미터에 Car2_14 넣으면
type 변경된타입 = TypeChanger<Car2_14> // { color : string, model : string, price : string }


//////////////////////////////
type Bus = {
    color : string,
    model : boolean,
    price : number
}
/*
color, model, price 속성은 전부 string 또는 number 타입이어야합니다.
*/
type TypeChanger2_14<MyType> = {
    [key in keyof MyType] : string | number
}
type NewBus = TypeChanger2_14<Bus>



/*
object안에 들어있는 모든 속성을
string, number 이렇게 고정된 타입으로 변환해주는게 아니라
내가 원하는 타입을 입력하면 그걸로 변환해주는 범용성 좋은 변환기를 만들어보십시오.
*/
type TypeChanger2_14_1 <MyType, T> = {
    [key in keyof MyType]: T;
};
type NewBus2_14 = TypeChanger2_14_1<Bus, boolean>;