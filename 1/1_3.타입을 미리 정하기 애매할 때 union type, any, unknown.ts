let 회원 :number | string = 123; // union type (타입 2개 이상 합친 새로운 타입)
회원 = 'kim'; // 가변적인 타입

// 숫자 or 문자가 가능한 array / object 타입 지정
let 회원분들 :(number | string)[] = [1, 2, '3'];
let 오브쩩트 :{ a : number | string } = {a : '123'}

// any type 모든 자료형 허용, TS 쓰는 의미가 없어짐
let 이름1_3 : any;
이름1_3 = 123;
이름1_3 = [];
이름1_3 = true;

let 이름1_3_1 :unknown; // unknown type 모든 자료형 허용 => any보다 안전함
이름1_3_1 = 123;
이름1_3_1 = {};
// let 변수 :string = 이름1_3_1; // unknown type은 any와 다르게 다른 타입에 할당할 수 없다.

// 이름1_3_1 - 1; // TS는 간단한 수학연산도 타입 맞아야함.

let 나이1_3 :string|number;
// 나이1_3 + 1; 
/*
string 타입 + 1 (허용)
number 타입 + 1 (허용)
string | number x 1 (XXX)
*/

let 나이1_3_1 :unknown = 1;
// 나이1_3_1 + 1; // unknown type 또한 간단한 수학연산도 허용하지 않는다. 숫자 타입이 아님 !

/*
let user = 'kim';
let age = undefined;
let married = false; 
let 철수 = [user, age, married];

[정답]
let user : string = 'kim';
let age : undefined | number = undefined;
let married : boolean = false; 
let 철수 : (string|number|undefined|boolean)[]= [user, age, married]; 



let 학교 = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]

[정답]
let 학교 : {
    score : (number|boolean)[],
    teacher : string,
    friend : string | string[]
}

= {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher]
*/