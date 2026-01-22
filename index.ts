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


// let delaycall = (fn:()=>void)=>{
//   setTimeout(fn,1000)
// }

// delaycall(function(){
//   console.log('hello')
// })






//  interface user{
//   name:string,
//   rollno:number,
//   age:number
//  }
// function islegal(User:user):boolean{
//   if(User.age>18) {
//     return true
//   } else {
//     return false;
//   }
// }

// let User = {
//   name:"aryan",
//   rollno:1,
//   age:21
// }
//  const ans = islegal(User);



// interface people{
//   name:string;
//   age:number;
//   greet: () =>string;
// }
// const person: people ={
//   name:"Aryan",
//   age:21,
//   greet: function (){
//     return (`Hello my name is ${this.name} and my age is ${this.age}`) }
  
// };
// console.log(person.greet());


// interface people {
//   name:string;
//   age: number;
// }
// class Manager implements people{
//   name:string;
//   age:number;

//   constructor(name: string , age:number){
//     this.name = name;
//     this.age =age;
//   }
// }
// let user = new Manager("aryan",21);
// console.log(user.age)


 //abstract class
abstract class USer {
  name :string;
  constructor(name: string){
    this.name = name;
  }
  abstract greet : () => string;
}


//types


type User = {
  name:string;
  age:number
}
