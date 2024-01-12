// TS로 HTML 조작 약간 다름
// html 파일 필요, tsconfig.json에 'strictNullChecks': true  추가
// html 스크립트 src는 변경된 js파일로 지정

let 제목 = document.querySelector('#title');
// 제목.innerHTML = '반가워요' // 에러 -> 제목이 Union type, Element | null
// 타입을 하나로 narrowing 해줘야 함



if (제목) { // narrowing : 제목이 null이 아니면
    제목.innerHTML = '반가워요'
}

if (제목 instanceof Element){ // narrowing2 : instanceof 연산자 -> 가장 많이 씀, 제목 오브젝트가 Element의 자식이냐? true false
    제목.innerHTML = '반가워요'
}

let 제목2 = document.querySelector('#title') as Element; // narrowing3 : as 문법 -> 제목2는 Element 타입으로 강제 지정됨, TS 쓰는 의미가 없음

if(제목?.innerHTML){ // narrowing4 : ?. 연산자 -> 1. 제목에 innerHTML이 있으면 출력 2. 없으면 undefined 출력 (optinal chaining)
    제목.innerHTML = '반가워요'
}

// narrowing5 : tsconfig.json에서 "strictNullChecks": false로 수정



// 그냥 JS를 사용해도 이렇게 코드짜면 안전하고 좋다.

let 링크 = document.querySelector('.link');
// 링크.href = 'https://kakao.com'
if (링크 instanceof HTMLAnchorElement){ // TS가 제공하는 HTML 타입이 있음. Element => HTMLAnchorElement, HTMLHeadingElement, HTMLButtonElement
    링크.href = 'https://kakao.com'
}

let 버튼 = document.querySelector('#button'); // TS에서 eventListener 부착하는 방법
버튼?.addEventListener('click', function(){
})



/*
html 안에 test.jpg를 보여주고 있는 이미지 태그가 있다고 칩시다. 
이미지를 new.jpg 라는 이미지로 바꾸고 싶으면 자바스크립트 코드를 어떻게 짜야할까요?
성공여부는 크롬 개발자도구 켜면 src 속성이 잘 바뀌었는지 확인가능하겠죠?
*/
let 이미지 = document.querySelector('#image');
if (이미지 instanceof HTMLImageElement){
    이미지.src = 'change.jpg';
}

/*
<a class="naver" href="naver.com">링크</a>
<a class="naver" href="naver.com">링크</a>
<a class="naver" href="naver.com">링크</a> 
3개의 링크가 있는데 이 요소들의 href 속성을 전부 https://kakao.com으로 바꾸고 싶은 겁니다.
자바스크립트 코드를 어떻게 짜야할까요? 
*/
let 링크1_8 = document.querySelectorAll('.naver');
링크1_8.forEach((a)=>{
    if (a instanceof HTMLAnchorElement){
        a.href = 'https://kakao.com'
    }
})