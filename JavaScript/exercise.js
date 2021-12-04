//if문

var test=5;
if(test<10){
    //codes
}


//if else문
let x=3;
let y=7;
if (x==y){
    document.write('if문으로 실행되었습니다.');
}   else {
    document.write('else문으로 실행되었습니다.')
}


//if문 연습1
let score = 69;
let money = 1000;

if (score > 90){
    document.write('참 잘했습니다!');
    money += 100000
    else if (score > 80){
        document.write('잘했습니다!');
        money += 10000
    } else if (score > 70) {
        document.write('했습니다!')
        money += 1000
    } else {
        money = 0
    }
}

document.write(money);//0

//if문 연습2
let score = 89;
let money = 100000;

if (score >= 90){
    console.log('mom: i\'m happy~!');
    money += 1000000;
} else if (score >= 80){
    console.log('mom: i\'m happy!');
    money += 100000;
} else if (score >= 70){
    console.log('mom: i\'m happy.');
    money += 10000;
} else if (score >= 60){
    console.log('mom: i\'m happy..');
    money += 10000;
} else {
    console.log('...');
}
//220000원


//삼항 조건 연산자
let x = 3;

x == 4?
document.write('if문으로 실행되었습니다.') :
document.write('else문으로 실행되었습니다') ;
//else문으로 실행되었습니다

let result = x == 4 ? 100 : 200;
document.write(result);//200

let score = 91;
let money = 1000;
score > 90 ? money += 100000 :
score > 80 ? money += 10000 :
score > 70 ? money += 100 : money = 0;
document.write(money);//101000


//반복문1
var cars = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];
var text = "";
var i;
for(i = 0; i < cars.length; i++){
    text += cars[i];
}


//반복문2
for(var i=0; i<10; i++){
    document.write(i, '<br>');
}

//1부터 100까지 짝수의 합
let s = 0;
for (var i = 0; i < 101; i+=2) {
    document.write(i,'<br>');
    s += i;
}
document.write(s,'<br>');


//구구단
for (var i = 2; i < 10; i++) {
    for (var j = 1; j < 10; j++) {
        document.write(`${i} x ${j} = ${i*j} <br>`)
    }
}

//100보다 작은 3의 배수와 5의 배수의 합
s = 0;
for (var i = 0; i < 101; i++) {
    if (i%3==0 || i%5==0){
        document.write(i, '<br>');
        s += i;
    }
}
document.write(s,'<br>');//2418

//평균 구하기
var value1 = [100, 200, 50, 400, 900];
var value2 = [60, 40, 80, 30, 90];
function average(value){
    var sum = 0;
    for (var i = 0; i < value.length; i ++) {
        sum += value[i];
    }
    return sum/value.length;
}

//최댓값 구하기
var value = [100, 200, 50, 400, 900];
function maximum(value){
    var max = 0;
    for(var i=0; i<value.length; i++){
        if(max < value[i]){
            max = value[i];
        }
    }
    return max;
}