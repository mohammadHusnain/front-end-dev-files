console.log("events and event handling");

let button = document.getElementById("btn");

//  template syntax for writing an event in js

// element.addEventListener("write name of event here eg click, doubleclick, contectmenu etc   " , function example such as () =>{
//     document.querySelector(".box").innerHTML= "yay u are clicked"

// })


button.addEventListener("click" , ()=>{
document.querySelector(".box").innerHTML = "<b>Yayy u were clicked</b> Enjoy your Click!";
})

button.addEventListener("dblclick", () => { // changes on doubleClick
    document.querySelector(".box").innerHTML = "<b>Yayy u were clicked</b> Enjoy your Click!";
})

button.addEventListener("contextmenu", () => { // contextMenu => shows alert msg when i right click on the message
alert("dont hack us, Right click please!!")
})


