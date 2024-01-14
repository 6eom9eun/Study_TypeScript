interface StringOnly {
    // age :number, // 에러 -> age도 string인데 ?
    [key :string] :string; // 모든 string 타입의 속성은, string 타입의 값을 가지고 있어야 함
}

interface StringOnly2 {
    age :number, 
    [key :string] :string | number; // 이러면 에러 해결
}

let user :StringOnly = {
    name: 'kim',
    age: '20',
    location : 'seoul'
};

interface StringOnly3 {
    [key :string] :string; // 오브젝트 키는 숫자로해도 문자로됨, [key :number] :string; 가 정확하긴 함
}

let user2 :StringOnly3 = {
    0 : 'kim',
    1 : '20',
    2 : 'seoul'
}



interface MyType2_13{
    'font-size' : {
        'font_size' : {
            'font-size' : number;
        }
    }
}
// recursive하게 타입 만드는 방법 ???
interface MyType2_13_1{
    'font-size' : MyType2_13_1 | number; // 마지막 number 있으니까 !
}

let css :MyType2_13_1 = {
    'font-size' : {
        'font-size' : {
            'font-size' : 14
        }
    }
}



/*
let obj = {
    model : 'k5',
    brand : 'kia',
    price : 6000,
    year : 2030,
    date : '6월',
    percent : '5%',
    dealer : '김차장',
}
한번에 지정하기 위해 index signature 이걸 사용
*/
type Car2_13 = {
    [key :string] : number | string
}
let obj :Car2_13 = {
    model : 'k5',
    brand : 'kia',
    price : 6000,
    year : 2030,
    date : '6월',
    percent : '5%',
    dealer : '김차장',
}

/*
다음 object 자료의 타입을 interface 써서 만들어보십시오. 
let obj = {
    'font-size' : 10,
    'secondary' : {
        'font-size' : 12,
        'third' : {
            'font-size' : 14
        }
    }
}
타입지정 해보도록 합시다. 물론 비슷한 object들이 더 중첩되어도 가능하게 recursive한 타입으로
*/
interface MyType2_13_2 {
    'font-size' : number,
    [key :string] : number | MyType,
}