let shopingList=[];

//2.Add milk,bread,apple
shopingList.push("milk","bread","Apple");


//3.updated "bread" withe banana and apple
shopingList[1]="Banana";
shopingList.push("egges");  //milk,banana, apple, eges

//4.REMOVE THE LAST ITEM
shopingList.pop();
console.log(shopingList);

//5.SORT THE LIST ALPHBETICALLY
shopingList.sort();
console.log(shopingList);

//6.INDEX OF MILK
console.log("index of milk:"+shopingList.indexOf("milk"));


//7. AFTER BANANA ADD CARROT AND LETTUCE
let bananaindex=shopingList.indexOf("banana");
shopingList.splice(bananaindex+1,0,"carrot","lettuce");
console.log(shopingList);

//8.CREAT NEW LIST JUICEAND POP
let newList=["juice","pop"];
console.log(newList);

//9.CRET NEW LIST TEICE  TO END OF THE FIRST
let combineList=shopingList.concat(newList,newList);
console.log(combineList);

//10. LAST INDEX OF POP
console.log(combineList.lastIndexOf("pop"));

//11. 
console.log(combineList);
