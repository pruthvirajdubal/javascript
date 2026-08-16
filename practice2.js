//1.CREATE PROMPT TO ASK THE USER'S AGE
let ageInput= prompt("plese Enter your age:");

//2.CONVERT THE RESPONCE FROM THE PROMPT NUMBER 
let age= Number(ageInput);

//3.declare the message 
let message="";

//4.
if(age >= 21)
{
    message="Conform entry to avenue  and the ability to purches alchohlo";
}
//5.
else if(age >= 19)
{
    message="confirm entry to the venue but deny the purches alcohol";
}
//6.
else
{
    message="Deny entry if non true";
}
//7.
console.log(message);
