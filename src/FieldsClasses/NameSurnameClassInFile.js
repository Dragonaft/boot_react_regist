import React from "react";
import '/home/sergey/proj/react/boot_react_regist/src/App.css';

class NameSurnameClassInFile extends React.Component{
    render() {
        return(
            <div className="form-row">
                <div className="form-group col-md-6">
                    <fieldset className={"fieldset_mod"}>
                        <legend><label htmlFor="inputEmail4">Имя</label></legend>
                        <input type="text" className="form-control border_input" id="inputEmail4" placeholder="Имя"
                               maxLength={60} pattern="^[A-Za-zА-Яа-яЁё]{4,}" required/>
                    </fieldset>
                </div>
                <div className="form-group col-md-6">
                    <fieldset className={"fieldset_mod"}>
                        <legend><label htmlFor="inputPassword4">Фамилия</label></legend>
                        <input type="text" className="form-control border_input" id="inputPassword4"
                               placeholder="Фамилия" maxLength={60} pattern="^[A-Za-zА-Яа-яЁё]{4,}" required/>
                    </fieldset>
                </div>
            </div>
        );
    }
}

export default NameSurnameClassInFile;