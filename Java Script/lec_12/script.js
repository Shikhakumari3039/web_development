// console.log("one");
// console.log("two");


// // function hello(){
// //     console.log("hello");
// // }
// setTimeout( () => {
//     console.log("hello");
// }, 4000);
// console.log("three");
// console.log("four");

// function sum(a, b) {
//     console.log(a+b);
// }
// function calculator(a, b, sumCallback){
//     sumCallback(a,b);
// }
// calculator(1,2,(a,b) =>{
//     console.log(a+b);
// });


//promises
// let promise = new Promise((resolve, reject) => {
//     console.log("Iam a Shikha Kumari");
//     reject("some error");
// });

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log ("I am a Promise");
//         resolve("success");
//         // reject("error");
//     });
// }
// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);
// });
// promise.catch((err) => {
//     console.log("rejected", err);
// });

// function asyncFunc1(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some Data1");
//             resolve("success");
//         }, 4000);
//     });
// }
// function asyncFunc2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some Data2");
//             resolve("success");
//         }, 4000);
//     });
// }
// console.log("fetching data1");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
//     console.log("fetching data2 ");
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         console.log(res);
//     });
// });


// function getData(dataId, getNextData){
//    return new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         console.log("data", dataId);
//         resolve("success");
//         if(getNextData){
//             getNextData();
//         }
//     }, 5000);
//    });
// }

// function getData(dataId, getNextData){
//    return new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         console.log("data", dataId);
//         resolve("success");
//     }, 5000);
//    });
// }

// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve(200);
//         }, 2000);
//     });
// }

// //Async-await
// async function getAllData(){
//     console.log("getting data1");
//     await getData(1);
//     console.log("getting data2");
//     await getData(2);
//     console.log("getting data3");
//     await getData(3);
//     console.log("getting data4");
//     await getData(4);
//     console.log("getting data5");
//     await getData(5);
// }

// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         }, 2000);
//     });
// }
// async function getWeatherData() {
//     await api();
//     await api();
// }
// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 2000);
//     });
// }

//promise chain

// getData(1).then((res) => {
//     console.log(res);
//     getData(1).then((res) => {
//         console.log(res);
//     });
// });

// getData(1)
//     .then((res) => {
//     return getData(2);
//     })
//     .then((res) => {
//     return getData(3);
//     })
//     .then((res) => {
//         console.log(res);
//     });

//callback hell
// getData(1, () =>{
//     getData(2, () =>{
//         getData(3, () =>{
//             getData(4)
//         });
//     });
// });


