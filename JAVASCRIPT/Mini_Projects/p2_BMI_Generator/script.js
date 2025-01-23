const form = document.querySelector("form");

// this usecase gives us the empty value , it should be written inside form
// const height = parseInt(document.querySelector('#height').value)


form.addEventListener('submit' , function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `please provide a valid height ${height}`;
    }

    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `please provide a valid weight ${weight}`;
    }

    else{
        (weight/ ((height*height)/10000)).toFixed (2);
    }

})