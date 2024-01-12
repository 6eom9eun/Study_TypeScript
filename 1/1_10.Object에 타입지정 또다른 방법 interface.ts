type 타입명 = string; // tpye 키워드로 타입변수 생성가능
// interface 키워드도 타입변수 생성가능 !

type Square1 = { color :string, width :number } 

interface Square2 { 
    color :string,
    width :number 
} 

let 네모 = { color : 'red', width : 100 }; // 타입 지정 자동으로 되긴 함

/*
interface Student { 
    name :string
} 
interface Teacher { 
    name :string,
    age :number,
} 
*/

interface Student { 
    name :string
} 
interface Teacher extends Student{ 
    age :number,
} 
// interface 장점 : extends로 복사 가능, 클래스와 유사하게 사용 가능

// let 학생 :Student = { name : 'kim' }
// let 선생 :Teacher = { name : 'kim', age : 20}

type Animal1_10 = { name :string }
type Cat1_10 = { age :number } & Animal1_10 // & 연산자로 interface처럼 extends 유사하게 가능 두 타입을 전부 만족하는 타입

// tpye VS interface
// interface는 중복선언 가능(합쳐짐), tpye은 중복선언 불가능
interface Student {  // 중복 선언 가능 !, Student타입엔 이제 { name :string, score :number } 존재하게 됨
    score :number
} 

// interface는 유연하다, type은 엄격하다 !

// 외부 라이브러리같은 경우 interface를 많이 씀 => 추후에 타입에 뭐 더하는 거 쉬움
// 다른 사람이 이용 많이할 것 같으면, object 타입 정할 때, interface 쓰는 것이 좋음

// extends 쓸 때 중복속성 발생하면? => 에러로 잡아줌
// type은 중복속성 허용, interface는 중복속성 에러로 잡아줌

type Animal1_10_1 = { name :string }
type Cat1_10_1 = { name :number } & Animal1_10 
// let 야옹이 :Cat1_10_1 = { name : 'kim' } // type은 미리 에러는 안나오는데, 사용할 때 에러가 발생함, &은 합치는게 아니라 왼쪽 오른쪽 둘 다 만족하는 타입임.




/*
interface 이용해서 간단하게 타입을 만들어봅시다
let 상품 = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }
이런 변수가 있는데 interface 키워드로 타입지정 
*/
interface Product {
    brand :string,
    serialNumber :number,
    model :string[],
}

/*
array 안에 object 여러개가 필요합니다.
let 장바구니 = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 
이렇게 생긴 object들이 잔뜩 들어갈 수 있는 array는 어떻게 타입을 지정?
*/
interface Cart {
    product : string,
    price : number
}

/*
에서 만든 타입을 extends
{ product : '청소기', price : 7000, card : false }
위에서 만든 interface를 extends 해서 이 object의 타입을 만들기
*/
interface Cart {
    product : string,
    price : number
}
interface NewCart extends Cart{
    card : boolean
}

/*
object 안에 함수를 2개 넣고 싶음.
1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다. 
2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다. 
이 object 자료를 어떻게 만들까요?
interface를 이용해서 object에 타입지정도 해보십시오. 
*/
interface MathObj {
    plus : (a:number, b:number) => number,
    minus : (a:number, b:number) => number
}
let 오브젝트1_10 :MathObj = {
    plus(a,b){
        return a + b
    },
    minus(a,b){
        return a - b
    }
} 