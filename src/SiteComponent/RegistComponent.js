import FontClassInFile from "../TextClasses/FontClassInFile";
import NameSurnameClassInFile from "../FieldsClasses/NameSurnameClassInFile";
import GeneralClassInFile from "../FieldsClasses/GeneralClassInFile";
import ButtonsClassInFile from "../ButtonsClasses/ButtonsClassInFile";
import {Link} from "react-router-dom";
import ButtonClassInFile from "../ButtonsClasses/ButtonClassInFile";
import React from "react";
import {FormErrors} from './FormErrors';


class RegistComponent extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            login: '',
            formErrors: {email: '', password: '', login: ''},
            emailValid: false,
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
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let loginValid = this.state.loginValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : 'Заполните поле правильно';
                break;
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
            emailValid: emailValid,
            passwordValid: passwordValid,
            loginValid: loginValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid && this.state.loginValid});
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    handleReset = () => {
        this.setState({login: "", email: "", password: ""});
        this.setState();
    };

    render() {
        return (
            <div className="/">
                <div className="form_wraper">
                    <FontClassInFile
                        textM="Регистрация"
                        textS="Для регистрации укажите ваши данные.Все поля
                обязательно
                должны быть заполненны."
                    />
                    <form id={"create-course-form"}>
                        <NameSurnameClassInFile/>
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
                        <div className="">
                            <FormErrors formErrors={this.state.formErrors.login}/>
                        </div>
                        <GeneralClassInFile
                            adress={`email ${this.errorClass(this.state.formErrors.email)}`}
                            fieldClassName="fieldset_mod"
                            generalText="E-mail"
                            typeTe="email"
                            placeholderT="example@gmail.com"
                            name="email"
                            valueC={this.state.email}
                            onChangeC={this.handleUserInput}
                            ids="email"
                        />
                        <div className="">
                            <FormErrors formErrors={this.state.formErrors.email}/>
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
                        <div className="">
                            <FormErrors formErrors={this.state.formErrors.password}
                            />
                        </div>
                        <ButtonsClassInFile
                            classB="flexel"
                            typeB="button_send"
                            disableB={!this.state.formValid}
                            typeA="button_clean"
                            textB="Отправить"
                            type2A="reset"
                            type2B="submit"
                            textA="Отчистить"
                            valueA="Reset form"
                            nazal={this.handleReset}
                        />
                    </form>

                </div>
                <Link to="login">
                    <ButtonClassInFile
                        classB="flexel"
                        typeB="btn btn-secondary btn-sm align_center margin_top5px"
                        textB="Уже есть аккаунт? Вход"
                        type2B="submit"
                    />
                </Link>
            </div>
        );
    }
}

export default RegistComponent;