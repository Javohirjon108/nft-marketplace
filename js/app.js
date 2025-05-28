function date() {
    let time = new Date();
    let hours = document.querySelector(".soat").innerHTML = time.getHours();
    let minut = document.querySelector(".daqiqa").innerHTML = time.getMinutes();
    let second = document.querySelector(".soniya").innerHTML = time.getSeconds();
}
setInterval(()=>{
    date()
},1000)