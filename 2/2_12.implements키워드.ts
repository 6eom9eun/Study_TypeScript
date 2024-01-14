/*
interface는 object 타입지정할 때 씀
interface는 class 타입을 확인하고 싶을 때도 사용할 수 있음 => 근데 implements 키워드도 필요함 
*/

// implements 키워드
class Car2_12 {
    model : string;
    price : number = 1000;
    constructor(a :string){
        this.model = a
    }
}
let 자동차 = new Car2_12('morning'); 

/*
class Car2_12 로부터 생산되는 object들은 model과 price 속성을 가지게 됨
근데 class가 model, price 속성을 가지고 있는지 타입으로 확인하고 싶으면 어떻게 ? => interface + implements 키워드
*/

interface CarType {
    model : string,
    price : number
}

class Car2_12_1 implements CarType {
    model : string;
    price : number = 1000;
    constructor(a :string){
        this.model = a
    }
}
let 자동차2_12 = new Car2_12_1('morning');
/*
class 이름 우측에 implements를 쓰고 interface 이름을 쓰면
"이 class가 이 interface에 있는 속성을 다 들고있냐" 라고 확인이 가능
그래서 다 갖고 있으면 별말 안해주다가, 빠진 속성이 있으면 에러로 알려줌.
*/

// implements는 타입지정문은 아님, interface에 들어있는 속성을 가지고 있는지 확인만하라는 뜻
// class에다가 필드오ㅘ 타입을 할당하고 변경시키고 그런 역할 XXX


interface CarType2_12 {
    model : string,
    tax : (price :number) => number;
}

class Car2_12_2 implements CarType2_12 {
    model;   ///any 타입됨
    tax (a){   ///a 파라미터는 any 타입됨 
        return a * 0.1
    }
}
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
