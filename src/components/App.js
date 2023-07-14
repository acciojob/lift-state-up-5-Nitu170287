
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {
const[isLoggedIn,setIsLoggedIn] = useState(false)

function logInBtnClick(){
  setIsLoggedIn(true)
  console.log("inside func", typeof isLoggedIn)
}

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        {console.log(typeof isLoggedIn)}
        <Child logInBtnClick={logInBtnClick} isLoggedIn={isLoggedIn}/>
    </div>
  )
}

export default App
