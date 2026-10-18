class customer {

    constructor(id,name,salary) {

        this.id=id;
        this.name=name;
        this.salary=salary;

    }
    getDetaitls()
    {
        return `${this.name} earns ${this.salary};`
    }
}
const emp = new customer(202,"abhi",50000);

console.log(emp.getDetaitls());