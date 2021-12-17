let obj1 = {
    name: 'test',
    age: 'test23'
}

let obj2 = {
    address: 'pune',
    state: 'maharashtra'
}

let newObj = {...obj1,...obj2};

console.log(newObj);

let arr1  = ['a','b','c','d'];
let arr2 = ['e','f'];

let newArr = [...arr1, ...arr2];
console.log(newArr);