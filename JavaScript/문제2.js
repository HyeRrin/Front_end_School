let sample = [10, 20, 30, 5, 6, 3, 100, 110, 99, 88];
let temp = sample[0];

for (let i=0; i < sample.length; i++) {
    if(temp < sample[i]){
        temp = sample[i];
    }
}
// 최대값 구하기 -> 110

for (let i=0; i < sample.length; i++) {
    if(temp > sample[i]){
        temp = sample[i];
    }
}
// 최소값 구하기 -> 3

let value = [1, 3, 4, 8, 13, 17, 20];
let temp = value[1] - value[0]

for (let i = 0; i < value.length - 1; i++) {
    if (temp > (value[i+1] - value[i])){
        console.log(value[i], value[i + 1])
    }
}
// 10점 만점에 6점 정도의 코드

let value = [1, 4, 6, 8, 13, 17, 20, 21, 28];
let temp = value[1] - value[0]
let result = 0

for (let i = 0; i < value.length - 1; i++) {
    if (temp > (value[i+1] - value[i])){
        result = value[i+1] - value[i];
    }
}

console.log(result);
//






let value1 = [1, 4, 6, 8, 13, 17, 20, 21, 28]
// 정답코드
let value = [1, 4, 6, 8, 13, 17, 20, 21, 28];
let temp = value[1] - value[0];  // 4 - 1 -> 3, 초기 temp는 3
let result = 0;

for (let i = 0; i < value.length - 1; i++) {
    if (temp > (value[i+1] - value[i])){
        temp = value[i+1] - value[i];
        result = i;
    }
}

console.log(value[result], value[result+1]);
////////////////////////


// 1번째 순회(i==0, temp=3, result=0)
for (let i = 0; i < 8; i++) {
    if (3 > 3){
        temp = value[i+1] - value[i];
        result = i;
    }
}

// 2번째 순회(i==1, temp=2, result=1)
for (let i = 0; i < 8; i++) {
    if (3 > 2){
        temp = 2;
        result = 1;
    }
}

// 3번째 순회(i==2, temp=2, result=1)
for (let i = 0; i < 8; i++) {
    if (2 > 2){
        temp = value[i+1] - value[i];
        result = i;
    }
}

...