let number=[1,2,3,4,5,6]
// function Foreach(callback,array){
// for (let a = 0; a < array.length; a++) {
    
//     callback(array[a],a,array);
// }

// }
// Foreach((element,index,array)=>console.log(element),number);

// let test=number.reduce((a,b)=>a+b,0)

// console.log(test);
// let str=['salam','necesen']
// function customReduce(callback,array,initialValue){
//     let accumulyator
//     if (initialValue===undefined) {
//         accumulyator=0
//     }else{
//         accumulyator=initialValue
//     }
//     for (let a = 0; a < array.length; a++) {
//       accumulyator= callback(accumulyator,array[a])
        
//     }
//     return accumulyator
// }

// let alfa=customReduce((a,b)=>a+' '+b,str,'')
// console.log(alfa);


// let test1=number.map((el)=>[el,el*2])
// console.log(test1);

//flatmap custom
function flatMap(callback,array){
    let arr=[]
    for (let a = 0; a < array.length; a++) {
       let snapArray=callback(array[a])
       for (let b = 0; b < snapArray.length; b++) {
        arr.push(snapArray[b])
       }
    }
    return arr
}

let betta=flatMap((x)=>[x,x*2],number)

console.log(betta);
