/*
- 프로젝트 사이즈가 큰가 
- 협업시 다른 사람이 짠 코드를 참조할 일이 많은가
- 장기적으로 유지보수에 도움이 되는가
- 나중에 팀원이 더 필요해도 인력수급이 쉽게 가능한가
- 팀원들 학습에 필요한 시간과 비용이 적게 드는가
해당 되면 TS 도입 고려

---
리액트 프로젝트 설치
npx create-react-app 프로젝트명 --template typescript 

기존 프로젝트에 TS 설치
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
---

일반 프로젝트와 다른 점은 컴포넌트 파일은 js가 아니라 tsx로 확장자를 사용해야 함. ts랑 똑같은데 jsx 문법을 지원합니다.
코드는 일반 리액트 코드와 큰 다른 점이 없음.
다만 함수, 컴포넌트, state, props 타입체크를 잘 해줘야 에러가 나지 않음..
타입관련 버그가 생길 것 같은 곳에 타입지정 !!

1. 일반 변수, 함수 타입지정 : TS랑 똑같이 작성

2. JSX 타입지정 : 
    리액트에선 변수나 자료에 <div></div> 이런 걸 담을 수 있음.
    왜냐면 리액트에서 <div></div> 이렇게 쓰면 HTML이 아니라 JSX라고 부르는 자료가 됨.
    이런 자료를 타입지정하고 싶으면 JSX.Element 타입 사용
    let 박스 :JSX.Element = <div></div>
    let 버튼 :JSX.Element = <button></button>

3. function component 타입지정 :
    function App () {
        return (
        <div>안녕하세요</div>
        )
    }
    
    리액트 컴포넌트는 이렇게 생김, 함수니까 파라미터와 return에 타입지정하면 됨
    파라미터는 항상 props라 props가 어떤 타입인지 알아서 타입 지정
    컴포넌트는 JSX를 return함, 그래서 return에 JSX.Element 타입지정
    type AppProps = {
        name: string;
    }; 
    function App (props: AppProps) :JSX.Element {
        return (
        <div>{message}</div> 
        )
    }
    생략해도 자동으로 타입 지정되긴 함. 



    <Container a={<h4>안녕</h4>} />
    function Container (props) {
    return (
        <div>{props.a}</div>
        )
    }
    props로 JSX를 입력할 수 있게 코드 짜는 경우도 있음
    JSX.IntrinsicElements라는 이름의 타입 사용 가능 => <div> <a> <h4> 같은 기본 태그들을 표현해주는 타입임.

    type ContainerProps = {
        a: JSX.IntrinsicElements['h4'];
    }; 

    function Container (props: ContainerProps) {
        return (
        <div>{props.a}</div>
        )
    }
    이런 식으로 넣을 수 있음
    a라는 props자리에 <h4>만 넣을 수 있는 타입을 지정한 것임.

4. state 문법 사용시 타입지정 :
    const [user, setUser] = useState<string | null>('kim');
    그냥 <> 열고 타입지정하면 됨.
    Generic 문법을 이용해서 타입을 useState함수에 집어넣는 식 설정

5. type assertion 문법 사용할 때 :
    let code: any = 123; 
    let employeeCode = <number> code; // XXX
    assertion 할 때 as 또는 <> 사용해야함
    리액트에서 컴포넌트로 오해할 수 있어서 <> 리액트에서 사용 X, as 키워드 사용하는 게 좋음
    as키워드는 근데 확실할 때만 사용 !!!!

TS 쓰면 리액트 개발방식이 달라지는게 아님
함수 변수 정의부분 타입지정을 할 수 있다는 것만 달라짐
"props엔 무조건 { name : string }만 들어올 수 있습니다"
이런 문법을 작성하는 것, 그냥 TS는 에디터 부가기능 수준
*/