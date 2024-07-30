// 함수 : 계속 반복해서 사용할 수 있는 코드 조각

function sayHello(nameOfPerson, age){
    console.log("My name is " + nameOfPerson + " and My age is " + age);
}

sayHello("A", 10);
sayHello("B", 20);
sayHello("C", 30);

function plus(a,b){
    console.log(a+b);
}
plus(); // NaN(Not a Number)
plus(8, 60);

function divide(a, b){
    console.log(a / b);
}
divide(60, 3);

const helloPeople = {
    name: "lily",
    sayHello:function (otherPersonName){
        console.log("Hello! " + otherPersonName);
    }
};

console.log(helloPeople.name);
helloPeople.sayHello("A");
