const arr = [10,20,30,40];

// console.log(arr);
// console.log(arr.length);
// console.log(arr[1]);

const newarr = arr;
console.log(newarr);
console.log(newarr=arr);

const newarr = structuredClone(arr);
 console.log(newarr=arr);