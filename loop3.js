let  Array1 =["milk","Antal","marc","emir","Louize","jaky"];
let notFoud= true;

while(notFoud && Array1.length >0)

   if(Array1[0] ==="Louize")
    {
        console.log("found her..!");
        notFoud= false;
    }
    else
    {
        Array1.shift();
    }
