function getMyAllFriends(friends) {
    if (Array.isArray(friends) == false) {
        return 'not difarent an array'
    }
    var maga = friends[0];
    for (const friend of friends) {

        if (friend.length > maga.length) {
            maga = friend
        }
    }
    return maga
}
const friends = ['babul', 'nayem', 'haroun', 'noman'];
// const outPut = getMyAllFriends(friends);
const outPut = getMyAllFriends(6656);
console.log(outPut);
if (friends.indexOf('dabul') != -1) {
    console.log('get my indexOf');
}
else {
    console.log('dabul is not difint')
}
//inculdes
if (friends.includes('noman')) {
    console.log('ami mr: noman shak')
};

//concat

const num1List = [1, 2, 3, 4, 5];
const num2List = [6, 7, 8, 9,];
const twoItemAdd = num1List.concat(num2List).concat(11).concat(12, 13, 14, 15)
console.log(twoItemAdd);