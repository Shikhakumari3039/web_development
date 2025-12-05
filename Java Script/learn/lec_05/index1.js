// const product = {
//     title: "Ball Pen", 
//     rating: 4,
//     offer: 5,
//     price:270
// };
// console.log(product);


// const profile ={
//     username: "Shikha Kumari",
//     isFollower:123,
//     isFollowing:123,
//     isFollow:false
// };
// console.log(profile);


// this code print hello world 

// console.log("hello World");

//Arithmetic Operations

// let a=5;
// let b=2;
// console.log("a = ", a, "& b = ", b);
// console.log("a+b = ", a+b);
// console.log("a-b = ", a-b);
// console.log("a*b = ", a*b);
// console.log("a/b = ", a/b);
// console.log("a%b = ", a%b);
// console.log("a**b = ", a**b);

//Unary Operator

// let a=5;
// let b=2;
// console.log("a = ", a, "& b = ", b);
// console.log("a =", a);           //5

//increment
// console.log("++a = ", ++a);   // 7
// console.log("a++ = ", a++);   //6
// console.log("a =", a);           //5

//decrement
// console.log("a-- = ", a--);      //5
// console.log("a =", a);           //4

//Assignment Operator

// let a =5;
// let b= 2;
// a += 4;        //a=a+4
// console.log("a = ", a);    //9

//comparison Operator
// let a =5;
// let b= 2;
// console.log("5 == 5", a == b)   //false

//logical operator
// let a =6;
// let b= 2;
// let cond1 = a > b;      //true
// let cond2 = a ===6;     //true
// console.log("cond1 && cond2 =", cond1 && cond2);    //true

//conditional statement

// let mode = "dark";
// let color;
// if(mode ==="dark"){
//     color= "black";
// }else{
//     color = "white";
// }
// console.log(color);

// let age= 36;
// if(age >= 18){
//     console.log("You can vote");
// }
// if(age < 18){
//     console.log("You cannot vote");
// }

// let num= 5;
// if(num % 2 === 0){
//     console.log(num, "Even");
// }
// else{
//     console.log(num, "Odd");
// }

// let mode = "light";
// let color;
// if(mode ==="dark"){
//     color= "black";
// }
// else if(mode ==="dark"){
//     color= "blue";
// }
// else{
//     color = "white";
// }
// console.log(color);

//ternary operator

// let age=16;
// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);
//OR
// let result = age >= 18 ? console.log ("adult") : console.log ("not adult");

// let num =prompt("Enter a number");
// if(num % 5 ==0){
//     console.log(num, "num is multiple of 5");
// }
// else{
//     console.log(num, "num is not multiple of 5");
// }

// let grade= prompt("Enter the score");
// if(grade >=100){
//     console.log("A");
// }
// else if(grade >=80){
//     console.log("B");
// }
// else if(grade >=60){
//     console.log("C");
// }
// else if(grade >= 50){
//     console.log("D");
// }
// else{
//     console.log("F");
// }



// for loop

// console.log("Apna College");

// for(let count=1; count<=5; count++){
//     console.log("Apna College");
// }

//Calculate sum of 1 to 5
// let sum =0;
// let n=100;
// for (let i=1; i<=n; i++){
//     sum =sum +i;
// }
// console.log("sum=", sum);
// console.log("loop has ended");

//print 
// for(let i=1; i<=5; i++){
//     console.log("i= ",i);
// }
// console.log(i);

//infinite loop

//while loop

// let i=1;
// while(i<=5){
//     console.log("apna College");
//     i++;
// }

//do while loop
// let i=20;
// do{
//     console.log("apna College");
//     i++;
// } while(i<=5);


// //for-of loop
// let str= "Apna college";
// let size =0;
// for(let i of str){
//     console.log("i=", i);
//     size++;
// }
// console.log("string size =", size);

//for-in loop
// let student= {
//     name: "Rahul Kumar",
//     age: 20,
//     cgpa: 7.5,
//     isPass: true
// };
// for(let key in student){
//     console.log("key=", key, "value=", student[key]); 
// }

//print even number
// for(let i=0; i<=100; i++){
//     if(i%2===0){
//         console.log("i=", i);
//     }
// }

// let gameNum=28;
// let userNum = prompt("Guess the game number:");

// while(userNum != gameNum){
//     userNum = prompt("You entered wrong number, Guess again");
// }
// console.log("congratulation, you entered the right number");

//String
// let str= "ApnaCollege";
// console.log(str[8]);

// let obj= {
//     item: "pen",
//     price: 10
// };
// let output=`the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// //ya
// console.log("The cost of", obj.item, "is", obj.price, "rupees");

//template literal
// let specialString = `This is a template literal ${1+2+3}`;
// console.log(typeof specialString);

// let str=("Apna \tCollege");
// console.log(str.length);

//strig methods
//let str= "    Apna   College  JS   ";
//str = str.toUpperCase();
// str= str.toLowerCase();
//console.log(str);
//console.log(str.trim());

// let str ="hello";
// console.log(str.slice(0, 3));

// let str1 ="Apna";
// let str2 = "College";
// let res= str1.concat(str2);  ya
// let res = str1 +str2;
// console.log(res);

// let str1 ="Apna";
// console.log(str1.replace("A", "y"));


// let fullName= prompt("Enter your fullname without space");
// let username = "@" + fullName + fullName.length;
// console.log(username);

//Array
// let marks =[ 97, 67, 89, 45, 28];
// console.log(marks);
// console.log(marks.length);

//for loop
//let marks =[ 97, 67, 89, 45, 28];
// for(let idx =0; idx< marks.length; idx++){  //idx means index
//     console.log(marks[idx]);
// }

//for-of loop
// for(let mark of marks){  //idx means index
//     console.log(mark);
// }

//sum of marks
// let marks = [85,97, 44, 37, 76, 60];
// let sum =0;
// for(let val of marks){
//     sum +=val;
// }
// let avg =sum/marks.length;
// console.log(`avg marks of the class = ${avg}`);


// let items =[ 250, 645, 300, 900, 50];
// let i =0;
//for-of loop
// for(let val of items){
//     console.log(`value at index ${i}=${val}`);
//     let offer =val/10;
//     items[i]= items[i]-offer;
//     console.log(`value after offre = ${items[i]}`);
//     i++;
// }

//for loop
// let items =[ 250, 645, 300, 900, 50];
// for(i=0; i<items.length; i++){
//     let offer =items[i]/10;
//     items[i]= items[i]-offer;
// }
// console.log(items);

//array methods
// let foodItems= ["potato", "lichi", "apple", "tomato"];
//foodItems.push("chips", "burger", "paneer");

// console.log(foodItems);
// let deletedItem =foodItems.pop();
// console.log(foodItems);
// console.log("deleted", deletedItem);

// console.log(foodItems);
// console.log(foodItems.toString());
// console.log(foodItems);

// let fruitsItems= ["mango", "papaya", "coconut"];
// let items= foodItems.concat(fruitsItems);
// console.log(items);

// let fruitsItems= ["mango", "papaya", "coconut"];
// let val= fruitsItems.shift();
// console.log("deleted", val);

// let fruitsItems= ["mango", "papaya", "coconut"];
// console.log(fruitsItems);
// console.log(fruitsItems.slice());

// let arr =[1, 2, 3, 4, 5, 6, 7];

//arr.splice(2, 2, 101, 102);

//add Element
// arr.splice(2, 0, 101);

//Deleted Elemet
// arr.splice(3,1);

//Replace Element
// arr.splice(3, 1, 101);



// Function

// function myFunction(msg, n){
//     //parameter ->input
//     console.log(msg*n);  
// }
// myFunction("I love java", 100);      //argument
//output === Nan means Not a number

// function sum(a, b){
//     s = a +b;
//     console.log(a);
//     return s;
   
// }
// let val = sum(3,4);
// console.log(a);
// console.log(val);

//arrow function

//sum
// function sum(a, b){
//     return a+b;
// } 
//  // ya
// const arrowSum = (a, b) =>{
//     console.log(a+b);
// };

// //multiplication
// function mul(a, b){
//     return a*b;
// }
// //ya
// const arrowmul = (a, b) =>{
//     console.log(a*b);
// };

// let arrowMul = (a,b) => {
//     return a*b;
// };
// const printHello = () => {
//     console.log("hello");
// };

// function countVowels(str){
//     let count =0;
//     for(const char of str){
//         if(char=== "a" || char=== "e" || char=== "i" || char=== "o" || char=== "u"){
//             count++;
//         }
//     }
//     return count;
// }

// function abc(){
//     console.log("hello");
// }
// function myFunc(abc){
//     return abc;
// }

// let arr =[1,2,3,4,5];
// arr.forEach(function printVal(val){
//     console.log(val);
// });

//ya
// let arr =[1,2,3,4,5];
// arr.forEach((val, idx) => {
//     console.log(val.toUpperCase(), idx);
// });

// let arr =[1,2,3,4];
// arr.forEach((arr) => {
//     console.log(arr*arr);
// });

//ya
// let nums =[67, 52,39];
// let calSquare = (nums) => {
//     console.log(nums*nums);
// };
// nums.forEach(calSquare);

// let nums =[67, 52,39];
// let newArr = nums.map ((val) => {
//     return val*2;
// });
// console.log(newArr);

// let arr=[1,2,3,4,5,6,7];
// let evenArr =arr.filter((val) => {
//     return val %2 ===0;
// });
// console.log(evenArr); 

//Reduce
// let arr=[1,2,3,4];
// const output = arr.reduce((prev, curr) => {
//     return prev + curr;
// });
// console.log(output);


// let n = prompt("Enter the number: ");
// let arr =[];
// for (let i= 1; i<=n; i++){
//     arr[i-1] =i;
// }
// console.log(arr);
// let sum =arr.reduce((res, curr) => {
//     return res+curr;
// });

// console.log("sum =", sum);
// let factorial =arr.reduce((res, curr) => {
//     return res*curr;
// });