// function return 값에 붙일 수 있는 never type

// 조건 1. return 값이 없는 함수
// 조건 2. 함수 실행이 끝나지 않아야 함 = endpoint가 없어야 함

function 함수2_3() :never{
    // return undefined // return 따로 안해도 undefined가 return 됨, 모든 함수는 return 값을 가지고 있는 것임.

    // throw new Error('에러입니다'); // 강제로 에러 내기, 코드실행이 중단됨, 함수가 끝나지 않음 => never type 가질 수 있음
    while(true){      
    } // 내부 코드 무한히 반복 => never type 가질 수 있음 
}

// 실제 코딩에서 never type은 거의 사용하지 않음 => 대부분 쓸데없고 void type으로 대체 가능
// never type은 코드 이상하게 짜면 출몰함

function 함수2_3_1(parameter :string){ // 이렇게 함수 이상하게 짜면, parameter 타입이 never로 변하게 됨
    if (typeof parameter == 'string'){
        console.log(parameter) // never = 있을 수 없다. => 이런 현상은 있을 수 없다. => never type => 코드가 이상한 것이다
    } else {
        console.log(parameter)
    }
}

let 함수2_3_2 = function(){ // 함수가 never가 되어버림
    throw new Error('에러입니다')
}

// never 대신 void 사용하면 되고, 등장하면 코드 이상한 것이라는 걸 알아채면 됨.