import React from "react"

const Child = (props)=>{
    return(
        <div>
            
            {
                props.isLoggedIn == true ? (<p>You are logged in!</p>) : (<div><label>Username: </label>
            <input type="text" ></input><br/><br/>

            <label>Password: </label>
            <input type="text"></input><br/><br/>

            <button onClick={props.logInBtnClick}>Login</button></div>)
            }
        </div>
    )
}

export default Child