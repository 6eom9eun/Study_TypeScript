function 함수1_5(x) {
    if (typeof x === 'string') { // 대표적인 Type Narrowing 방법 : typeof 연산자
        return x + '1';
    }
    else {
        return x + 1;
    }
}
함수1_5(5);
// (union type 등) 변수가 타입이 아직 불확실하면 if문 등으로 Narrowing 해줘야 조작할 수 있음.
function 함수1_5_1(x) {
    var array = [];
    // array[0] = x; // error TS2322: Type 'string | number' is not assignable to type 'number'.
    if (typeof x === 'number') {
        array[0] = x;
    }
    else { // Narrowing할 때 if문 썼으면 끝까지 써야 안전함, else & else if
        array[0] = 0;
    }
}
함수1_5_1(5);
// Narrowing으로 판정해주는 문법 : typeof 변수, 속성명 in 오브젝트자료, 인스턴스 instanceof 부모클래스
// 현재 변수의 타입이 뭔지 특정지을 수 있기만 하면 다 인정
// 아니면 Assertion : 타입을 강제로 지정해주는 방법, 타입 덮어쓰기
function 함수1_5_2(x) {
    var array = [];
    array[0] = x; // x를 number로 강제 지정, if문 필요없음
}
var 이름1_5 = 'kim';
// 이름1_5 as number; // error TS2352
// assertion
// 1. Narrowing할 때 사용
// 2. 무슨 타입이 들어올 지 100% 확실할 때 사용, 에러를 못 잡아줌 (굳이 사용? X)
// 3. 강제로 타입 부여하는 함수 만들 때 사용
// 정말 필요할 때, 비상용, 디버깅용
// 예전 as 문법 -> <number>이름1_5;
/*
1번 문제
숫자여러개를 array 자료에 저장해놨는데
가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
이걸 클리닝해주는 함수가 필요합니다.
클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
[1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.

1번 정답
function 클리닝함수(a :(number|string)[]){
    let 클리닝완료된거 :number[] = [];
    a.forEach((b)=>{
        if (typeof b === 'string') {
            클리닝완료된거.push(parseFloat(b))
        } else {
            클리닝완료된거.push(b)
        }
    })
    return 클리닝완료된거
}
console.log( 클리닝함수([123,'3']) )

2번 문제
let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }
철수쌤같은 선생님 object 자료를 집어넣으면
그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
그리고 타입지정도 엄격하게 해보도록 합시다.
만들함수( { subject : 'math' } )  //이 경우 'math'를 return
만들함수( { subject : ['science', 'art', 'korean'] } ) //이 경우 'korean'을 return
만들함수( { hello : 'hi' } )  //이 경우 타입에러 나면 됩니다

2번 정답
function 만들함수( x :{subject : string | string[]} ){
    if (typeof x.subject === 'string') {
        return x.subject
    } else if (Array.isArray(x.subject) ){
        return x.subject[x.subject.length - 1]
    } else {
        return '없음'
    }
}
console.log( 만들함수( { subject : ['english', 'art'] }  ) )

*/
