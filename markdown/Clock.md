## JavaScript 시계 만들기 학습


### 목차
1. new Date
2. SetInterval / SetTimeout
3. 실행결과
----

### 1. new Date
- `new Date()` : 현재 시간을 알 수 있고, 시간을 조절할 수도 있음
- Date 객체를 생성하는 방법은 `new 연산자`를 사용하는 것입니다.
``` javaScript
    const date = new Date();
    console.dir(date);
```
- console.dir(date);를 실행시키면 가져올 수 있는 객체들을 볼 수있다
![img01.png](/images/Clock/img01.png)

|keyword|description|
|-------|-----------|
|.getHours|시간 구하기|
|.getMinutes|분 구하기|
|.getSeconds|초 구하기|

### 실시간 00:00:00으로 출력하는 방법

1. `date.getHours()`는 숫자로 출력 
2. **00:00:00** 이와 같은 방법으로 출력하기 위해선 문자로 출력해야함
3. `.padStart(targetLength, [padString])`을 붙여 변환할 수 있다.
    > `targetLength` : 목표로 하는 문자열 길이를 나타낸다. 이 길이에 맞게 문자열이 채워질 수 있다
    >`padString` (옵션) : 필요한 경우 채우기에 사용할 문자열이다. 기본값은 공백 문자열(' ')이다.
``` javaScript
    const hours = String(date.getHours()).padStart(2, "0");
```
### 2. SetInterval / SetTimeout

>  setInterval(실행할 함수, 실행할 함수의 주기)
``` javaScript
 setInterval(getClock,1000);
```
> setTimeout(실행할 함수, 종료할 함수의 주기)
``` javaScript
setTimeout(sayHello,5000);
```
### 3. 실행결과

![gif](/images/Clock/gif01.gif)