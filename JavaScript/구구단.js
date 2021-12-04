let j = 1;
let x = 2;
while (x < 10) {
    while (j < 10) {
        console.log(`${x} X ${j} = ${x*j}`);
        j++;
    }
    j = 1; //이 작업 안해주면, 2단에서 끝나고 3단으로 못넘어감. j가 초기화 되지 않아서
    x++; //무한반복 방지
}