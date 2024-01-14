"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _2_6_a_1 = require("./2_6.a");
console.log(_2_6_a_1.이름2_6, _2_6_a_1.나이2_6);
var 변수2_6 = 'park';
var 빠방이 = { wheel: 4, model: 'Sonata' };
var 함수2_6 = function (a) {
    console.log(a);
};
함수2_6({ abc: '하이' });
/*
type Dog = string;
interface Dog { name : string };

let dog1 :Dog = 'bark';
let dog2 :Dog = { name : 'paw' }

위 코드에서 에러를 없애야합니다. 어떻게 코드를 짜면 될까요?
(조건) type Dog, interface Dog의 타입이름 변경 금지, 파일 분할 금지
*/ 
