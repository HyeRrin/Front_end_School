let hello = "first hello";

//var처럼 변수 동일한 변수명 재정의할 수 없다
// hello = "second hello";

//중괄호 안에서만 유효함 (중괄호 scope)
if (true) {
    let hello = "second hello";
    console.log(hello);
}

console.log(hello); 