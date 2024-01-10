let 이름1_7 :string; // 이거보다 더 엄격한 타입 지정 가능
// 이런 문자만 들어올 수 있다~ 라고 지정 가능 = Literal types

let 이름1_7_1:123; // 123만 들어올 수 있음
이름1_7_1 = 123;
// 이름1_7_1 = 456; // 에러

let 저에요 :'솔로'|'백수';
저에요 = '솔로';
저에요 = '백수';
// 변수에 뭐가 들어올지 더 엄격하게 관리가능, 자동완성 힌트

function 함수1_7(a :'hello') :1 | 0{ // 1이나 0만 return 가능
    return 1
}

함수1_7('hello');

function 가위바위보(a :'가위'|'바위'|'보') :('가위' | '바위' | '보')[]{
    return ['바위']
}



// const는 한계가 있음, object 자료는 수정 가능함
// Literal type은 const 변수와 유사하게 사용가능, const 업글 버전

var 자료1_7 = {
    name : 'kim',
}
console.log(자료1_7.name) // 'kim' 출력

function 내함수(a :'kim'){ // 'kim'이라는 자료만 들어올 수 있습니다 X -> 'kim'이라는 타입만 들어올 수 있습니다 O
}
내함수('kim');
// 함수(자료1_7.name); // 에러 -> 'kim'이라는 타입만 들어올 수 있습니다.

// Literal type의 이 문제점을 해결하기 위해서
// 1. object만들 때 타입지정 확실히 하기
// 2. as 문법으로 타입 강제 지정하기

// 3. as const 문법으로 타입 강제 지정하기
var 자료1_7_1 = {
    name : 'kim',
} as const; // 1. 이 object는 literal type 지정 알아서 해줌 -> name은 'kim'만 들어올 수 있음 => 타입을 object의 value로 지정해줌
// 2. object 속성들에 모두 readonly 속성이 부여됨

내함수(자료1_7_1.name);
// 자료1_7_1.name = 'lee'; // 에러 -> readonly 속성이 부여됨

// object 완전히 변경할 수 없고, 타입 지정도 확실하게 하고 싶으면 as const

