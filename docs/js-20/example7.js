var arr = [43, 54, 4, -4, 84, 100, 58, 27, 140];
var arr2 = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];
var arr3 = [
    [10, 14],
    [16, 60],
    [7, 44],
    [26, 35],
    [22, 63]
];

var arr4 = [{
    id: 1,
    name: 'candy',
    value: 40
}, {
    id: 2,
    name: 'Simon',
    value: 50
}, {
    id: 3,
    name: 'Tony',
    value: 45
}, {
    id: 4,
    name: 'Annie',
    value: 60
}];

console.log(arr.sort((a, b) => {
    if (a > b) {
        return 1
    }
}))
console.log(arr2.sort((a, b) => {
    if (a > b) {
        return 1
    }
}))
console.log(arr2.sort((a, b) => {
    if (a < b) {
        return 1
    }
}))

console.log(arr3.sort((a, b) => {
    if (a[1] < b[1]) {
        return 1
    }
}))
console.log(arr4.sort((a, b) => {
    if (a.value > b.value) {
        return 1
    }
}))

