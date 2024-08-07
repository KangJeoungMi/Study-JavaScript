## JavaScript 랜덤 배경화면/명언 만들기 학습

### 목차
1. random
2. appendChild()
3. 실행결과
---
1. random

```javascript
Math.random()
```
- 난수 생성, 랜덤으로 숫자 추출하기
-  0~1(1은 미포함) 구간에서 부동소수점의 난수를 생성

```javascript
Math.floor()
```
- 소수점 1번째 자리를 버림하여 정수를 리턴하는 함수

|keyword|description|
|-------|-----------|
|round|반올림|
|ceil|올림|
|floor|내림|

#### **배열 리스트를 랜덤으로 돌리기**

```javascript
const quotes = [ ... ]
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
```
- `array.length` : 이는 자바스크립트에서 배열의 길이를 나타내는 속성. 배열에 몇 개의 요소가 있는지를 알려준다
- 배열의 길이 범위 내에서 무작위 숫자를 생성하여 배열의 무작위 요소를 선택
---
2. appendChild()
> 특정 부모 노드의 자식 노드 리스트의 끝에 새로운 자식 노드를 추가하는 데 사용

```javascript
const images = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `../img/${chosenImage}`;

document.body.appendChild(bgImage)
```
---
3. 실행결과
> 새로고침 할때마다 이미지와 명언이 바뀌는 것을 확인 할 수 있다
![img01.png](/images/Bakcground-Quotes/img01.png)
![img01.png](/images/Bakcground-Quotes/img02.png)