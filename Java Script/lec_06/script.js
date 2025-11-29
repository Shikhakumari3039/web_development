// let newBtn = document.createElement("button");
// newBtn.innerText ="click me";
// newBtn.style.backgroundColor= "red";
// newBtn.style.color="white";

// document.querySelector("body").prepend(newBtn);

// let para =document.querySelector("p");

let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("handler1");
    let a=25;
    a++;
    console.log(a);
};

btn1.onclick =() => {
    console.log("handler2");
    let a=25;
    a++;
    console.log(a);
};

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("you are inside the div");
};
