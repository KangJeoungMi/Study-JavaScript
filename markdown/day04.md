## JavaScript 4일차 학습

### 목차
 1. [class](https://github.com/KangJeoungMi/Study-JavaScript/blob/master/markdown/day04.md#1-class)
 2. [getter, setter](https://github.com/KangJeoungMi/Study-JavaScript/blob/master/markdown/day04.md#2-getter-setter)
 3. [static](https://github.com/KangJeoungMi/Study-JavaScript/blob/master/markdown/day04.md#3-static)
 4. [callback](https://github.com/KangJeoungMi/Study-JavaScript/blob/master/markdown/day04.md#4-callback)
----

### 1. class
- 클래스는 객체(Object)와 관련이 있다. 클래스는 객체를 생성하기 위한 템플릿이다.

> #### 클래스 기본 구조
    1. 생성자, 필드, 메서드로 이루어져 있다.
    2. 생성자는 constructor() 로 선언하고 Java와 같이 생성자 초기화 시 파라미터를 받을 수 있다.
    3. 필드는 생성자 내부에서 초기화를 해준다.
    4. 메서드는 일반적인 함수정의와 똑같다.

```javascript
class Person {
  constructor(name, age) {    // 필드
      this.name = name;
      this.age = age;
  }

  speak() {           // 메서드
      console.log(`${this.name}: Hello`);
  }
}
```

---
### 2. getter, setter
- Getter : 프로퍼티(객체의 속성) 값을 반환하는 메서드이다.
- Setter : 객체의 속성 값을 설정, 변경하는 메서드이다.\
```javascript
class User {
  constructor(firstname, lastname, age) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.age = age; // setter를 통한 값 설정
  }

  // 내부 프로퍼티를 _age로 변경
  get age() {
      return this._age;
  }

  set age(value) {
      this._age = value < 0 ? 0 : value;  // 내부 프로퍼티 _age를 조정
  }
}
```

#### 접근제어자
- private : #를 붙임
- public : 생성자없이 필드를 작성

```javascript
class Exper {
  publicField = 2;
  #privateField = 0;
}
```
---
### 3. static
- `static` 키워드를 붙히면 클래스 맴버가 된다.
- `static`은 ***클래스 이름***으로 접근해야한다
- 각 객체마다 만들어지지 않고공통으로 사용되는 데이터는 메서드에서 사용한다.
```javascript
class Article {
  static publisher = "JavaScript";

  constructor(articleNumber) {
      this.articleNumber = articleNumber;
  }

  static printPublish() {
      console.log(Article.publisher);
  }
}
```

#### 상속
- `extends`를 사용한다
```javascript
class Triangle extends Shape {
  getArea() {
      return (this.height * this.height) / 2;
  }
}
```
---
### 4. callback
- 파라미터로 함수를 전달하고 함수 내부에서 그 함수를 호출하는 것을 의미
- 나중에 호출될 의도로 전달되며 **비동기 작업** 을 처리하는데 자주 사용
```javascript
function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
}

function sayGoodbye() {
    console.log('Goodbye!');
}

greet('Alice', sayGoodbye);
```
- `greet` 함수가 `name`과 `callback`을 인수로 받아서 `name`을 출력한 후 `callback` 함수를 호출합니다. `greet` 함수가 호출될 때 `sayGoodbye` 함수가 콜백으로 전달되고, `greet` 함수가 실행된 후에 `sayGoodbye` 함수가 실행됩니다.

#### 비동기 작업에서의 콜백 함수
- 파일을 읽거나 HTTP요청을 보낼 때 사용
```javascript
function fetchData(callback) {
    setTimeout(function() {
        const data = { name: 'Alice', age: 25 };
        callback(data);
    }, 2000);
}

function processData(data) {
    console.log('Name:', data.name);
    console.log('Age:', data.age);
}

fetchData(processData);
```
- `fetchData` 함수는 2초 후에 데이터를 가져와서 `callback` 함수를 호출합니다. `fetchData`가 호출될 때 `processData` 함수가 콜백으로 전달되며, 데이터가 준비되면 `processData` 함수가 실행되어 데이터를 처리합니다.

#### 장점
1. 비동기 작업을 처리할 때 유용합니다
2. 코드의 재사용성을 높입니다
3. 프로그램의 프름을 제어할 수 있습니다

#### 단점
1. 콜백 지옥(Callback Hell)이라 불리는 복잡한 중첩 구조가 발생할 수 있습니다.
2. 코드 가독성이 떨어질 수 있습니다.

#### [동기, 비동기 더 알아보기](https://github.com/KangJeoungMi/Study-JavaScript/blob/master/markdown/day06.md#4-동기비동기)

---
