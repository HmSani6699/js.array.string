
function getFriends(friends) {
    var maga = friends[0];
    if (Array.isArray(friends) == false) {
        return 'not is an array'
    }
    for (const friend of friends) {
        if (friend.length > maga.length) {
            maga = friend;
        }
    }
    return maga;
}
const friends = ['abolu', 'balo', 'clo', 'mahmub', 'gsgdfg'];
// const output = getFriends(454543);
// console.log(output);

//indexOf
if (friends.indexOf('glo') != -1) {
    // console.log('ami vallo asi tomi kemon aso ')
}
else {
    // console.log('tomi chole gela');
}

//includes
if (friends.includes('aboul')) {
    // console.log('insaallah allah amar sohay')
}
else {
    // console.log('tomi amy kool koro khoda')
}

//


