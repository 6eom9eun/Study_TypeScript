// ~.d.ts 파일
// 타입 정의 보관용 파일, 다른 ts파일에서 import 가능
var 이름2_11 = '곽';
// d.ts 파일 용도
// 타입 정의 따로 보관할 파일이 필요하면,
// 타입 레퍼런스 생성하고 싶으면,
// tsconfig에서 "declaration": true하면 // ts파일마다 d.ts파일 자동 생성
// d.ts 파일은 자동으로 글로벌 모듈이 아님
// 그냥 ts 파일은 기본이 글로벌 !, d.ts는 로컬 모듈이라고 생각하면됨
// d.ts 파일 글로벌 모듈로 만드는 방법 : tsconfig에서 "typeRoots": ["./types"] 추가
var 나이2_11 = 30;
// $() -> 외부 라이브러러 쓸 때 타입정의 안 되어있으면?
// https://github.com/DefinitelyTyped/DefinitelyTyped
// 유명한 라이브러리 타입을 지정해서 올려놓은 리포지토리임
// https://www.typescriptlang.org/dt/search?search=
// 위 사이트에서 타입 정의 파일 찾아서 설치하면 됨
// npm 설치시엔 대부분 타입도 들어옴 => npm i @types/jquery
$().append();
