import React from "react";
import "./App.css";
import {stockData} from "./data";

export const Stocks = () => {
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
};
