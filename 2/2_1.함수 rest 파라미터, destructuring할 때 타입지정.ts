function 함수1(...a){ // rest parameter ... : 이 함수에는 파라미터 여러 개 받음, 다른 파라미터 맨 뒤에만 사용 가능
    console.log(a)
}
함수1(1, 2, 3, 4, 5)

// rest parameter는 타입 지정 방법
function 함수2_1(...a :number[]){ // number[] : number 타입의 array, a는 array로 들어옴
    console.log(a)
}
함수2_1(1, 2, 3, 4, 5)

// ... 함수 안에 사용하면 rest parameter / 어레이나 오브젝트 왼쪽에 사용하면 괄호 벗기는 spread operator
let arr = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr, ...arr2];
console.log(arr3) // [1, 2, 3, 4, 5] 출력



// destructuring
let arr4 = ['안녕', 100] // 이 자료들을 변수로 빼서 쓰고 싶으면
let [변수1, 변수2] = ['안녕', 100] // 이렇게 쓰면 됨 = destructuring
let {student, age} = { student : true, age : 20}
let 오브젝트2_1 = { student : true, age : 20}

function 함수2_1_1(a, b){
    console.log(a, b)
}
함수2_1_1(오브젝트2_1.student, 오브젝트2_1.age)

function 함수2_1_2({student, age} :{student : boolean, age : number}){
    console.log(student, age)
}
함수2_1_2({ student : true, age : 20 })



/*
숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다. 
최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다. 
(조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
(조건2) Math.max() 사용금지 반복문 사용
*/
function 최댓값(...x : number[]) {
    let result = 0;
    x.forEach((i)=>{
        if (result < i) {
            result = i
        }
    })
    return result;
}
console.log(최댓값(4,6,3,2)) 

/*
object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
함수( { user : 'kim', comment : [3,5,4], admin : false } )
(조건1) destructuring 문법을 써봅시다.
(조건2) 함수실행시 입력한 파라미터의 value들 (kim, [3,5,4] 이런거)을 전부 콘솔창에 출력해줘야합니다.
*/
type UserType = {
    user : string,
    comment : number[],
    admin : boolean
}
function 함수2_1_3({user, comment, admin} :UserType) :void{
    console.log(user, comment, admin)
}

/*
array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
함수( [40, 'wine', false] )
(조건1) destructuring 문법을 써봅시다.
(조건2) 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력해줘야합니다.
*/
type 어레이 = (number | string | boolean)[];

function 함수2_1_4([a,b,c]:어레이){
    console.log(a,b,c)
}

함수2_1_4( [40, 'wine', false] ) 