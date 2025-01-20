console.log("bhinder");

let boxes = document.getElementsByClassName("box");
console.log(boxes);

boxes[2].style.backgroundColor = "red"

document.getElementById("sec").style.backgroundColor = "purple";

document.querySelector(".box") . style.backgroundColor = "orange" // takes first element from container as box

//queryselector to apply on all boxes bt it uses foreach loop for this purpose
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "cyan ";
})
