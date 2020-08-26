import React from "react";
import { Stocks } from '/home/sergey/proj/react/boot_react_regist/src/Stocks'

function tableSearch() {
    let phrase = document.getElementById('myInput');
    let table = document.getElementById('table1');
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }
    }
}

// function random_table() {
//     let tableArr=['<table>'];
//     for (let i = 1; i < 10; i++){
//         tableArr.push('<tr><td>'+i+'</td></tr>');
//     }
//     tableArr.push('</table>');
//
// }

// function myFunction() {
//     let input, filter, table, tr, td, i;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("table1");
//     tr = table.getElementsByTagName("tr");
//     for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[0];
//         if (td) {
//             if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//             }
//         }
//     }
// }

class MainComponent extends React.Component {
    render() {
        return (
            <div className="main white_fon">
                <div className="">
                    {/*<ul className="nav justify-content-end navbar-dark bg-dark">*/}
                    {/*    <li className="nav-item">*/}
                    {/*        <a className="nav-link" href="#">Настройки</a>*/}
                    {/*    </li>*/}
                    {/*    <li className="nav-item">*/}
                    {/*        <a className="nav-link" href="#">Профиль</a>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <p>*/}
                    {/*            <button className="btn btn-primary margin_left20" type="button" data-toggle="collapse"*/}
                    {/*                    data-target="#collapseExample"*/}
                    {/*                    aria-expanded="false" aria-controls="collapseExample">*/}
                    {/*                Кнопка с data-target*/}
                    {/*            </button>*/}
                    {/*        </p>*/}
                    {/*    </li>*/}
                    {/*</ul>*/}
                    <div className="fixed-top">
                        <div className="collapse" id="navbarToggleExternalContent">
                            <div className="bg-dark p-4">
                                <h5 className="text-white h4">Collapsed content</h5>
                                <span className="text-muted">Toggleable via the navbar brand.</span>
                            </div>
                        </div>
                        <nav className="navbar navbar-dark bg-dark">
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#collapseExample"
                                    aria-controls="navbarToggleExternalContent" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <li className="nav-item">
                                <a className="margin_right5px" href="#">Настройки</a>
                                <a className="" href="#">Профиль</a>
                            </li>
                        </nav>
                    </div>
                </div>
                <div className="filter_button left_staff">
                    <div className="collapse left_staff" id="collapseExample">
                        <div className="card card-body left_staff bg-dark">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Что-то работает</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Что-то</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Что-то</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Что-то</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Что-то</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Что-то</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Что-то</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Что-то</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Что-то</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="margin_left9p margin_right20p margin_top5">
                    <input type="text" id="myInput" onKeyUp={tableSearch} placeholder="Search"
                           title="Type in a name"/>
                    <table className="table table-bordered" id="table1">
                        <caption>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item disabled ">
                                        <a className="page-link bg-dark" href="#" tabIndex="-1"
                                           aria-disabled="true">Previous</a>
                                    </li>
                                    <li className="page-item"><a className="page-link bg-dark" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link bg-dark" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link bg-dark" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link bg-dark" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </caption>
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">login</th>
                            <th scope="col">Имя</th>
                            <th scope="col">Фамилия</th>
                            <th scope="col">email</th>
                        </tr>
                        </thead>
                        <tbody>
                        <Stocks />
                        {/*<tr>*/}
                        {/*    <th scope="row">1</th>*/}
                        {/*    <td>mr</td>*/}
                        {/*    <td>Mark</td>*/}
                        {/*    <td>Otto</td>*/}
                        {/*    <td>lol@md.su</td>*/}
                        {/*</tr>*/}
                        {/*<tr>*/}
                        {/*    <th scope="row">2</th>*/}
                        {/*    <td>mr2</td>*/}
                        {/*    <td>Mar2k</td>*/}
                        {/*    <td>Ot2to</td>*/}
                        {/*    <td>lol@md.su</td>*/}
                        {/*</tr>*/}
                        {/*<tr>*/}
                        {/*    <th scope="row">3</th>*/}
                        {/*    <td>mr3</td>*/}
                        {/*    <td>Mark3</td>*/}
                        {/*    <td>Otto3</td>*/}
                        {/*    <td>lol@md.su</td>*/}
                        {/*</tr>*/}

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default MainComponent;