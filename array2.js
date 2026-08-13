cars =["toyota","Renault","creata"];
console.log(cars[0]);   //toyot
console.log(cars[1]);   //renault
console.log(cars[2]);   //creata
console.log(cars[3]);   //undefined
console.log(cars[-1])   //undefined


cars[0]="tesla";
console.log(cars[0]);   //tesla
console.log(cars);     //tesla,renault,creata

cars[3]="kia";
cars[-1]="fita";

console.log(cars[3]);
console.log(cars[-1]);