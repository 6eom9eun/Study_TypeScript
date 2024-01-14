var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var 멍멍 = ['dog', true];
// 첫 자료는 무조건 string, 둘째 자료는 무조건 boolean (위치까지 고려한 타입지정 ?)
var 멍멍2 = ['dog', true]; // 이렇게 하면 위치 고려함.
// [tuple type] : 다른 모든 타입도 가능
// tuple 안에 옵션표시 가능
var 멍멍3 = ['dog']; // boolean 옵션, 근데 ? 옵션은 뒤에 있어야함, 순서 떄문에
// 함수에서 쓰는 튜플
function 함수2_9() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
function 함수2_9_1(a, b) {
    console.log([a, b]);
}
함수2_9(1, '2');
// array 합칠 때, ... spread 연산자 사용
// 타입 지정은 이렇게 함 : ...number[] 이런 식으로
var arr2_9 = [1, 2, 3];
var arr2_9_1 = __spreadArray([4, 5], arr2_9, true);
/*
최근에 사먹은 음식의 1. 이름 2. 가격 3. 맛있는지여부를 array 자료에 담아보고 타입지정까지 해보십시오.
배운 tuple 타입으로 타입지정합시다.
(예시) [ '동서녹차', 4000, true ] 이런 자료 만들고 타입지정
*/
var 최근사먹은음식 = ['휠렛버거', 7000, true];
/*
let arr = ['동서녹차', 4000, true, false, true, true, false, true]
true와 false가 셋째 자료부터 잔뜩 들어올 수 있다고 합니다.
tuple 타입과 spread 연산자를 써보도록 합시다.
*/
var arr2_9_2 = ['휠렛버거', 7000, true, false, true, true, false, true];
/*
function 함수(){
}
1. 이 함수의 첫째 파라미터는 문자,
2. 둘째 파라미터는 boolean,
3. 셋째 파라미터부터는 숫자 또는 문자가 들어와야합니다.
그럼 함수에 파라미터를 어떻게 만들고 타입지정은 또 어떻게 해야할까요?
오늘 배운 tuple 타입과 rest parameter를 사용 !
*/
function 함수() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
}
함수('a', true, 6, 3, '1', 4);
/*
다음과 같은 문자/숫자 분류기 함수를 만들기
파라미터 중 문자만 모아서 [] 에 담아주고, 숫자만 모아서 [] 에 담아주는 함수
문자 숫자 외의 자료는 입력불가능하고 파라미터 갯수 제한은 X
함수 만들어보시고 함수의 파라미터/return 타입지정도 확실하게 해봅시다.

(동작예시)
함수('b', 5, 6, 8, 'a') 이렇게 사용할 경우 이 자리에 [ ['b', 'a'], [5, 6, 8] ] 이 return 되어야합니다.
*/
function 함수() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var result = [[], []];
    rest.forEach(function (a) {
        if (typeof a === 'string') {
            result[0].push(a);
        }
        else {
            result[1].push(a);
        }
    });
    return result;
}
