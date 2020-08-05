import React from "react";
import '/home/sergey/proj/react/boot_react_regist/src/App.css';

class ButtonsClassInFile extends React.Component{
    render() {

        const classB = this.props.classB;
        const typeB = this.props.typeB;
        const typeA = this.props.typeA;
        const textB = this.props.textB;
        const type2A = this.props.type2A;
        const type2B = this.props.typeB;
        const textA = this.props.textA;

        return(
            <div className={classB}>
                <button className={typeB} type={type2B}>{textB}</button>
                <button className={typeA} type={type2A}>{textA}</button>
            </div>
        );
    }
}

export default ButtonsClassInFile;