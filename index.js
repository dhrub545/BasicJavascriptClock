clck = ()=>{
    let bttn = document.getElementById("btn");
    bttn.textContent = "Started!"
    let clock = document.getElementById("clock")
    var a = new Date()
    var hours = a.getHours() 
    var min = a.getMinutes()
    var sec = a.getSeconds()
    var millisec = a.getMilliseconds()
    clock.textContent = hours + ":" + min + ":" + sec +":"+millisec
}
function start(){
    let bttn = document.getElementById("btn");
    bttn.textContent = "Starting..."
    setInterval(clck, 1);
}