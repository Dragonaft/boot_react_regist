import React from "react";
import '/home/sergey/proj/react/boot_react_regist/src/App.css';

class GeneralClassInFile extends React.Component {

    render() {

        const fieldClassName = this.props.fieldClassName;
        const generalText = this.props.generalText;
        const typeTe = this.props.typeTe;
        const patternT = this.props.patternT;
        const placeholderT = this.props.placeholderT;
        const name = this.props.name;
        const ids = this.props.ids;
        const adress = this.props.adress;
        const valueC = this.props.valueC;
        const onChangeC = this.props.onChangeC;

        return (
            <div className={adress}>
                <fieldset className={fieldClassName}>
                    <legend><label htmlFor="inputAddress">{generalText}</label></legend>
                    <input type={typeTe} className="form-control border_input" id={ids}
                           pattern={patternT} placeholder={placeholderT} name={name}
                           value={valueC}
                           onChange={onChangeC}/>
                </fieldset>
            </div>
        );
    }
}

export default GeneralClassInFile;