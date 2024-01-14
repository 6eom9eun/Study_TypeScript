// 함수에 타입도 파라미터로 입력가능
function 함수2_7(x) {
    return x[0];
}
var a = 함수2_7([4, 2]); // unknown으로 지정해서 a 타입은 unknown 가득찬 배열
// 숫자로 나오면 숫자로 타입변환? XXX
console.log(a);
// console.log(a+1)) // unknown 타입이라서 +1 안된다 !
// 해결책 : 1. narrowing 하거나 as 키워드 사용 => 귀찮음
// 해결책 : 2. generic 함수 만들기 (파라미터로 타입을 입력하는 함수)
function 함수2_7_1(x) {
    return x[0];
}
var a2_7 = 함수2_7_1([4, 2]);
console.log(a2_7 + 1); // 해결, narrowing 필요 X
// Generic 함수 장점 : 확장성이 조금 있음
var a2_7_1 = 함수2_7_1(['4', '2']); // 매번 다른 타입 출력 가능
function 함수2_7_2(x) {
    return x - 1; // x가 불확실해서 에러가 발생함, MyType이 무엇인지 모르기 때문에, 그래서 extends number를 붙여t서 타입파라미터를 둬야함.
}
var a2_7_2 = 함수2_7_2(100);
function 함수2_7_3(x) {
    return x.length;
}
var a2_7_3 = 함수2_7_3(['100']);
// 1. 함수에 타입 파라미터 넣을 수 있음
// 2. extends 키워드로 넣을 수 있는 타입 제한 가능함
// 3. class에도 타입 파라미터 넣을 수 있음
