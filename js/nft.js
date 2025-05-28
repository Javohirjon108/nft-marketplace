function times(){
    let date = new Date();
    document.querySelector(".hours").innerHTML = date.getHours();
    document.querySelector(".minut").innerHTML = date.getMinutes();
    document.querySelector(".second").innerHTML = date.getSeconds();
};
setInterval(()=>{times()},1000);