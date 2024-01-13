class User2_5{
    x = 10;
}

// class 복사 : extends 키워드 사용

class NewUser2_5 extends User2_5{
}

let 사람 = new NewUser2_5()
console.log(사람)

// private 붙이면 class{} 안에서만 사용 가능
// 또한 protected도 붙이면 class{} 안에서만 사용 가능
class User2_5_1{
    protected x = 10;
}

// protected는 private와 다른게, extends된 class{} 안에서도 사용 가능
class NewUser2_5_1 extends User2_5_1{
    doThis(){
        this.x = 20;
    }
}

// protected : extends된 class는 사용가능, 자식들 사용불가능
// private : extends된 class는 사용불가능, 자식들 사용불가능

class User2_5_2{
    static x = 10;
    y = 20;
}

let 자식2_5 = new User2_5_2()
console.log(자식2_5) // static x는 출력 안됨 : static 키워드 붙이면 부모 class에 직접 부여됨 (+ 자식에게 물려주지 않음)
console.log(User2_5_2.x) // 부모기 때문에 이렇게 하면 출력됨, 

// extends하면 static 한 것도 다 복사됨
// private / protected / public + static 가능
class User2_5_3{
    private static x = 10;
    y = 20;
}

// 언제 활용???

class User2_5_4{
    static skill = 'js';
    intro =  User2_5_4.skill + '전문가입니다' // static 붙이면 this.skill 안됨, 부모 입력
}

let 범근 = new User2_5_4();
console.log(범근) // js전문가입니다 출력

User2_5_4.skill = 'ts'
let 범근2 = new User2_5_4();
console.log(범근) // ts전문가입니다 출력

// 숨기고싶으면 그냥 protected, private 붙이자.



/*
다음 x, y, z 속성의 특징을 설명해보십시오.

class User {
    private static x = 10; // 클래스 내부에서만 사용 가능, User.x로 사용 가능
    public static y = 20; // 클래스 외부에서도 사용 가능, User.y로 사용 가능
    protected z = 30; // 클래스 내부와 상속받은 자식 클래스에서만 사용 가능
}
*/

/*
class User {
    private static x = 10;
    public static y = 20;
}

User.addOne(3) //이렇게 하면 x가 3 더해져야함
User.addOne(4) //이렇게 하면 x가 4 더해져야함
User.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함
*/
class User { 
    private static x = 10; 
    public static y = 20;

    static addOne(파라미터 :number){
        User.x += 파라미터
    }
    static printX(){
        console.log(User.x)
    }
}

/*
웹 요소 애니메이팅
let 네모 = new Square(30, 30, 'red');
네모.draw()
네모.draw()
네모.draw()
네모.draw()

이렇게 네모.draw()를 할 때마다
index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가
가로 400px 세로 400px 공간 안에 무작위로 배치되어야합니다.
*/

/* html
<body>
    <script src="index.js"></script>
</body>
*/
class Square {  
    constructor (public width :number, public height :number, public color :string){
    }
    draw(){
        let a = Math.random();
        let square = `<div style="position:relative; 
        top:${a * 400}px; 
        left:${a * 400}px; 
        width:${this.width}px; 
        height : ${this.height}px; 
        background:${this.color}"></div>`;
        document.body.insertAdjacentHTML( 'beforeend', square );
    }
}