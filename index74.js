let product = [

    {name:"LEptop",price:50000},
    {name:"MOse",price:5000},
    {name:"monitor",price:7000}
];

let final = product.filter(p=>p.price>7000);

console.log(final);