class Person{
    data = 0;
    // data :number = 0; // 타입 지정 가능, 근데 컴파일러가 거의 알아서 해줌
}

let 사람1 = new Person();
let 사람2 = new Person();
console.log(사람1.data)



class Person1{
    name :string; // 미리 타입 지정
    constructor(a :string){ // return 타입 지정 X -> 이유는 어차피 object임
        this.name = a; // name 에러, name을 미리 지정해줘야함
    }
}

let 사람3 = new Person1('kim');
let 사람4 = new Person1('kwak');
console.log(사람2)



class Person2{
    name :string;
    constructor(a :string){ 
        this.name = a;
    }
    함수(a :string){ // prototype 함수는 여기다가, prototype 함수도 타입 지정 !
        console.log('안녕'+a);
    }
}

let 사람5 = new Person2('kwak');
사람5.함수('park');



/*
Car 클래스를 만들고 싶습니다.
1. 대충 { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.
2. 그리고 복사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다. 
3. model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요. 

let car1 = new Car('소나타', 3000)
console.log(car1) //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()) //콘솔창 출력결과는 300
*/
class Car {
    model :string;
    price :number;
    constructor(a :string, b :number){
        this.model = a;
        this.price = b;
    }
    tax() :number{
        return this.price * 0.1
    }
}

/*
class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.
1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면 
2. 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고 
3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.
4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다. 그리고 타입 지정하십시오.

let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num) //[3,5]
console.log(obj.str) //['kim', 'park']
*/
class Word{
    num;
    str;
    constructor(...param : (number | string)[] ){
        let 숫자들 :number[] = [];
        let 문자들 :string[] = [];

        param.forEach((i)=>{
            if (typeof i ==='string') {
                문자들.push(i)
            } else {
                숫자들.push(i)
            }
        })
        this.num = 숫자들;
        this.str = 문자들;
    }
}