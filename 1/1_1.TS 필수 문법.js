var 이름 = 'kim'; // 이 변수엔 string type만 들어갈 수 있습니다.
// 이름 = 123; // error TS2322: Type '123' is not assignable to type 'string'.
var 어레이 = ['kim', 'park']; // 이 변수엔 string[] type만 들어갈 수 있습니다.
var 오브젝트 = { name: 'kim' }; // 이 변수엔 { name : string } type만 들어갈 수 있습니다.
var 오브젝트2 = {}; // 불확실할 때는 ?를 붙여서 optional로 만들 수 있습니다.
var 유니온 = 123; // 다양한 타입 들어올 수 있게 하려면 Union Type을 사용합니다.
var 유니온2 = ['kim', 'park'];
var 이름2 = 'Kim';
function 함수(x) {
    return x * 2;
}
function 함수2(x) {
    return x * 2;
}
var john = [123, true]; // array에 쓸 수 있는 tuple type
var john2 = { name: 'kim', age: '123', sex: 'male' }; // 글자로된 모든 object 타입은 
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
