function getNamelist(num1, num2) {
    // const totalNumber = num1 + num2;
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    return result;
}
// const result = getNamelist(10, 20, 5, 15, 50);
// console.log(result);

function getFriendsname() {
    let fullName = '';
    for (const name of arguments) {
        fullName = fullName + ' ' + name;
    }
    return fullName;
}

const result1 = getFriendsname('Md', 'Babu', 'bin', 'abdull', 'ajij');
console.log(result1)
