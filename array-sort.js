const number = [6, 9, 3, 5, 8, 1, 4, 2, 7];
// console.log(number)
const sortedNumber = number.sort();
// console.log(sortedNumber);

const friends = ['cabul', 'babul', 'dabul', 'abul'];
console.log(friends);

//sort
/*
const sortFriends = friends.sort();
console.log(sortFriends);
*/

//reverse
/*
const sortFriends = friends.reverse();
console.log(sortFriends);
*/

const numbers = [23, 45, 3, 67, 78, 89, 5, 35, 90];
const sortNumbers = numbers.sort(function (a, b) {
    return a - b;
});
console.log(sortNumbers)
