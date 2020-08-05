import React from "react";
import '/home/sergey/proj/react/boot_react_regist/src/App.css';

class PasswordClassInFile extends React.Component{
    render() {
        return(
            <div className="form-group">
                <fieldset className={"fieldset_mod"}>
                    <legend><label htmlFor="inputAddress2">Пароль</label></legend>
                    <input type="password" className="form-control border_input" id="inputAddress2" required/>
                </fieldset>
            </div>
        );
    }
}

export default PasswordClassInFile;