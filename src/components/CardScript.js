
const Cardscript=()=> {

const getCurrentday = ()=>{
    let currentTime = new Date();
    const weekday = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
    return weekday[currentTime.getDay()];
};

const getCurrenttime = ()=>{
    var now = new Date();
    var months = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
    var month = months[now.getMonth()];
    var date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let periods = "AM";
    if(hours>11){
        periods = "PM";
        if(hours>12){
            hours = hours-12;
        }
    }
    if(minutes<10){
        minutes = "0"+minutes;
    }
    return `${month} ${date} | ${hours}:${minutes} ${periods}`;
};

  return (
   <>
    {getCurrentday()} | {getCurrenttime()}
   </>
  )
}

export default Cardscript

