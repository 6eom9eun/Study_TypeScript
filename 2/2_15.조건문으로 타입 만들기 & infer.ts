// 삼항연산자
3 > 1 ? console.log('O') : console.log('X')
// 조건식 ? 참일 때 실행 코드 : 거짓일 때 실행 코드



// TS에서 조건식이 참이면 A 타입, 참이 아니면 B 타입 활용 가능
// 1. type if문은 삼항연산자로, 2. 조건식은 extends 키워드로
// 파라미터로 string을 집어넣으면 string을 남겨주시고, 그게 아니면 unknown
type Age2_15<T> = T extends string ? string : unknown; 
let a2_15 :Age2_15<string> // string
let a2_15_1 :Age2_15<number> // 


// 파라미터로 array 타입을 입력하면 array 첫 자료의 타입을 남김
// array 타입말고 다른 거 입력하면 any
type FirstItem<T> = T extends any[] ? T[0] : any 
let age1 :FirstItem<string[]>; // string
let age2 :FirstItem<number>; // any

// 조건문에서 쓸 수 있는 infer 키워드
type Person2_15<T> = T extends infer R ? R : unknown; // infer은 타입을 왼쪽에서 추출해줌 => T의 타입
type a2_15 = Person2_15<string> // T와 R은 string이 됨



// 활용 ?
// array 내부의 타입만 뽑기
type 타입추출<T> = T extends (infer R)[] ? R : unknown;
type a2_15_1 = 타입추출<string[]> // string

// 함수 넣으면 함수의 return 타입만 뽑기
type 타입추출2<T> = T extends ( () => infer R) ? R : unknown; // R은 void가 됨
type a2_15_2 = 타입추출2< () => void >

type b2_15 = ReturnType< () => void > // 그냥 이렇게 기본 함수 사용해도 됨.


/*
1. array 타입을 <> 안에 입력하면
2. array 타입의 0번째 타입이 string이면 string 타입을 그대로 남겨주고 
3. array 타입의 0번째 타입이 string이 아니면 unknown 을 남겨주려면 어떻게 타입을 만들어놔야할까요?

let age1 :Age<[string, number]>;
let age2 :Age<[boolean, number]>; 
age1 타입은 string, age2 타입은 unknown
*/
type Age2_15_1<T> = T extends [string, ...any] ? T[0] : unknown;

/*
타입뽑기<(x :number) => void> //이러면 number가 이 자리에 남음
타입뽑기<(x :string) => void> //이러면 string이 이 자리에 남음
*/
type 타입뽑기<T> = T extends (x: infer R) => any ? R : any;
type a = 타입뽑기<(x :number) => void> // number