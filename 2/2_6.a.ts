export var 이름2_6 = 'kim';
export var 나이2_6 = 20;

export type Name2_6 = string;

// TS 타입변수 숨기기 문법 namespace
namespace 네임스페이스{ // 예전엔 module이라고 했음
    export type Name2_6_1 = string | number;
}
// object 안에 숨긴 것임

// Name2_6_1는 없다고 나옴, 오브젝트에 숨겨서
let 변수2_6_1 :네임스페이스.Name2_6_1 = 'kim';

export type 이름2_6_1 =string
export interface 인터페이스{} // 이런 것들도 export 가능



// 정답
export type Car = {
    wheel : number,
    model : string
}
export interface Bike {
    wheel : 2,
    model : string
}


//
export type ObjFunction = (a? :object) => void


//
namespace GoodDog {
    export type Dog = string;
}
namespace BadDog {
    export interface Dog { name : string };
}

let dog1 :GoodDog.Dog = 'bark';
let dog2 :BadDog.Dog = { name : 'paw' }