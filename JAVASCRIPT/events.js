console.log("events and event handling");

let button = document.getElementById("btn");

button.addEventListener("click" , ()=>{
document.querySelector(".box").innerHTML = "<b>Yayy u were clicked</b> Enjoy your Click!";
})

button.addEventListener("dblclick", () => { // changes on doubleClick
    document.querySelector(".box").innerHTML = "<b>Yayy u were clicked</b> Enjoy your Click!";
})

button.addEventListener("contextmenu", () => { // shows alert msg wen i right click msg
alert("dont hack us, Right click please!!")
})


