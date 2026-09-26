function validpass(password){

    if(password.length>=8)
    {
        return "validpass";
    }
    return "PAssword must be contain at least 8 charcter";
}
console.log(validpass("java@123"));