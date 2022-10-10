const products = [
    'dell realmi phone c12',
    'oppo Phone a33',
    'Assos lEptop',
    'hp letop',
    'dell er Leptop',
    'nokia phone 1200m',
    'dell iphone 13 pro max Phone'
];
console.log(products)
const searching = 'leptop';

const output = [];

//indexOf
for (const prodect of products) {
    if (prodect.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        output.push(prodect);
    }
}
console.log(output);

// inculdes
for (const prodect of products) {
    if (prodect.toLowerCase().includes(searching.toLowerCase())) {
        // output.push(prodect)
    }
}
console.log(output);

// startswith

for (const prodect of products) {
    if (prodect.toLowerCase().startsWith(searching.toLowerCase())) {
        // output.push(prodect)
    }
}
console.log(output);

//endswith
for (const prodect of products) {
    if (prodect.toLowerCase().endsWith(searching.toLowerCase())) {
        // output.push(prodect)
    }
}
console.log(output);
