
let  myWork = [];

for(let i=1;i<=10;i++)
{
    let status =(i %2===0)?true:false;

    //4.
    let lesson= {

            name:'Lesson'+i,
            status:status
    };
    //5.push
    myWork.push(lesson);


    //6.output array the conSOLE
    console.log(myWork);
    console.table(myWork);
}