/*
interface는 object 타입지정할 때 씀
interface는 class 타입을 확인하고 싶을 때도 사용할 수 있음 => 근데 implements 키워드도 필요함
*/
// implements 키워드
var Car2_12 = /** @class */ (function () {
    function Car2_12(a) {
        this.price = 1000;
        this.model = a;
    }
    return Car2_12;
}());
var 자동차 = new Car2_12('morning');
var Car2_12_1 = /** @class */ (function () {
    function Car2_12_1(a) {
        this.price = 1000;
        this.model = a;
    }
    return Car2_12_1;
}());
var 자동차2_12 = new Car2_12_1('morning');
var Car2_12_2 = /** @class */ (function () {
    function Car2_12_2() {
    }
    Car2_12_2.prototype.tax = function (a) {
        return a * 0.1;
    };
    return Car2_12_2;
}());
/*
CarType을 implements 했냐고 써봄
근데 CarType에 있던 model : string 이런게 반영되는건 아닙니다. class 안에서의 model은 any 타입임
class 함수도 마찬가지로 함수에 있던 number 타입이 전혀 반영 XXX
결론은 implements는 class의 타입을 체크만 해주는 용도지 할당하는 거 아님
*/
// implements는 이 class가 특정 필드와 함수를 가지고 있는지 확인하고 싶은 경우에 사용하는 것
/*
클래스끼리 복잡하게, 상속하고 그런 경우 이 클래스에 어떤 필드와 함수가 들어있는지 추론하기 힘들 수 있음
그래서 이 class가 특정 필드와 함수같은걸 가지고 있는지 확인하고 체크하고 싶을 때,
class ~ implements ~ {} 쓰면 됨
클래스를 많이 만들어쓸 때, 일종의 가이드북 같은 역할

extends는 class A extends B {} 이런 식으로 쓰면, B에 있던 필드와 함수를 A로 복사해줌, 클래스끼리 복사할 때 (상속을 구현할 때) 사용
implements는 상속 그런게 되는 것이 아니고 체크만 해주는 문법이라 가볍게 타입체크 용도.
*/
