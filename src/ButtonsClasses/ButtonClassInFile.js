import React from "react";
import '/home/sergey/proj/react/boot_react_regist/src/App.css';

class ButtonsClassInFile extends React.Component{
    render() {

        const classB = this.props.classB;
        const typeB = this.props.typeB;
        const textB = this.props.textB;
        const type2B = this.props.typeB;
        const hrefB = this.props.hrefB;

        return(
            <div className={classB}>
                <button className={typeB} type={type2B} onClick='location.href={hrefB}'>{textB}</button>
            </div>
        );
    }
}

export default ButtonsClassInFile;