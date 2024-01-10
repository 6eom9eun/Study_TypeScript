let 이름 :string = 'kim'; // 이 변수엔 string type만 들어갈 수 있습니다.
// 이름 = 123; // error TS2322: Type '123' is not assignable to type 'string'.

let 어레이 :string[] = ['kim', 'park']; // 이 변수엔 string[] type만 들어갈 수 있습니다.
let 오브젝트 :{ name : string } = {name : 'kim'}; // 이 변수엔 { name : string } type만 들어갈 수 있습니다.
let 오브젝트2 :{ name? : string } = { }; // 불확실할 때는 ?를 붙여서 optional로 만들 수 있습니다.

let 유니온 : string | number = 123; // 다양한 타입 들어올 수 있게 하려면 Union Type을 사용합니다.
let 유니온2 : string[] | number = ['kim', 'park'];

type Name = string | number; // 타입은 변수에 담아 쓸 수 있다, Type Alias, 보통 대문자로
let 이름2 :Name = 'Kim'

function 함수(x :number){ // 함수의 파라미터에 타입을 지정할 수 있습니다.
    return x * 2
}

function 함수2(x :number) :number{ // 이 함수는 파라미터로 number를 받고, number만 리턴합니다.
    return x * 2
}

type Member = [number, boolean]; // 첫 째는 number, 둘 째는 boolean인 tuple type
let john :Member = [123, true]; // array에 쓸 수 있는 tuple type

type Member2 = { // object type에 지정해야할 속성이 너무 많으면
    [key :string] : string,
}
let john2 : Member2 = {name : 'kim', age: '123', sex: 'male'}; // 글자로된 모든 object 타입은 

class User { // class 타입 지정
    name :string;
    constructor(name :string){
        this.name = name;
    }
}