// 변수 재정의가 가능한 declare 문법
declare let a2_10 :number; // 어딘가에 분명 변수 a 있으니까 에러내지 마 ! 타입 지정도 가능
// 일반 js 파일 등에 있던 변수쓸 때, 에러나지 않도록 재정의 하는 것.
// declare로 정의한 내용은 js로 변환되지 않음.
console.log(a2_10+1)

// 특히 .js로 만든 라이브러리 사용할 때, ts에서 에러남
// $().append() 다음 강의

// ts 파일 -> ts 파일 변수 가져다 쓰고 싶으면?
// import {a2_10_1} from './2_10.data_ts' // export import
// 더 쉽게 가능함, 모든 ts 파일은 ambient module (글로벌 모듈)
console.log(a2_10_1+1) // 전역변수처럼 사용 가능

// ts 파일을 ambient 모듈이 아니라, 로컬 모듈로 만드는 방법 -> 2_10.data_ts.ts 파일 참고