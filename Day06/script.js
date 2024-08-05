// // AJAX
// const ajax = new XMLHttpRequest();
// ajax.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
// ajax.onreadystatechange = function() {
//   if(ajax.readyState === 4 && ajax.status === 200) {
//     console.log(ajax.responseText);
//   }
// };
// ajax.send();
// //------------------------------------
// // JSON
// const jsonString = '{"name" : "Alice","age" : 25 }'
// const jsonObject = JSON.parse(jsonString);  // 문자열을 객체로 변환
// console.log(jsonObject.name); // "Alice"

// const newJsonString = JSON.stringify(jsonObject);  //객체를 문자열로 변환
// console.log(newJsonString); //'{"name" : "Alice","age" : 25 }'
// //------------------------------------
// // 에외처리
// try {
//   let result = riskyOperation();
//   console.log(result);
// } catch (error) {
//   console.error('An error occurred:', error.message);
// } finally {
//   console.log('This will always run, regardless of whether an error occurred or not.');
// }

// function riskyOperation() {
//   throw new Error('Something went wrong!');
// }
// //------------------------------------
// // 동기/비동기

// // 동기 예제
// function syncFunction() {
//     console.log('First');
//     console.log('Second');
//     console.log('Third');
// }
// syncFunction();

// // 비동기 예제
// function asyncFunction() {
//     console.log('First');
//     setTimeout(() => console.log('Second'), 1000);
//     console.log('Third');
// }
// asyncFunction();

// //------------------------------------
// // fetch

// get
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

// post


fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
  })
})
  .then(response => response.json())
  .then(data => {
      console.log(data);
  })
  .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
  });
