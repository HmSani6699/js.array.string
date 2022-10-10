const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//slice
const getSlice = numbers.slice(3, 6);
/*
 console.log(getSlice);
console.log(numbers);
*/

//splice
/*
const getSplice = numbers.splice(2, 3);
console.log(getSplice);
console.log(numbers)
*/

//using the splice remove and add array
const getSplice = numbers.splice(2, 3, 100, 200);
console.log(getSplice);
console.log(numbers)