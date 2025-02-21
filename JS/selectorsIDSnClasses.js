console.log("bhinder");

let boxes = document.getElementsByClassName("box");
console.log(boxes);

boxes[2].style.backgroundColor = "red"

document.getElementById("sec").style.backgroundColor = "purple";

document.querySelector(".box") . style.backgroundColor = "orange" // takes first element from container as box

//queryselector to apply on all boxes bt it uses foreach loop for this purpose , it wont work without loops coz it returns multiple elements in a node list and simple queryselector returns single element

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "cyan ";
})

document.getElementsByTagName("div") // returns all the divs present in file as html collection
//other methods

Element.matches // check if element matches with given css selector
Element.closest // ;ook for nearest ancestor that matches given css
Element.contains // return true if it contains and vice versa eg::

document.querySelector("body").contains(document.querySelector("container")) // returns true coz container is present in body


