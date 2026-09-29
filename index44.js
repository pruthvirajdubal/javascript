function checkPassword(password){

    if(password.length<8){
        return"Week Password";
    }

    let hasUppercase = /[A-Z]/.test(password);
    let hasLowercase = /[a-z]/.test(password);
    let hasNumber = /[0-9]/.test(password);
    let hasSpecial = /[^A-Za-zo -0]/.test(password);

    if(hasUppercase && hasLowercase && hasNumber && hasSpecial)
    {
        return"Strong password"
    }
    return "Week password";
}
console.log(checkPassword("Java@1234"));
console.log(checkPassword("java123"));