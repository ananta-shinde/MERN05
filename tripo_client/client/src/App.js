import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import { useState } from 'react';

function App() {

  const [isLoggedIn, setIsloggedIn] = useState("signup")
  return (
    <>
    {isLoggedIn == "login" && <Login/>}
    {isLoggedIn == "signup" && <SignUp setIsloggedIn={setIsloggedIn}/>}
    </>
  );
}

export default App;
