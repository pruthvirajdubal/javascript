function showTime()
{
    let now = new Date();

    let hour = String(now.getHours()).padStart(2,"0");

    let minut = String(now.getMinutes()).padStart(2,"0");

    let second = String(now.getSeconds()).padStart(2,"0");

    console.log`($[hour]:{minutes}:${second});`

}

setInterval(showTime,1000);