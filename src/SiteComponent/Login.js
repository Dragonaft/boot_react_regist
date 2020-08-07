import React from 'react';
import '/home/sergey/proj/react/boot_react_regist/src/App.css';
import FontClassInFile from "../TextClasses/FontClassInFile";
import ButtonsClassInFile from "../ButtonsClasses/ButtonClassInFile";
import {Link} from "react-router-dom";
import ButtonClassInFile from "../ButtonsClasses/ButtonClassInFile";
import { FormErrors } from './FormErrors';
import GeneralClassInFile from "../FieldsClasses/GeneralClassInFile";

class Login extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
    }

    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' is too short';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

    render() {
        return(
            <div className="Login">
                <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
                <div className="form_wraper">
                    <FontClassInFile
                        textM = "Вход"
                    />
                    <form>
                        <GeneralClassInFile
                            fieldClassName = "fieldset_mod"
                            generalText = "Логин"
                            typeTe = "text"
                            placeholderT = "example"
                        />
                        <GeneralClassInFile
                            adress = {`password has-error ${this.errorClass(this.state.formErrors.password)}`}
                            fieldClassName = "fieldset_mod"
                            generalText = "Пароль"
                            typeTe = "password"
                            name = "password"
                            valueC={this.state.password}
                            onChangeC={this.handleUserInput}
                            ids = "password"
                        />
                        <ButtonsClassInFile
                            classB = "flexel"
                            typeB = "button_send"
                            textB = "Отправить"
                            type2B = "submit"
                        />
                    </form>
                </div>
                <Link to="/">
                    <ButtonClassInFile
                        classB = "flexel"
                        typeB = "btn btn-secondary btn-sm align_center margin_top5"
                        textB = "Регистрация"
                        type2B = "submit"
                    />
                </Link>
            </div>
        );
    }
}
export default Login;