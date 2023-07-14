import React from "react"

const Child = (props)=>{
    return(
        <div>
            
            {
                props.isLoggedIn == true ? (<p>You are logged in!</p>) : (<form onSubmit={props.logInBtnClick}><label>Username: </label>
            <input type="text" ></input><br/><br/>

            <label>Password: </label>
            <input type="text"></input><br/><br/>

            <button>Login</button></form>)
            }
        </div>
    )
}

export default Child