## JavaScript 날씨 만들기 학습

### 목차
1. geolocation
2. 날씨 API
3. fetch
4. 실행결과
----
### 1. geolocation
- 사용자의 실제 위치를 브라우저에게 요청
- 환경에 따라 GPS를 비롯한 Wi-Fi, 휴대전화의 기지국, IP 주소 등에서 위치 정보를 알아낸다.
- **비동기적**으로 동작한다
```javaScript
    navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
    function onGeoOK(position){
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log("you live in ", lat, lon);
    }
    // 콘솔 결과 : you live in  35.1403625 129.1081957
```
> 객체 주요속성

|keyword|description|
|-------|-----------|
|coords.latitude|고도|
| coords.latitude|위도|
|coords.longitude|경도 |
|coords.accuracy|위도/경도의 오차(m) |
|coords.altitudeAccuracy|고도의 오차(m) |
|coords.heading|방위(도) |
|coords.speed|속도(m/초) |
|timestamp|취득 날짜 (1970년부터 경과 밀리초) |

---
### 2. 날씨 API

1. [날씨 API 링크](https://openweathermap.org/api)
2. 회원가입 후 **Current weather data** `Api doc`버튼 클릭
3. `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}` 링크로 현재 날씨와 온도확인 가능
4. {API key} : 마이페이지 -> API keys -> kEY복사
5. 위도(lat)와 경도(lon) API KEY입력
6. [현재 날씨](https://api.openweathermap.org/data/2.5/weather?lat=35.1403625&lon=129.1081957&appid=0943f67d2c079ef943eb76b9038779b8)

![img01_png](/images/weather/img01.png)

---
### 3. fetch
> API를 통해 비동기적으로 데이터를 가져오고, Promise 체인을 통해 응답을 처리
```javaScript
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp} / `;
});
```
1. `fetch(url)`
    - `fetch` : 네트워크를 통해 리소스를 가져오기 위해 사용됨
    - `promise`를 반환하여 `then`메서드를 사용하여 **비동기** 작업을 처리

2. `.then((response) => response.json())`
    - `fetch`가 반환한 `Promise` 객체가 성공적으로 완료되면 첫 번째 `then` 메서드가 호출. 이 메서드는 서버로부터의 응답 객체(`response`)를 인자로 받습니다.
    - `response.json()`은 응답 객체의 본문을 **JSON 형식**으로 파싱하여 또 다른 `Promise`를 반환. 이 `Promise`가 해결되면 다음 `then` 블록이 호출.
3. `.then((data) => { ... })`
    - 두 번째 `then` 메서드는 JSON으로 파싱된 데이터를 인자로 받습니다. 여기서 `data`는 서버로부터 받아온 JSON 객체입니다.
    - 이 블록 내에서 HTML 문서의 특정 요소를 선택하고, 데이터를 이용해 이 요소들의 내용을 업데이트합니다.
4. `city.innerText = data.name;`
    - data.name은 서버로부터 받아온 데이터 객체에서 도시 이름을 나타내는 속성. 이를 city 요소의 텍스트 내용으로 설정
5. `weather.innerText = ${data.weather[0].main} / ${data.main.temp} / ;`
    - data.weather[0].main과 data.main.temp는 각각 날씨 상태와 온도를 나타낸다. 이 정보를 weather 요소의 텍스트 내용으로 설정.
    - 백틱(```)을 사용하여 문자열 템플릿을 작성하고, 이 템플릿에 날씨 상태와 온도를 삽입

    |keyword|description|
    |-------|-----------|
    |`name`| 도시 이름|
    |`weather`| 날씨 정보를 담고 있는 배열|
    |`main`| 주요 기상 정보를 담고 있는 객체|


[promise 함수](https://github.com/KangJeoungMi/Study-JavaScript/blob/master/markdown/day06.md#5-fetch)

[참고자료](https://frogand.tistory.com/207)
---
### 4. 실행결과
![img02_png](/images/weather/img02.png)

