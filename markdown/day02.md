## JavaScript 1일차 학습

### 목차

> 1. HTML in JS
> 2. Elements [요소]
> 3. Event [이벤트]
> 4. CSS in JS

---

### 1. HTML in JS
- getElementById : HTML에서 Id를 통해 element 를 찾음
    - JS로 HTML의 속성을 변경할 수 있음
---
### 2. Elements [요소]
- querySelector : element를 CSS 방식으로 검색 가능
    -  만약에 동일한 class가 있다면 전부다 가져오는게 아니라 첫번째 element만 return함
    -  모든 조건에 만족하는 element를 보기위해선 querySelectorAll 이용

- `getElementById()` : 말 그대로 id , 하나의 값을 반환해줄때 쓴다
- `getElementsByClassName()` : 클래스 네임을 가져옴, array에 할당
- `getElementsByTagName()`: name할당 가능 array에 할당
---
### 3. Event [이벤트]
- `eventListener` : event를 listen함 → js에게 무슨 event를 listen하고 싶은 지 알려줘야 함
- `title.addEventListener("click")` : 누군가가 title을 click하는 것을 listen할 거임 → 무언가를 해줘야함
- 다양한 이벤트 확인 링크  : https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

---
### 4. CSS in JS

1. currentColor는 getter로써, 최근 color값을 복사하는 역할을 합니다. 그렇기에 의미론적으로 봤을 때 const로 선언하는 것이 적절합니다.
2. newColor는 setter로써, 변수에 대입된 색상값을 h1.style.color에 최종적으로 할당하는 역할을 합니다. 그리고 이것도 의미론적으로 봤을 때 값이 변경될 수 있다는 것을 염두에 두기 위해 let으로 선언하는 것이 적절합니다.
3. 다들 아시겠지만 프로그래밍언어에서 "="(equal) 표시는 오른쪽에 있는 값을 왼쪽에 대입한다는 뜻입니다. 이를 염두에 두시면 코드를 이해하는데 편하실 것 같습니다.
4. `참고` 함수 내에서 선언된 변수는 함수 밖에서는 존재하지 않음. 따라서 const currentColor로 변수 선언을 하더라도, 함수가 호출될 때 마다 새로운 값을 받을 수 있습니다.

|keyword|description|
|-------|-----------|
|className|모든 클래스를 교체|
|classList|class를 목록으로 작업할 수 있게끔 허용|
|remove|명시한 class name을 제거|
|add|명시한 class name을 추가|
|toggle|class name이 존재하는지 확인|

✔︎ toggle
- class name이 존재하면 toggle은 class name을 제거
- class name이 존재하지 않으면 toggle은 class name을 추가

