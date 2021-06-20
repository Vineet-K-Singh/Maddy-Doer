function Count(){
    const day_el=document.getElementById("day");
    const hour_el=document.getElementById("hour");
    const minute_el=document.getElementById("min");
    const second_el=document.getElementById("sec");

    const mydate =document.getElementById("date").value;
    console.log(mydate);

    function countdown(){
        const newDate = new Date(mydate);
        console.log(newDate);
        const currentDate = new Date();

        const totalseconds=(newDate-currentDate)/1000;

        const days=Math.floor(totalseconds/3600/24);
        const hours=Math.floor(totalseconds/3600)%24;
        const minutes=Math.floor(totalseconds/60)%60;
        const seconds=Math.floor(totalseconds)%60;

        day_el.innerHTML=days;
        hour_el.innerHTML=format(hours);
        minute_el.innerHTML=format(minutes);
        second_el.innerHTML=format(seconds);
    }

    function format(time){
        return time<10 ? `0${time}` : time;
    }

    setInterval(countdown,1000);
}

function Refresh(){
    location.reload();
}
