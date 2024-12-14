"use strict";

// "//foreach custom"
var number = [1, 2, 3, 4, 5, 6, 3];
var number1 = [2, 4, 6, 8, 10, 12, 13]; // function customForeach(callback,array){
//     for(let a=0;a<array.length;a++){
//           callback(array[a],a)
//     }
// }
// customForeach((element,index)=>{console.log(index);},number)

"map custom"; // function customMap(callback,array){
//     let map=[]
//     for(let a=0;a<array.length;a++){
//         map.push(callback(array[a],a))
//     }
//     return map
// }
// let total=customMap((el,index)=>{return el%2===0},number)
// console.log(total);

"filter custom"; // function customFilter(callback,array) {
//     let filter=[]
//     for (let a = 0; a < array.length; a++) {
//        if (callback(array[a])) {
//         filter.push(array[a])
//        }
// }
//  return filter
//     }
// let alfa=customFilter((el)=>{return el%2===0},number)
// console.log(alfa);
// find Custom
// function customfind(callback, array) {
//   for (let a = 0; a < array.length; a++) {
//     if (callback(array[a])) {
//       return array[a];
//     }
//   }
//   return undefined;
// }
// let alfa = customfind((el) => el % 3 === 0, number);
// console.log(alfa);
// some custom
// function customSome(callback,array){
//     for (let a = 0; a < array.length; a++) {
//         if (callback(array[a])) {
//             return true
//         }
//     } 
//     return false
// }
// let zetta=customSome((el)=>el===7,number);
// console.log(zetta);
// every custom
// function customEvery(callback,array){
//     for (let a = 0; a < array.length; a++) {
//         if(!callback(array[a])){
//             return false
//         }
//     }
//     return true
// }
// let every=customEvery((el)=>el%2===0,number1)
// console.log(every);

var str = ['salam', 'necesen']; // reduce custom
// function customReduce(callback,array,initialValue){
//     let accumulyator
//     if (initialValue===undefined) {
//         accumulyator=0
//     }else{
//         accumulyator=initialValue
//     }
//     for (let a = 0; a < array.length; a++) {
//       accumulyator= callback(accumulyator,array[a])
//       }
//     return accumulyator    
// }
// let alfa=customReduce((a,b)=>a+' '+b,str,'')
// console.log(alfa);
//flatmap custom
// function flatMap(callback,array){
//     let arr=[]
//     for (let a = 0; a < array.length; a++) {
//        let snapArray=callback(array[a])
//        for (let b = 0; b < snapArray.length; b++) {
//         arr.push(snapArray[b])
//        }
//     }
//     return arr
// }

var betta = flatMap(function (x) {
  return [x, x * 2];
}, number);
console.log(betta);