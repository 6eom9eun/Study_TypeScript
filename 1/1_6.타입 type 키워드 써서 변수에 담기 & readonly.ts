let 동물 :string | number | undefined; // 타입이 너무 길다..
type Animal = string | number | undefined; // type alias 만들기, 타입 변수
let 동물1 :Animal;

let 동물2 :{ name : string, age : number} = { name : 'cat', age : 2}; // object 타입도 가능
type Aninal1 = { name : string, age : number};
let 동물3 :Animal;

// tpye 변수 작명 관습 : 대문자로 시작, 뒤에 Tpye 붙이기(AnimalType)



const 출생지역 = 'seoul';
// 출생지역 = 'busan'; // const 변수는 재할당 불가능, const는 재할당만 막는 역할

const 출생지역1 = { region : 'seoul' };
출생지역1.region = 'busan'; // const로 담은 object 수정은 자유롭게 가능함 => TS에서 object는 const 자료 수정도 막을 수 있음.



type Cat = {
    name : string
}
type Cat1 = {
    readonly name : string // readonly를 붙이면 object 자료 수정도 막을 수 있음.
}

const 고양이 :Cat = {
    name : '토리'
}
const 고양이1 :Cat1 = {
    name : '토리'
}

고양이.name = '나비';
// 고양이1.name = '나비'; // 에러

// TS에러는 에디터&터미널에서만 존재함, 실제 변환된 JS파일에는 에러가 없음. => TS는 JS를 변환하는 역할만 함.

type Cat2 = {
    name? : string // object 안에도 optional ? 이 가능함.
}



type Name1_6 = string;
type Age1_6 = number;
type Person1_6 = Name1_6 | Age1_6; // type alias는 합쳐서 union type도 가능함.

type PositionX = { x : number};
type PositionY = { y : number};
type Position = PositionX & PositionY; // objec type alias는 합쳐서 intersection type도 가능함. { x : number, y : number}
// & 연산자로 object 타입 extend 가능함.

let position :Position = { x : 10, y : 20} // 에러 없음.

// 같은 이름의 tpye 변수 재정의 불가능
// type Name1_6 = string; // 에러

type Age1_6_1 = number;

// extend할 때 중복된 속성은 하나로



/* 1번 문제
다음 조건을 만족하는 타입을 만들어봅시다. 
1. 이 타입은 object 자료형이어야합니다.
2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 
3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  
type alias로 만들기 */
type MyType = {
    color? : string,
    size : number,
    readonly position : number[]
}
let 테스트용변수 :MyType = {
    size : 123,
    position : [1,2,3]
}

/* 2번 문제
다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 
1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. 
*/
type User1_6 = { name : string, email : string, phone : number } 
let 회원가입정보 :User1_6 = {
    name : 'kim',
    email : 'test@test.com',
    phone : 123,
}

/* 3번 문제
다음을 만족하는 type alias를 만들어보십시오.
1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 
3. 멋있게 숙제3에서 만들어둔 type alias를 재활용해봅시다.
*/
type Adult = { adult : boolean }

type NewUser = User1_6 & Adult;

let 회원가입정보1_6 :NewUser = {
  name : 'kim',
  phone : 1234,
  email : 'test@test.com',
    adult : false,
}
