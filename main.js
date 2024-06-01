"use strict";
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
let wahidOrder = {
    food: "Biryani",
};
let tahaOrder = {
    food: "burger",
    drink: "cocacola"
};
// stale obj case
let wahidTable = tahaOrder;
//fresh object case giva an eror when we add properties
let wahidTableFresh = {
    food: "Biryani",
    drink: "cocacola,"
};
let tahaTable = tahaOrder;
