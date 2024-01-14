import { 이름2_6, 나이2_6, Name2_6 } from './2_6.a'

console.log(이름2_6, 나이2_6)

let 변수2_6 :Name2_6 = 'park';




// 문제, 정답은 2_6.a.ts에 있음
/*
type Car = {
    wheel : number,
    model : string
}
interface Bike {
    wheel : 2,
    model : string
}
다른 파일로 옮겨서 사용하고 싶습니다. 
어떻게 해야 할까요?
*/
import {Car, Bike} from './2_6.a'

let 빠방이 :Car = { wheel : 4, model : 'Sonata' }

/*
이 함수는 파라미터로 object자료 하나를 선택적으로 집어넣을 수 있고 
아무것도 return 해주지 않아야합니다. 
함수 만들 때마다 여기에 타입 일일이 붙이기 귀찮아서 그런데
이 타입을 다른 파일에 저장해두고 import 해와서 함수 만들 때마다 쓰려면 어떻게 코드를 짜야할까
*/
import {ObjFunction} from './2_6.a'

let 함수2_6 :ObjFunction = function(a){
    console.log(a)
}
함수2_6({abc : '하이'});


/*
type Dog = string;
interface Dog { name : string };

let dog1 :Dog = 'bark';
let dog2 :Dog = { name : 'paw' }

위 코드에서 에러를 없애야합니다. 어떻게 코드를 짜면 될까요? 
(조건) type Dog, interface Dog의 타입이름 변경 금지, 파일 분할 금지 
*/