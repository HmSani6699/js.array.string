const anthem = 'amar sonar bangla ami tomay vallobasi'
const words = anthem.split(' ');
const withouta = anthem.split('a');
// console.log(withouta)

//clice
const getSlice = anthem.slice(3, 9);
// console.log(getSlice);

//substr
const author = anthem.substr(5, 9);
// console.log(author);

//substring
const getAuthor = anthem.substring(3, 9);
// console.log(getAuthor);

//concat

var frist = ['ami'];
var second = ['vallo'];
var getConcat = frist.concat(second).concat('allah').concat('man')
// console.log(getConcat);

//get join
const words2 = ['abul', 'bbul', 'cabul', 'dabul', 'eboul'];
// const getWordJoin = words2.join('');
// const getWordJoin = words2.join(' ');
// const getWordJoin = words2.join(', ');
const getWordJoin = words2.join(' =ccc= ');
console.log(getWordJoin);