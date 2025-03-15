import React, { useContext, useState } from "react";
import userContext from "../contextApis/userContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(userContext); //coming from UserContextProvider.jsx

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password});
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />

      <br /> <br />


      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />

      <br /><br />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
