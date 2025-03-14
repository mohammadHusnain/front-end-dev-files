import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData(); // this line do same thing as below code due to hook useloader data
  // Use useState to initialize and manage state
//   const [data, setData] = useState({});

//   // Use useEffect to fetch data when the component mounts
//   useEffect(() => {
//     fetch("https://api.github.com/users/mohammadHusnain")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data); // Update state with fetched data
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="bg-gray-700 text-white text-2xl p-4">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="git pic" width={200} />
    </div>
  );
}

export default Github;

export const gitHubInfoLoader = async () =>{
    const response = await fetch("https://api.github.com/users/mohammadHusnain")
    return response.json();
}
