const items = [
    'ami iphone moBile vallo',
    'ami realmi mobile o vallo',
    'ami nokeya Mobile to onek vallo',
    'asos leptop Kinbo',
    'hp leptop o kinbo ',
    'ami dell leptop to ami us kori vallo'
];
const scerch = 'vallo';
const output = [];

//indexOf
for (const item of items) {
    if (item.toLowerCase().indexOf(scerch.toLowerCase()) != -1) {
        // output.push(item)
    }
}
// console.log(output);

//includes
for (const item of items) {
    if (item.toLowerCase().includes(scerch.toLowerCase())) {
        // output.push(item);
    }
}
// console.log(output);

//startswith

for (const item of items) {
    if (item.toLowerCase().startsWith(scerch.toLowerCase())) {
        // output.push(item);
    }
}
console.log(output);

//endswith
for (const item of items) {
    if (item.toLowerCase().endsWith(scerch.toLowerCase())) {
        output.push(item);
    }
}
console.log(output);