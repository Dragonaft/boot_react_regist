import React from 'react';

import '/home/sergey/proj/react/boot_react_regist/src/App.css';

class FontClassInFile extends React.Component {

    render() {

        const textM = this.props.textM;
        const textS = this.props.textS;

        return(
            <div>
                <h1 className="centerText ">{textM}</h1>
                <h2 className="centerText font_weight_100 font_size_16">{textS}</h2>
            </div>
        );
    }
}
export default FontClassInFile;