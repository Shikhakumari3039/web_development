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

function getDat(dataId, getNextData){
    setTimeout( () => {
        console.log("data", dataId);
        if(getNextData){
            getNextData();

        }
    }, 2000);
}

getData(1, () =>{
    getData(2, () =>{
        getData(3);
    });
});


