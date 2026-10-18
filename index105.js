const emplist = [

    {
    id:1,
    name:"ganesh",
    salary:60000,
    dep:"IT"
    },

   {
    id:2,
    name:"Rahul",
    salary:50000,
    dep:"HR"
   },
   {
    id:3,
    name:"Amit",
    salary:70000,
    dep:"IT"
   }

];

const employee = emplist.find(ee => ee.id === 2); 
console.log(employee);