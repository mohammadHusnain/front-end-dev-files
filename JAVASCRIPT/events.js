console.log("events and event handling");

let button = document.getElementById("btn");

//  template syntax for writing an event in js

// element.addEventListener("write name of event here wg click, doubleclick, contectmenu etc   " , function example such as () =>{
//     document.querySelector(".box").innerHTML= "yayu are clicked"

// })


button.addEventListener("click" , ()=>{
document.querySelector(".box").innerHTML = "<b>Yayy u were clicked</b> Enjoy your Click!";
})

button.addEventListener("dblclick", () => { // changes on doubleClick
    document.querySelector(".box").innerHTML = "<b>Yayy u were clicked</b> Enjoy your Click!";
})

button.addEventListener("contextmenu", () => { // shows alert msg wen i right click msg
alert("dont hack us, Right click please!!")
})


