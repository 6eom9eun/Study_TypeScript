// 함수는 파라미터, return 값에 타입을 지정할 수 있다.
function 함수1_4_1 (x :number) :number {
    return x * 2;
}
함수(2) // 파라미터 없으면 에러, JS는 에러 안남


// 함수에서 void타입 활용 : return할게 없으면
function 함수1_4_2 (x :number) :void {
    1 + 1
    // retrun 1 + 1; // error TS2322: Type '2' is not assignable to type 'void'.
}
// void 타입은 실수로 뭔가 return 하는 것을 방지함


// 파라미터가 옵션일 경우 ? 타입
// 변수? :number는 변수 : number | undefined 와 같다.
function 함수1_4_3(x? :number) :void{
}
함수1_4_3()
// 같다
function 함수1_4_4(x :number | undefined) :void{
}


function 함수1_4_5(x :number | string) :void{
    // console.log(x + 3) // 에러 : x는 number | string이므로 number와 string의 공통된 속성만 사용 가능
}
함수1_4_5(2)
