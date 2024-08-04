const clock = document.querySelector("h2#clock");

function sayHello(){
    console.log("hello");
}
// setInterval(실행할 함수, 실행할 함수의 주기)
setInterval(sayHello,5000);