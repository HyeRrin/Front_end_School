//promise에는 3가지 상태 존재
//1. pending 대기상태
//2. fulfilled 이행상태
//3. rejected 실패상태 

//resolve 성공, reject 실패
//case1
// function sayHello() {
//     return new Promise((resolve, reject) => {
//         const hello = "Hello hello"
//         resolve(hello);
//     });
// }
// sayHello().then((resolvedData) => {
//     console.log(resolvedData);
// });

//case2
// function sayHello() {
//     return new Promise((resolve, reject) => {
//         //reject(new Error());
//         resolve("hello!!");
//     });
// }
// sayHello()
//     .then((resolvedData) => {
//         console.log(resolvedData);
//         return resolvedData;
//     }).then((resolvedData) => {
//         console.log(resolvedData);
//         return resolvedData;
//     }).then((resolvedData) => {
//         console.log(resolvedData);
//     })
//     .catch((error) => { //promiser가 error 핸들링 가능해짐
//         console.log(error);
//     });

//회원가입과 같은 일련의 흐름을 then을 통해 효율적으로 진행가능
//then 많이 써 then 자체로도 복잡해진다는 문제 있음

//async와 await 등장
function sayHello() {
    return new Promise((resolve, reject) => {
        resolve("hello!!");
    });
}
async function test() {
    const hello1 = await sayHello(); //promise 자체가 비동기로 움직이기 때문에, await 쓰지 않으면 밑에 있는 코드 바로 실행될 수 있음
    //await 사용하기 위해선 function 앞에 async라는 문법 작성해주어야 함
    console.log(hello1);
}
test();
