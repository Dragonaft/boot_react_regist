import React from "react";
import '/home/sergey/proj/react/boot_react_regist/src/App.css';

class LoginClassInFile extends React.Component{
    render() {

        const fieldClassName = this.props.fieldClassName;
        const loginText = this.props.loginText;

        return(
            <div className="form-group">
                <fieldset className={fieldClassName}>
                    <legend><label htmlFor="inputAddress">{loginText}</label></legend>
                    <input type="text" className="form-control border_input" id="inputAddress" maxLength={60}
                           pattern="^[a-zA-Z]+${4,}" placeholder="example" required/>
                </fieldset>
            </div>
        );
    }
}

export default LoginClassInFile;