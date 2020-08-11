import React from 'react';
import '/home/sergey/proj/react/boot_react_regist/src/App.css';
import FontClassInFile from "../TextClasses/FontClassInFile";
import {Link} from "react-router-dom";
import ButtonClassInFile from "../ButtonsClasses/ButtonClassInFile";
import {FormErrors} from './FormErrors';
import GeneralClassInFile from "../FieldsClasses/GeneralClassInFile";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            login: '',
            formErrors: {password: '', login: ''},
            passwordValid: false,
            loginValid: false,
            formValid: false
        }
    }

    //  clearForms = () => {
    //      document.querySelectorAll('input');
    //      this.setState({
    //          this.setState({
    //              itemvalues: [{}]
    //          });
    //          // this.setState({login: "", email: "", password: ""});
    //          // if (document.getElementById("id1")){
    //          //     document.getElementById("id1").remove();
    //      }
    // }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => {
                this.validateField(name, value)
            });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let passwordValid = this.state.passwordValid;
        let loginValid = this.state.loginValid;

        switch (fieldName) {
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : 'Пароль слишком короткий';
                break;
            case 'login':
                loginValid = value.length <= 60;
                fieldValidationErrors.login = loginValid ? '' : 'Логин не может быть более 60 символов';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            passwordValid: passwordValid,
            loginValid: loginValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.passwordValid && this.state.loginValid});
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    handleReset = () => {
        this.setState({login: "", password: ""});
    };

    render() {
        return (
            <div className="Login">
                <div className="form_wraper">
                    <FontClassInFile
                        textM="Вход"
                    />
                    <form>
                        <GeneralClassInFile
                            adress={`login ${this.errorClass(this.state.formErrors.login)}`}
                            fieldClassName="fieldset_mod"
                            generalText="Логин"
                            typeTe="text"
                            placeholderT="example"
                            name="login"
                            valueC={this.state.login}
                            onChangeC={this.handleUserInput}
                            ids="login"
                        />
                        <div className="panel panel-default">
                            <FormErrors formErrors={this.state.formErrors.login}/>
                        </div>
                        <GeneralClassInFile
                            adress={`password has-error ${this.errorClass(this.state.formErrors.password)}`}
                            fieldClassName="fieldset_mod"
                            generalText="Пароль"
                            typeTe="password"
                            name="password"
                            valueC={this.state.password}
                            onChangeC={this.handleUserInput}
                            ids="password"
                        />
                        <div className="panel panel-default">
                            <FormErrors formErrors={this.state.formErrors.password}/>
                        </div>
                        <Link to="Main">
                            <ButtonClassInFile
                                classB="flexel"
                                typeB="button_send"
                                disableB={!this.state.formValid}
                                textB="Отправить"
                                type2B="submit"
                                nazal={this.handleReset}
                            />
                        </Link>
                    </form>
                </div>
                <Link to="/">
                    <ButtonClassInFile
                        classB="flexel"
                        typeB="btn btn-secondary btn-sm align_center margin_top5px"
                        textB="Регистрация"
                        type2B="submit"
                    />
                </Link>
            </div>
        );
    }
}

export default Login;