function username(name,email,mobile)
{
    name= name.trime();
    email=email.toLowerCase();
    mobile = mobile.replaceAll("-","").trime();

    if(name.length<3)
    {
        return"Invalid name";
    }

    if(email.length !==10){
        return "Invaild email";
    }

    if(mobile.length !==10){
        return "invalid mobile number";
    }

    return {
        name:name,
        email:email,
        mobile:mobile
    };
}



let user = username("pruthviraj Dubal","PRUTHVIRAJ@GMAIL>COM","997-573-6008");

console.log(user);