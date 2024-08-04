## JavaScript 로그인 폼 만들기 학습

### 목차
> 1. localStorage
> 2. 실행결과
----

### LocalStorage

- `localStorage` : 정보를 저장하고 불러오고 삭제하는 브러우저가 가지고 있는 작은 DB의 역할을 하는 API
    1. 없는 정보를 불려오려고 하면 널값을 받아옴
    2. 존재하는 정보를 불러오려고 하면 key에 해당하는 value값을 받아온다

|keyword|description|
|-------|-----------|
| localStorage.setItem(key, value);|로컬 저장소에 해당 키와 값을 저장함.|
|localStorage.getItem(key); |로컬 저장소에 해당 키에 해당되는 값을 불러옴.|
|localStorage.removeItem(key);|로컬 저장소에 해당 키에 해당되는 키, 값을 삭제함.|


- `Cookie`: 만료일자를 지정하게 되어 있어서 영구적이지 않습니다. 또한 용량 제한이 있습니다.

- `Web storage`: 크게 Local storage 와 Session storage 가 있습니다.
    1. `Local storage`: 저장한 데이터를 직접 지우지 않는 한 데이터가 영구적으로 저장됩니다.
    2. `Session storage`: 브라우저 종료 시 데이터가 사라집니다.


### 실행결과
![img_1.png](/images/Login/img01.png)
![img_2.png](/images/Login/img02.png)
 - 아무것도 입력하기 전 key와 value 값이 없는것을 확인 할 수 있다

![img_3.png](/images/Login/img03.png)
- 값을 입력한 후 Log In 버튼을 클릭하여 전송해준다
![img_4.png](/images/Login/img04.png)
![img_5.png](/images/Login/img05.png)
- 전송하는 폼이 사라지고 로그인이 되었다는 문구와 key와 value 값이 전송 된 것을 확인 할 수 있다