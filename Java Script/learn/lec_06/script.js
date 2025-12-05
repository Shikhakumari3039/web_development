// let newBtn = document.createElement("button");
// newBtn.innerText ="click me";
// newBtn.style.backgroundColor= "red";
// newBtn.style.color="white";

// document.querySelector("body").prepend(newBtn);

// let para =document.querySelector("p");

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("handler1");
//     let a=25;
//     a++;
//     console.log(a);
// };

// btn1.onclick =() => {
//     console.log("handler2");
//     let a=25;
//     a++;
//     console.log(a);
// };

// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("you are inside the div");
// };

// let btn1= document.querySelector("#btn1");
// btn1.onclick =(evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// };

// let div = document.querySelector("div");
// div.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// };

// let btn1= document.querySelector("#btn1");
// btn1.addEventListener("click", (evt) => {
//     console.log("button1 was clicked");
// });

// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked - handler2");
// });
// let div = document.querySelector("div");


// let modeBtn = document.querySelector("#mode");
// let body = document.querySelector("body");
// let currMode = "light";

// modeBtn.addEventListener("click", () => {
//     if(currMode ==="light") {
//         currMode ="dark";
//         body.classList.add("dark");
//         body.classList.remove("light");

//     } else{
//         currMode = "light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(currMode);
// });



// class ToyotaCar {
//     constructor(brand, mileage){
//         console.log("creating new object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
// }

// let fortuner = new ToyotaCar("fortuner", 10);
// console.log(fortuner);
// let lexus = new ToyotaCar("lexus", 12);
// console.log(lexus);


// class Parent {
//     hello(){
//         console.log("hello");
//     }
// }
// class Child extends Parent{}
// let obj = new Child();


class Person{
    constructor(){
        console.log("Enter parent constructor");
        this.species = "homo Sapienes";
    }
    eat(){
        console.log("eat");
    }
}
class Engineer extends Person{
    constructor(branch){
        console.log("Enter child constructor");
        super();
        this.branch = branch;
        console.log("exit child constructor");
    }
    work(){
        console.log("solve problems, build something");
    }
}
let engObj = new Engineer("chemical engg");