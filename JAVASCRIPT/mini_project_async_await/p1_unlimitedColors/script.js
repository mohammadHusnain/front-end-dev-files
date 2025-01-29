//generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0 ; i<6 ; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};

// console.log(randomColor());

let intervalId; //global scope

const startChangingColor = function(){
    if(!intervalId){
     intervalId = setInterval(changeBgColor , 500)
    }
    function changeBgColor(){ document.body.style.backgroundColor = randomColor();
    }
}
const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null ; //derefrancing its variable for cleaner code
}

document.querySelector("#start").addEventListener('click' , startChangingColor)

document.querySelector("#stop").addEventListener('click', stopChangingColor)