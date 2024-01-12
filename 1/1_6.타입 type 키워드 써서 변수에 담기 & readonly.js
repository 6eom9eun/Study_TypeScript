var 동물; // 타입이 너무 길다..
var 동물1;
var 동물2 = { name: 'cat', age: 2 }; // object 타입도 가능
var 동물3;
// tpye 변수 작명 관습 : 대문자로 시작, 뒤에 Tpye 붙이기(AnimalType)
var 출생지역 = 'seoul';
// 출생지역 = 'busan'; // const 변수는 재할당 불가능, const는 재할당만 막는 역할
var 출생지역1 = { region: 'seoul' };
출생지역1.region = 'busan'; // const로 담은 object 수정은 자유롭게 가능함 => TS에서 object는 const 자료 수정도 막을 수 있음.
var 고양이 = {
    name: '토리'
};
var 고양이1 = {
    name: '토리'
};
고양이.name = '나비';
// & 연산자로 object 타입 extend 가능함.
var position = { x: 10, y: 20 }; // 에러 없음.
var 테스트용변수 = {
    size: 123,
    position: [1, 2, 3]
};
var 회원가입정보 = {
    name: 'kim',
    email: 'test@test.com',
    phone: 123,
};
var 회원가입정보1_6 = {
    name: 'kim',
    phone: 1234,
    email: 'test@test.com',
    adult: false,
};
