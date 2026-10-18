const user =
{
    name:"anna",
    role:"CA"
};

Object.seal(user);

user.role = "Banking sector";

console.log(user);