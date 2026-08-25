
let maxvalue=10;

//2.genrate the random nuber  grom 1 to max

let secretnumer=Math.floor(Math.random()*maxvalue) +1;

//3.
let notFoud =true;

console.log("welcome to number guessing game:");
console.log("guassing number between 1 to"+maxvalue);

//4.prompt ne input ghe number madhe convert kr
while(notFoud)
{
    let userGuase=Number(prompt("Enter your guess:"));

    //5.
    if(userGuase==secretnumer)
    {
        console.log("correct value");
        notFoud=false;
    }
    else if(userGuase >secretnumer)
    {
        console.log("to high! try againe");
    }
    else if(userGuase < secretnumer)
    {
        console.log("too wow! try again");
    }
    else
    {
        console.log("plese Enter the valid number");
    }
}
console.log("Game over:");