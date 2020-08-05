import React from "react";
import '/home/sergey/proj/react/boot_react_regist/src/App.css';

class EmailClassInFile extends React.Component{
    render() {
        return(
            <div className="form-group">
                <fieldset className={"fieldset_mod"}>
                    <legend><label htmlFor="inputAddress2">E-mail</label></legend>
                    <input type="email" className="form-control border_input" id="inputAddress2"
                           placeholder="example@gmail.com" required/>
                </fieldset>
            </div>
        );
    }
}

export default EmailClassInFile;