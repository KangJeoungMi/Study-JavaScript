const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const min =  String(date.getMinutes()).padStart(2, "0");
    const sec =  String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${min}:${sec}`;
}
getClock()
setInterval(getClock,1000);

//  date.getHours() 는 숫자기 때문에 padStart(2, "0")를 붙일 수 없다 따라서 문자열로 변환 시켜줘야 한다
//  String(date.getHours()).padStart(2, "0");

// setInterval(실행할 함수, 실행할 함수의 주기)
// setInterval(getClock,1000);
// setTimeout(실행할 함수, 종료할 함수의 주기)
// setTimeout(sayHello,5000);

