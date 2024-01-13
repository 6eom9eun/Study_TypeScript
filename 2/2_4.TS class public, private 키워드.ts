// TS 장점 : JS에서 쓸 수 없는 객체지향언어 문법 쓸 수 있음
// public private protected static 키워드 (class 많이 만들어서 개발할 때 사용)

class User2_4{
    public name = 'kim'; // class에서 쓰는 public 키워드 : public 붙으면 모든 자식들이 이용 가능 / public 안 붙어도 똑같지 않나? : 붙이지 않으면 public이 알아서 붙어있음
    constructor(a){
        this.name = a
    }
}
let 유저1 = new User2_4('kwak')
유저1.name = '하이';



class User2_4_1{
    private name = 'kim'; // private 붙이면 이 필드는 이제 자식들이 수정 XXX
    constructor(a){
        this.name = a
    }
}
let 유저2 = new User2_4_1('kwak')
// 유저2.name = '하이'; // private 붙이면 이 필드는 이제 자식들이 수정 XXX
// private 붙으면 class 안에서만 수정, 이용 가능 !


// private 키워드 사용 예시
class User2_4_2{
    name :string;
    private familyName :string = 'kim'; // 클래스 안에서만 쓰이는, 밖으로 노출되지 않아야 하는 필드에 private, 조회는 되는데 갖다 쓸 수 없음
    constructor(a){
        this.name = a + this.familyName
    }
    필드변경함수(){
        this.familyName = 'kwak'
    }
}
let 유저3 = new User2_4_2('minsoo')

// private는 수정 불가가 아님, class{} 안에서만 수정 가능

// class 밖에서 수정하려면 ???
// 자식들이 familyName을 수정하고 싶으면? => 1. class 안에 familyName 변경 함수를 만들고 2. 자식들이 사용
유저3.필드변경함수()

// 데이터를 외부로부터 보호하고싶을 때 자주 사용하는 패턴


// public 키워드 쓰면 this.~~ 생략 가능
class Person2_4{
    constructor(public name){
    }
}
let 자식 = new Person2_4('kim')
console.log(자식)
// constructor에 파라미터로 입력하면 필드로 정의 안해도 되고 생략 가능함..