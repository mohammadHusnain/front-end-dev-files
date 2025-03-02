import React1, { useEffect } from "react"

const Navbar = ({color}) => {
  // case 1 : run on every render
  useEffect(() => {
    alert("hey welcome i will run on every render");
  });

  //case 2 : run only on first render
  useEffect(() => {
    // apply once when our app is being loaded
    alert("hey welcome to page, this is first render");
  }, []);


// run only wen certain values are changed
  useEffect(() => {
    alert("i am running coz color was changed");
  }, [color]);

  return <div>i am a Navbar of {color} colour hehe</div>;
}

export default Navbar
