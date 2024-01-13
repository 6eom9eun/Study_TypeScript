var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User2_5 = /** @class */ (function () {
    function User2_5() {
        this.x = 10;
    }
    return User2_5;
}());
// class 복사 : extends 키워드 사용
var NewUser2_5 = /** @class */ (function (_super) {
    __extends(NewUser2_5, _super);
    function NewUser2_5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NewUser2_5;
}(User2_5));
var 사람 = new NewUser2_5();
console.log(사람);
// private 붙이면 class{} 안에서만 사용 가능
// 또한 protected도 붙이면 class{} 안에서만 사용 가능
var User2_5_1 = /** @class */ (function () {
    function User2_5_1() {
        this.x = 10;
    }
    return User2_5_1;
}());
// protected는 private와 다른게, extends된 class{} 안에서도 사용 가능
var NewUser2_5_1 = /** @class */ (function (_super) {
    __extends(NewUser2_5_1, _super);
    function NewUser2_5_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewUser2_5_1.prototype.doThis = function () {
        this.x = 20;
    };
    return NewUser2_5_1;
}(User2_5_1));
// protected : extends된 class는 사용가능, 자식들 사용불가능
// private : extends된 class는 사용불가능, 자식들 사용불가능
var User2_5_2 = /** @class */ (function () {
    function User2_5_2() {
        this.y = 20;
    }
    User2_5_2.x = 10;
    return User2_5_2;
}());
var 자식2_5 = new User2_5_2();
console.log(자식2_5); // static x는 출력 안됨 : static 키워드 붙이면 부모 class에 직접 부여됨 (+ 자식에게 물려주지 않음)
console.log(User2_5_2.x); // 부모기 때문에 이렇게 하면 출력됨, 
// extends하면 static 한 것도 다 복사됨
// private / protected / public + static 가능
var User2_5_3 = /** @class */ (function () {
    function User2_5_3() {
        this.y = 20;
    }
    User2_5_3.x = 10;
    return User2_5_3;
}());
// 언제 활용???
var User2_5_4 = /** @class */ (function () {
    function User2_5_4() {
        this.intro = User2_5_4.skill + '전문가입니다'; // static 붙이면 this.skill 안됨, 부모 입력
    }
    User2_5_4.skill = 'js';
    return User2_5_4;
}());
var 범근 = new User2_5_4();
console.log(범근); // js전문가입니다 출력
User2_5_4.skill = 'ts';
var 범근2 = new User2_5_4();
console.log(범근); // ts전문가입니다 출력
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
var User = /** @class */ (function () {
    function User() {
    }
    User.addOne = function (파라미터) {
        User.x += 파라미터;
    };
    User.printX = function () {
        console.log(User.x);
    };
    User.x = 10;
    User.y = 20;
    return User;
}());
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
var Square = /** @class */ (function () {
    function Square(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Square.prototype.draw = function () {
        var a = Math.random();
        var square = "<div style=\"position:relative; \n        top:".concat(a * 400, "px; \n        left:").concat(a * 400, "px; \n        width:").concat(this.width, "px; \n        height : ").concat(this.height, "px; \n        background:").concat(this.color, "\"></div>");
        document.body.insertAdjacentHTML('beforeend', square);
    };
    return Square;
}());
