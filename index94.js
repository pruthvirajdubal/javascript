function showtime()
{
    let now = new Date();

    let hour = now.getHours();

    let minuts = now.getMinutes();

    let second = now.getTime();

    console.log(hour+","+minuts+","+second);

}
setInterval(showtime,1000);
