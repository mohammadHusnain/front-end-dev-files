import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' 

function Myapp(){
  return(
    <div>
    <h1> custom app ! this is custom written function inside main file without exporting </h1>
    </div>
  )
}

// const reactElement1 = { // its syntax is not acceptable and correct this react code will not render in below function coz it is written by custom react which only rins by writing custom render function as we did in custom react folder , if we want to render we make another variable and write them in other format and then we are able to render it in the render of react

//   type: "a", // This is an anchor (<a>) tag
//   props: {
//     href: "https://google.com", // Link to Google
//     target: "_blank", // Open link in a new tab
//   },
//   children: "click me to visit google", // Text inside the anchor tag
// };

// element made thru react principles


//other element

const anotherElement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)

const otheruser = 'ikrma'

// object - we dont write conditions inside object we only write evaluated expressions in object and we can write condition , loops etc outside the function

const reactElement2 = React.createElement( // includes special syntax of react , babble(js compiler - converts jsx to plain js so browser could understand) injects createElement here from compiler => first expected paramter is tag eg para,h1  ,  => second parameter is object which adds properties and after it we have 3- childeren such as text and finally at number 4- we have variables written as it is with their name

'a',   // 1- tag
{href : "https://google.com" , target: "_blank" },   // 2 - object
'click me to visit google',   //3- children such as text here
otheruser // 4- variable 
)

// render function for calling of functions in dom

ReactDOM.createRoot(document.getElementById('root')).
render(

<App/> // coming from App.jsx consists of stuff written in App function

  // <Myapp/>

  // Myapp() it can also be like this coz myapp is a function itself butnot recommended in production

// reactElement1  this wont show output in web coz this is custom function

// anotherElement it will run coz it is converted to object

// reactElement2 //  it will run cause written wrt react rules

 
)
