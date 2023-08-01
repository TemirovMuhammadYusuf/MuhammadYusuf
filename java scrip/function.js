// function declaration

// function yigindi(a, b) {
//     return a + b
// }

// console.log(yigindi(10, 5)) 

// function expresstion

// const kvadrat = function(a) {
//     return a * a
// }

// console.log(kvadrat(a));

// arrow function\

// 1 - usul 

// const kvadrat = (son) => {
//     return son * son
// }

// console.log(5);

// 1 - misol

// const int = (a) => {
//     return a % 2 == 0
// }

// console.log(int(8));

// function yigindi(a) {
//     return a % 2 == 0
// }

// console.log(int(8));

// const kvadrat = function (a) {+
//     return a % 2 == 0
// }

// console.log(int(8));

// 2 - misol

// function big(a, b) {
//     if (a > b) {
//         console.log("a soni katta");
//     } else {
//         console.log("b soni katta");
//     }
//     return a, b;
// }

// big(1, 3)

// const big = function (a, b) {
//     if (a > b) {
//         console.log("a soni katta");
//     } else if (b > a) {
//         console.log("b soni katta");
//     }
//     return a, b; 
// }

// big(1, 3)

// const big = (a, b) => {
//     if (a > b) {
//         console.log("a soni katta: " + a);
//     } else if (b > a) {
//         console.log("b soni katta: " + b);
//     }

// }

// big(1, 3)

let data = [
    {
        age: 24,
        type: 'dog'
    },
    {
        age: 60,
        type: 'dog'
    },
    {
        age: 36,
        type: 'cat'
    }
];

const sum = data.reduce((total, item) => {
    if (item.type === 'dog') {
        return total + item.age
    } else {
        return total
    }
}, 0)


console.log(sum);