// // null is used when we want to empty an answer intentially ,
// function divide(a:number,b:number){
//     let ans = 0
//     ans = a/b
//     if (b==0)
//         return null
//     return ans
// }
// let a = divide(10,0)
// if (a!=null)
//     console.log(a)
// else
// console.log("invalid operation")


// // narrowing in typescript
// let pass:string|number;
// pass="talha"
// console.log(pass.toUpperCase())
// pass=123
// console.log(pass.toFixed())

//this is using as if else

// console.log(Math.random()>0.6?"khan":60)

// another example


// let newage = Math.random()>0.6?"khan":60
// console.log(newage)
// if (typeof newage==="number"){
//     console.log(newage.toFixed())
// }
// else{
//    console.log( newage.toUpperCase())
// }
// type alia's we alredy studied now we use interface both are similar

// interface
//  type Person ={
//     name:string;
//  }
//  interface IPerson{
//     name:string
//  }
//  let Person:Person;
//  Person={
//     name:"malinga"
//  }
//example of interface'
interface Deal1 {
    food: string
}
interface Deal2 {
    food: string
    drink: string
}
let wahidOrder: Deal1 = {
    food: "Biryani",
};
let tahaOrder: Deal2 = {
    food: "burger",
    drink: "cocacola"
};
// stale obj case
let wahidTable: Deal1 = tahaOrder

//fresh object case giva an eror when we add properties
let wahidTableFresh: Deal1 = {
    food: "Biryani",
    drink:"cocacola,"
}
let tahaTable: Deal2 = tahaOrder

