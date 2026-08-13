let arr1=[1,2,3];
let arr2=[4,5,6];

let arr3=arr1.concat(arr2);
console.log(arr3);

let arr4=arr3.concat(7,8,9,10);
console.log(arr4);

arr4.pop();
arr4.shift();
delete arr4[0];