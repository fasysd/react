import React from "react";
import './login-register.css'

class CPN__LoginAndRegister extends React.Component{
    state = {
        email: "abc@gmail.com",
        password: "123456",
    }

    render() {
        return(
            <>
            <h1 className="LoginAndRegister-box">
                <>{this.state['email']}</>
                <input type="text" onChange={ (event) => { this.setState({ email: event.target.value})}}/>
            </h1>
            </>
        )
    }
}

export default CPN__LoginAndRegister;