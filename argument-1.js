/*
 function getName(num1, num2) {
    // const result = num1 + num2;
    var num = 0
    for (const result of arguments) {
        num = num + result
    }
    return num;
}
const result = getName(13, 7, 10, 20, 10, 50);
// console.log(result); 
*/

function getFriendsName() {
    var name = '';
    for (const friend of arguments) {
        name = name + ' ' + friend;
    }
    return name;
}

const result = getFriendsName('ami', 'vallo');
console.log(result);