// document.querySelector('.clock')
const clock = document.getElementById('clock')



setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString);  //shows time in console but we need on page so we do this:-->
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)

//1000 milisecond represent time is changing after each 1 second