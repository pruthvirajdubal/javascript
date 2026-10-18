
function employee(id,name,salary) {

    this.id=id;
    this.name=name;
    this.salary=salary;
}

const s1= new employee(1,"saona",80000);
const s2 = new employee(2,"patil",67000);

console.log(s1);
console.log(s2);
