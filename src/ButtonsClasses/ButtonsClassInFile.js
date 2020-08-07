import React from "react";
import '/home/sergey/proj/react/boot_react_regist/src/App.css';
import '/home/sergey/proj/react/boot_react_regist/src/SiteComponent/RegistComponent';

class ButtonsClassInFile extends React.Component{

    render() {

        const classB = this.props.classB;
        const typeB = this.props.typeB;
        const typeA = this.props.typeA;
        const textB = this.props.textB;
        const type2A = this.props.type2A;
        const type2B = this.props.typeB;
        const textA = this.props.textA;
        const disableB = this.props.disableB
        const valueA = this.props.valueA;
        const nazal = this.props.nazal;

        return(
            <div className={classB}>
                <button className={typeB} type={type2B} disabled={disableB}>{textB}</button>
                <button id={type2A} className={typeA} type={type2A} onClick={nazal} value={valueA}>{textA}</button>
            </div>
        );
    }
}

export default ButtonsClassInFile;