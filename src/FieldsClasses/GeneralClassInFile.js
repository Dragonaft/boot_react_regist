import React from "react";
import '/home/sergey/proj/react/boot_react_regist/src/App.css';

class GeneralClassInFile extends React.Component{
    render() {

        const fieldClassName = this.props.fieldClassName;
        const generalText = this.props.generalText;
        const typeTe = this.props.typeTe;
        const patternT = this.props.patternT;
        const placeholderT = this.props.placeholderT;

        return(
            <div className="form-group">
                <fieldset className={fieldClassName}>
                    <legend><label htmlFor="inputAddress">{generalText}</label></legend>
                    <input type={typeTe} className="form-control border_input" id="inputAddress" maxLength={60}
                           pattern={patternT} placeholder={placeholderT} required/>
                </fieldset>
            </div>
        );
    }
}

export default GeneralClassInFile;