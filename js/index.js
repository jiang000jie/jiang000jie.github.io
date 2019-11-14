var TheStartTimeOfwe = new Date(2019,4,30,0,0,0);

var now;

function Start(){
    now = new Date();
    TimeStamp=now-TheStartTimeOfwe;
    time1=TimeStamp/1000
    var Time={
        Day:parseInt(time1/60/60/24),
        Hour:parseInt(time1/60/60)%24,
        Minute:parseInt(time1/60)%60,
        Second:parseInt(time1)%60,
    }
    document.getElementById("time").innerHTML=Time.Day+"天"+Time.Hour+"时"+Time.Minute+"分"+Time.Second+"秒";
    
    setTimeout("Start()", 1000);
}
window.setTimeout("Start()", 1000);
