function validnumber (mobile){

    //removerSPACE

    mobile = mobile.trime();

    //check exact 10 digit
    if(!/^[0-9]{10}$/.test(mobile)){
        return "Invaid mobile number";
    }

    //check starting digit

    if(!/^[6-9]/.test(mobile)){
   return "Invaid mobile number";
    }

    return "vaild number";
}
console.log(validnumber("0989765676"));
console.log(validnumber("123-987-9876"));
console.log(validnumber("767889"));
