const numArray = [0,1,2,3,4,5,6,7,8,9]

var numArrayMapped = numArray.map((number)=>{
    return number * 2
})
var numArrayReduced = numArray.reduce(
    (result, number) =>{
    return result * number;
})

var numArrayFiltered = numArray.filter(number => number % 2 === 0)
console.log("This is the mapped array:" + numArrayMapped)
console.log("This is the reduced array:" + numArrayReduced)
console.log("This is the filtered array:" + numArrayFiltered)