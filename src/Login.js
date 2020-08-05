import React from 'react';
import './App.css';
import FontClassInFile from './TextClasses/FontClassInFile';
import NameSurnameClassInFile from './FieldsClasses/NameSurnameClassInFile.js';
import ButtonsClassInFile from "./ButtonsClasses/ButtonsClassInFile";

class Login extends React.Component{
    render() {
        return(
            <div className="App">
                <div className="form_wraper">
                    <FontClassInFile
                        textM = "Вход"
                    />
                    <form>
                        <NameSurnameClassInFile />
                        <ButtonsClassInFile
                            classB = "flexel"
                            typeB = "button_send"
                            typeA = "button_clean"
                            textB = "Отправить"
                            type2A = "reset"
                            type2B = "submit"
                            textA = "Отчистить"
                        />
                    </form>
                </div>
            </div>
        );
    }
}
export default Login;