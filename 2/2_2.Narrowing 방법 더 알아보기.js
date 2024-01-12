// typeof 연산자로 할 수 없는 Nrrowing 상황이 존재함
// null & undefined 타입 체크하는 경우가 매우 잦음
function 함수2_2(a) {
    if (a && typeof a === 'string') { // 1.&& 연산자로 null & undefined 타입 체크하기
        // case 1. a가 undefined면 undefined가 남음
        // case 2. a가 string이면 우측에 있는 조건식 실행, typeof a === 'string' true
        // a가 undefined면 if문 실행 X, a가 string이면 if문 실행 O
    }
}
function 함수2_2_1(animal) {
    /* if ( typeof animal === ) {
        animal.swim
    }*/
    if ('swim' in animal) { // 2. in 키워드로 object narrowing 가능, 속성명 in 오브젝트 자료
        animal.swim;
    }
}
// object 타입이 둘 다 비슷하게 생김
// narrowing 어떻게 하지 => 속성명 in 오브젝트자료(불가능), 오브젝트 instanceof 부모class(불가능)
// 비슷한 object 타입일 경우 literal type으로 강제로 만들어두면 다음에 도움 됨, object 타입마다 literal type 만들어두면 narrowing 편리해짐
function 함수2_2_2(x) {
    if (x.wheel === '4개') { // 이 경우 x 변수는 Car2_2 타입임
        console.log('x는 Car2_2 타입입니다.');
    }
    else {
        console.log('x는 Bike2_2 타입입니다.');
    }
}
// literal type으로 object안에 각각 유니크한 자료 달아두거나 그러면 나중에 구분하기 편리할 수 있음.
// 논리적으로 이 타입인지 특정지을 수 있으면 narrowing으로 인정해줌 !
