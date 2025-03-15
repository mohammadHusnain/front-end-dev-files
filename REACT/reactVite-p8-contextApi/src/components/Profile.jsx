import React, { useContext } from "react";
import userContext from "../contextApis/userContext";

function UserProfile() {
  const { user } = useContext(userContext);

  return (
    <div>
      {user ? (
        <div>Welcome, {user.username}!</div> // Access user.username
      ) : (
        <div>Please log in.</div>
      )}
    </div>
  );
}

export default UserProfile;
