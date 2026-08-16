let age =10;
let cost =0;
let message;

if(age<3)
{
    cost=0;
    message ="Acess is free under three";
}
else if(age >=3 && age <12)
{
    cost=5;
    message="with the child discount";
}
else if(age>=12 && age<65)
{
    cost=10;
    message=" A Regular tikit cost 10 dollars:";
}
else
{
    cost = 7;
    message:" A ticket is 7 dollres";
}
console.log(message);
console.log("your total cost:"+cost);
