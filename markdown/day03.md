## JavaScript 로그인 폼 만들기 학습

### 목차
 1. class
 2. getter, setter
 3. static
 4. callback
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
- `static`은 <span style="background-color:#fff5b1">클래스 이름</span>으로 접근해야한다
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

---