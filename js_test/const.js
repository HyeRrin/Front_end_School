const hello = "first hello"
//같은 변수명으로 재정의할 수 없는 const
//hello = "second hello";

//중괄호 scope
//중괄호 안에서의 const와 밖에서의 const 따로 인식
if (true) {
    const hello = "second hello";
    console.log(hello); //second hello
}

console.log(hello); //first hello
