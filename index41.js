let text ="order 101,priduct 25,Quality 3";
let match = text.matchAll(/\d+/g);

for(let text of match)
{
    console.log(match[0]);
}