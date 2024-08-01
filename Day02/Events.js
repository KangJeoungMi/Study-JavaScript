// - eventListener : event를 listen함 → js에게 무슨 event를 listen하고 싶은 지 알려줘야 함
// - title.addEventListener("click") : 누군가가 title을 click하는 것을 listen할 거임 → 무언가를 해줘야함

const Events = document.querySelector("div.hello:first-child h1");

// console.dir(Events); // 속성 확인 dir

function handleTitleClick(){
    // console.log("hello is Click!!");
    Events.style.color="blue";
}
function handleMouseEnter() {
    Events.innerText = "mouse is here!";
}
function handleMouseLeave() {
    Events.innerText = "mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!")
}

function handleWindowOffline() {
    alert('SOS No WIFI');
    console.log('NO WIFI')
    }
    
    function handleWindowOnline() {
    alert('ALL GOOD')
    console.log('GOOD WIFI')
    }

Events.onclick =  handleTitleClick;
Events.addEventListener("mouseenter", handleMouseEnter);
Events.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);