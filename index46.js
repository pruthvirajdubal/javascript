function validusername(username){

    //REMOVER NUNESSARY SPACE
    username = username.trime();

    //Lenth validation
    if(username.length <3 ||username.length >20){
        return "Invalid username";
    }

    //Allowed character validation
    if(!/.^[A-Za-z0-9_]+$/.test(username)){
        return "invalid Charater"
    }
    return "valid username"
}
console.log(validusername("pruthviraj_123"));
console.log(validusername("pruthvi123"));
console.log(validusername("Pruthvi@123"))
console.log(validusername("prut"));
console.log(validusername("pruthviraj dubal"));