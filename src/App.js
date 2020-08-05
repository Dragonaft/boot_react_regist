import React from 'react';
import './App.css';
import FontClassInFile from './TextClasses/FontClassInFile';
import NameSurnameClassInFile from './FieldsClasses/NameSurnameClassInFile.js';
import ButtonsClassInFile from "./ButtonsClasses/ButtonsClassInFile";
import GeneralClassInFile from "./FieldsClasses/GeneralClassInFile";
import ButtonClassInFile from "./ButtonsClasses/ButtonClassInFile";

class App extends React.Component{
  render() {
    return (
        <div className="App">
          <div className="form_wraper">
            <FontClassInFile
            textM = "Регистрация"
            textS = "Для регистрации укажите ваши данные.Все поля
                обязательно
                должны быть заполненны."
            />
            <form>
              <NameSurnameClassInFile />
              <GeneralClassInFile
                  fieldClassName = "fieldset_mod"
                  generalText = "Логин"
                  typeTe = "text"
                  patternT = "^[a-zA-Z]+${4,}"
                  placeholderT = "example"
              />
              <GeneralClassInFile
                  fieldClassName = "fieldset_mod"
                  generalText = "E-mail"
                  typeTe = "email"
                  placeholderT = "example@gmail.com"
              />
              <GeneralClassInFile
                  fieldClassName = "fieldset_mod"
                  generalText = "Пароль"
                  typeTe = "password"
              />
              <ButtonsClassInFile
                  classB = "flexel"
                  typeB = "button_send"
                  typeA = "button_clean"
                  textB = "Отправить"
                  type2A = "reset"
                  type2B = "submit"
                  textA = "Отчистить"
              />
              <ButtonClassInFile
                  classB = "flexel"
                  typeB = "button_send"
                  textB = "Вход"
                  type2B = "submit"
                  hrefB = "Login.js"
                />
            </form>
          </div>
        </div>
    );

  }
}


export default App;
