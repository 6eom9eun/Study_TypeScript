// TS는 변수에 실드 씌우는 느낌
var 이름1_2 = 'kim';
// 이름 1_2 = 123; // error TS2322: Type '123' is not assignable to type 'string'.
var 나이 = 20;
// 나이 = '스무살'; // error TS2322: Type '"스무살"' is not assignable to type 'number'.
var 결혼했니 = false;
// let 결혼했니2 :null = undefined;
// let 결혼했니3 :undefined = null;
var 회원들 = ['kim', 'park', 'lee']; // array type은 [], 근데 타입을 지정해줘야함
var 회원들2 = { member1: 'kim', member2: 'kwak' }; // 오브젝트 타입은 {}로 지정
// 타입지정 원래 자동으로 됨
var 회원들3 = 'kim';
// 타입지정 문법 생략 가능, 변수 마우스 갖다대면 타입 알려줌
var 좋아하는거 = { song: '29', singer: '너드커넥션' };
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
