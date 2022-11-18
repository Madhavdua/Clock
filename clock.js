let t, s,m,h,date
setInterval(()=>{
    t=new Date();
    // date=t.toLocaleDateString();
    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    day=week[t.getDay()];
    let today=t.getDate();
    let month=t.getMonth()+1;
    let year=t.getFullYear();
    let x=day +" "+today+"-"+month+"-"+year;
    console.log(x)

    s=t.getSeconds();
    h=t.getHours();
    m=t.getMinutes();
    let time="Is:  "+h +" : "+m+" : "+s
    document.getElementById("time").innerHTML=time
    document.getElementById("date").innerHTML=x
},1000)

