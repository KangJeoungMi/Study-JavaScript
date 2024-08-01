// 1. currentColor는 getter로써, 최근 color값을 복사하는 역할을 합니다. 그렇기에 의미론적으로 봤을 때 const로 선언하는 것이 적절합니다.
// 2. newColor는 setter로써, 변수에 대입된 색상값을 h1.style.color에 최종적으로 할당하는 역할을 합니다. 그리고 이것도 의미론적으로 봤을 때 값이 변경될 수 있다는 것을 염두에 두기 위해 let으로 선언하는 것이 적절합니다.
// 3. 다들 아시겠지만 프로그래밍언어에서 "="(equal) 표시는 오른쪽에 있는 값을 왼쪽에 대입한다는 뜻입니다. 이를 염두에 두시면 코드를 이해하는데 편하실 것 같습니다.
// 4. (참고) 함수 내에서 선언된 변수는 함수 밖에서는 존재하지 않습니다. 그렇기 때문에 const currentColor로 변수 선언을 하더라도, 함수가 호출될 때 마다 새로운 값을 받을 수 있습니다.


const CssEvent = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const currentcolor = CssEvent.style.color;
    let newColor;
    if(currentcolor === "tomato"){
        newColor = "yellow"
    }else {
        newColor = "tomato"
    }
    CssEvent.style.color = newColor;
}

// CssEvent.addEventListener("click", handleTitleClick);

// 1) click event 발생 및 함수 실행
// 2) currentColor 변수 선언 후 h1.style.color 값 복사 (getter)
// 3) newColor 변수 선언
// 4) currentColor 현재 값 확인
// 5) 조건에 따라 newColor에 "tomato" or "blue" 값 대입
// 6) 마지막으로 h1.style.color에 newColor값 대입 (setter)

function handlesStyleClick() {
    const ClickClass = "active"
    if (CssEvent.className === ClickClass) {
        CssEvent.className = "";
    }else{
        CssEvent.className = ClickClass;
    }
}

// CssEvent.addEventListener("click", handlesStyleClick);

// 1) HTML파일은 CSS문서와 JS문서를 임포트 하고있음.
// 2) CSS에 .active라는 class를 생성해주고
// 3) addEventListener로 h1을 클릭하면 handleTitleClick 함수가 작동
// 4) handleTitleClick 함수는 h1의 class name을 "active" 로 바꿈
// 5) .active의 color는 토마토색이기 때문에 토마토 색이 됨

function handlesListClick() {
    const ClickedClass = "active"
    if (CssEvent.classList.contains(ClickedClass)) {
        CssEvent.classList.remove(ClickedClass);
    }else{
        CssEvent.classList.add(ClickedClass);
    }
}

CssEvent.addEventListener("click", handlesListClick);

// className = 모든 클래스를 교체
// classList = class를 목록으로 작업할 수 있게끔 허용
// remove : 명시한 class name을 제거하고
// add : 명시한 class name을 추가해.
// function handleTitleClick() {
//  toggle : class name이 존재하는지 확인한다.
// class name이 존재하면 toggle은 class name을 제거하고, \
// class name이 존재하지 않으면 toggle은 class name을 추가한다.
// function handleTitleClick() {
// h1.classList.toggle("clicked");
// }
// 한번만 적기 때문에 const도 필요 없다. toggle은 버튼같은거다. 켜고끄고.