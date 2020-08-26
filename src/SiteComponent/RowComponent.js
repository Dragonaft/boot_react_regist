import React from 'react';
import {stockData} from '/home/sergey/proj/react/boot_react_regist/src/data.js';

class RowComponent extends React.Component {

    render() {
        const {data} = this.props;

        return (
            <>

                {stockData.map((data, key) => {
                    return (
                        <tr key={key}>
                            <th scope="row"> {data.id} </th>
                            <td>  {data.login}</td>
                            <td>   {data.name}</td>
                            <td>   {data.surname}</td>
                            <td>  {data.email}</td>
                        </tr>
                    );
                })}

            </>
        );
    }
}

export default RowComponent;
