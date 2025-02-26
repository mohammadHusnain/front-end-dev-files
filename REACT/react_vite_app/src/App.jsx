import Coffee from "./coffee"

function App() {

  const username = 'husnain bhinder'

  return (
    <>
      <h1>hello world with react and vite |
        {/* username => incorrect syntax to access variable in render of main.jsx */}
         {username} 
{/* this is evaluated expression , final output of js , not js for interview qs */}

           {/* correct syntax to get variable , like we use backticks to fifferentiate variable from other string content in javascript*/}
         
         </h1>
      <Coffee/>
      <h4>make my coffee hot like war</h4>
    </>
  );
}

// <> .. </> is called fragmentation in react and we can write multiple tags inside it 
export default App
