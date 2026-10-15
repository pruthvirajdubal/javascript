const personal = {

    name:"rahul",
    city:"pune"
};

 const profesion = {

    role:"java developer",
    skill:["java","Spring","Angular"]
 };

  const profile = Object.assign({},personal,profesion);

  console.log(profile);