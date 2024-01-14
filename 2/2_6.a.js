export var 이름2_6 = 'kim';
export var 나이2_6 = 20;
// object 안에 숨긴 것임
// Name2_6_1는 없다고 나옴, 오브젝트에 숨겨서
var 변수2_6_1 = 'kim';
var BadDog;
(function (BadDog) {
    ;
})(BadDog || (BadDog = {}));
var dog1 = 'bark';
var dog2 = { name: 'paw' };
