import React from "react";
import "./index.css"; // Make sure this imports your Tailwind CSS

const App = () => {

  const name = 'hussnain bhinder ';
  const role = 'software engineer ';
  const company = 'apple ';
  const names = ['husnain' , 'rehan' , 'ikrma' , 'bk'];
  const loggedin = false
  


  return (
    <>
      <div className="text-3xl">job portal</div>
      <p className="text-lg mt-4">hello</p>
      <p>
        {name} is working as a {role} in {company}
      </p>

      <ul>
        {names.map((namess, index) => (
          <li key={index}>{namess}</li>
        ))}
      </ul>

      {loggedin ? <h1>hello member</h1> : <h1>hello unknown member</h1>}
    </>
  );
};

export default App;
