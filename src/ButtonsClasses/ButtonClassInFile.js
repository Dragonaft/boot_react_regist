import React from "react";
import '/home/sergey/proj/react/boot_react_regist/src/App.css';

class ButtonsClassInFile extends React.Component{
    render() {

        const classB = this.props.classB;
        const typeB = this.props.typeB;
        const textB = this.props.textB;
        const type2B = this.props.typeB;

        return(
            <div className={classB}>
                <button className={typeB} type={type2B}>{textB}</button>
            </div>
        );
    }
}

export default ButtonsClassInFile;