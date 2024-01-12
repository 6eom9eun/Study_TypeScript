var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function 함수1() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
함수1(1, 2, 3, 4, 5);
// rest parameter는 타입 지정 방법
function 함수2_1() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
함수2_1(1, 2, 3, 4, 5);
// ... 함수 안에 사용하면 rest parameter / 어레이나 오브젝트 왼쪽에 사용하면 괄호 벗기는 spread operator
var arr = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true);
console.log(arr3); // [1, 2, 3, 4, 5] 출력
// destructuring
var arr4 = ['안녕', 100]; // 이 자료들을 변수로 빼서 쓰고 싶으면
var _a = ['안녕', 100], 변수1 = _a[0], 변수2 = _a[1]; // 이렇게 쓰면 됨 = destructuring
var _b = { student: true, age: 20 }, student = _b.student, age = _b.age;
var 오브젝트2_1 = { student: true, age: 20 };
function 함수2_1_1(a, b) {
    console.log(a, b);
}
함수2_1_1(오브젝트2_1.student, 오브젝트2_1.age);
function 함수2_1_2(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
함수2_1_2({ student: true, age: 20 });
/*
숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.
최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다.
(조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
(조건2) Math.max() 사용금지 반복문 사용
*/
function 최댓값() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    var result = 0;
    x.forEach(function (i) {
        if (result < i) {
            result = i;
        }
    });
    return result;
}
console.log(최댓값(4, 6, 3, 2));
function 함수2_1_3(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
function 함수2_1_4(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
함수2_1_4([40, 'wine', false]);
