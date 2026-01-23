"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello = 'hello world';
console.log(hello);
// let hello=(name : string)=>{
//   console.log('hello',name)
// }
// hello('aryan');
// let sum = (a:number,b:number)=>{
//   return a+b;
// }
//  let ans = sum(3,5);
//  console.log(ans);
// let legal= (age:number)=>{
//   if(18<age){
//     return true;
//   }else{
//     return false; 
//   }
// }
// console.log(legal(28))
let delaycall = (fn) => {
    setTimeout(fn, 1000);
};
delaycall(function () {
    console.log('hello');
});
//# sourceMappingURL=index.js.map

// interface Admin {
//   name :string;
//   permission:string;
// }

// interface User{
//   name :string;
//   age:number;
// }

// type UserorAdmin =User |Admin

// function greet (user:UserorAdmin){
//   console.log(user.name)
// }
//array
number[]
