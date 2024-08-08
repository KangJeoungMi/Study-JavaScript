## JavaScript 투두리스트 만들기 학습

### 1. HTML 
``` html
<form id="todo-form">
        <input type="text" placeholder="Write a To Do and Press Enter" required />
</form>
<ul id="todo-list"></ul>
```
- `input`태그에서 폼데이터가 서버로 제출되기 전 반드시 채워져 있어야 하는 입력 필드를 명시하기위해 `required`속성을 넣는다

### 2. 리스트 전송
- `event.preventDefault();` :  특정 이벤트의 기본 동작(예: 폼 제출, 링크 이동, 키 입력)을 방지하기 위해 사용
    - 이 메소드는 이벤트 핸들러에서 호출되며, 그 이벤트에 대한 기본 동작을 중단
    - 주로 사용자의 의도와 상관없이 자동으로 발생하는 기본 동작을 막고, 대신 개발자가 정의한 동작을 수행하도록 할 때 유용

```javaScript
function paintToDo(newTodo) { // 텍스트가 들어갈 매개변수 설정
	const li = document.createElement("li"); // li 태그 생성
	const span = document.createElement("span"); // span 태그 생성
	li.appendChild(span); // li 태그 안에 자식요소로 span 태그 넣기
	span.innerText = newTodo; // span 태그 안에 input 값 넣기
	toDoList.appenChild(li); // ul 태그에 위에서 만든 li 넣어주기
}

//  li 를 만들고 span 을 만들고, li 안에 span 을 자식요소로 넣고, 그 span 안에 텍스트를 넣어준다. 텍스트는 아래 input 에서 받는다.

function handleToDoSubmit(event) {
	event.preventDefault(); 
	const newTodo = toDoInput.value; 
	toDoInput.value = ""; 
	paintToDo(newTodo); // 위 함수로 input 값을 보낸다.
}
```

### 3. 삭제 버튼 추가
- `document.creatElement("button");` : button 태그 생성
- `event.target.parentElement;` : 삭제 함수 만들어서 `target`의 부모요소 선택
- `.remove();` : 지우기

```javaScript
function paintToDo(newTodo) { 
	const li = document.createElement("li"); 
	const span = document.createElement("span"); 
	span.innerText = newTodo;  // span 먼저 넣어주고
	const button = document.creatElement("button"); // button 태그 생성
	button.innerText = "X"; // 그 아래 버튼 생성하세 넣어주고
    button.addEventListener("click", deleteToDo); // 클릭시 제거 함수 실행
	li.appendChild(span);  // 각각 li 안에 넣어주고
	li.appendChild(button);
	toDoList.appenChild(li);  // li 를 ul 에 넣어준다!
}
function deleteToDo(event) { 
	const li = event.target.parentElement;  
  	// 클릭한 button 의 부모 요소인 li 선택
	li.remove(); // li 지우기
}
```

### 3. 입력값 배열에 넣어 localStorage 저장
- `localStorage` :  생성 또는 삭제를 한 후 **새로고침**하면 내용이 사라진다. 이를 해결하기 위해 `브라우저저장소`에 입력한 데이터를 저장한다
- `JSON.stringify()` : 저장되는 데이터를 배열 형태로 만들기 위함

```javaScript
//빈 배열을 만들고
const toDos = [];

function saveToDos() {
	localStorage.setItem("todos", toDos)
    // setItme 이 넣어주는 것, "todos" 는 데이터의 이름, 객체의 key 값과 비슷
}

//값이 입력될 때 그 값을 배열에 넣는다.
function handleToDoSubmit(event) {
	event.preventDefault(); 
	const newTodo = toDoInput.value; 
	toDoInput.value = ""; 
	toDos.push(newTodo);  // 아래 실행하기 전에 배열에 값이 들어가 있는 상태
	paintToDo(newTodo); 
	saveToDos(); // 이렇게 실행 코드 넣어준다!, 어레이를 로컬스토리지에 넣는 일
}
function saveToDos() {
	localStorage.setItem("todos", JSON.stringify(toDos));
}
```

### 4. localStorage에 저장된 값 불러오기
- `localStorage.getItem()` : 저장된 값 불러오기
- `JSON.parse()` : 문자열의 값을 배열로 가져오는 방법

```javaScript
const TODOS_KEY = "todos" // 로컬스토리지에 저장된 데이터의 키값

const savedToDos = localStorage.getItem(TODOS_KEY);
let toDos = [];

if (savedToDos !== null) { // 비어있지 않다면,  
	const parsedToDos = JSON.parse(savedToDos); 
	toDos = parsedToDos // 추가한 코드, 기존에 작성된 값을 배열에 추가
	parsedToDos.forEach(paintToDo); 
}
```

### 5. 입력하는 toDo 에 id 값을 주어 localStorage 에서 선택하고 지우기
-  ToDos 배열에 저장, localStorage 배열에 복사해두는 곳
```javascript
function handleToDoSubmit(event) {
	event.preventDefault(); 
	const newTodo = toDoInput.value; 
	toDoInput.value = ""; 
	const newTodoObj = { // 객체를 선언하고 할당한다.
		text: newTodo, // 객체 안의 value 로 값을 받고
		id: Date.now(), // id의 value 로 랜덤 번호를 받는다.
	}
	toDos.push(newTodoObj); // 그렇게 받은 객체를 배열에 담는다.   
	paintToDo(newTodoObj); // 객체를 그리는 함수로 전달한다.
	saveToDos(); // 배열로 전달된 객체를 로컬스토리지에 담는다.
}

function paintToDo(newTodo) { 
	const li = document.createElement("li"); 
	li.id = newTodo.id; // li 에 입력값에 붙는 Id 숫자 값을 넣어준다.
	const span = document.createElement("span"); 
	span.innerText = newTodo.text; // 객체 안의 key 값으로 호출해야 함
	const button = document.creatElement("button");
	button.innerText = "X";
	button.addEventListener("click", deleteToDo); 
	li.appendChild(span);  
	li.appendChild(button);
	toDoList.appenChild(li); 
}
```

### 6. id 값을 배열 메소드인 filter 로 확인하고 해당 요소를 제외
```javascript
function deleteToDo(event) { 
	const li = event.target.parentElement;  
	li.remove(); 
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); 
    // 입력되는 값의 id 와 li 의 id가 다른 것만 남긴다. 같으면 배열에서 제외한다.
	saveToDos()
  	// 지우고 남은 배열을 로컬스토리지에 담아준다.
}
```