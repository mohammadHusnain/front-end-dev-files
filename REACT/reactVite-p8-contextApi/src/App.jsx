
import './App.css'
import Profile from './components/Profile';
import Login from './components/Login';
import UserContextProvider from './contextApis/UserContextProvider';

function App() {

  return (
    <UserContextProvider>
      <h1>react with bhinder</h1>
      <Login/>  
      <Profile/>
    </UserContextProvider>
  );
}

export default App
