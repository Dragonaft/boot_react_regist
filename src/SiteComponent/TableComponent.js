import React from 'react';
import RowComponent from '/home/sergey/proj/react/boot_react_regist/src/SiteComponent/RowComponent.js';
import PaginationComponent from "./PaginatuionComponent";

class TableComponent extends React.Component {
    state = {
        inputFilter: '',
        currentPage: 1,
        rowsPerPage: 20,
    };

    render () {
        const {data} = this.props;

        const {inputFilter, currentPage, rowsPerPage} = this.state;

        const filterColumn = (column) => {
            return column.toString().toLowerCase().includes(inputFilter.toLowerCase());
        };

        const searchFilter = (data) => {
            return Object.values(data).filter(filterColumn).length;
        };

        const filteredRows = data.filter(searchFilter);

        const pagesCount = Math.ceil(filteredRows.length / rowsPerPage);

        const searchFieldChanged = (event) => {
            const {value} = event.target;
            this.setState({inputFilter: value, currentPage: 1});
        };

        const indexOfLastRow = currentPage * rowsPerPage;
        const indexOfFirstRow = indexOfLastRow - rowsPerPage;

        const nextPage = () => this.setState({ currentPage: currentPage + 1 });
        const prevPage = () => this.setState({ currentPage: currentPage - 1 });
        const setPage = (number) => this.setState({ currentPage: number });

        return (
            <>
                <input className="form-control border mb-3" id="myInput" type="text" placeholder="Отфильтровать..."
                       onKeyUp={searchFieldChanged} />

                <table className="table table-hover" id='table1'>
                    <thead className="thead-dark ">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Логин</th>
                        <th scope="col">Имя</th>
                        <th scope="col">Фамилия</th>
                        <th scope="col">E-mail</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        filteredRows
                            .slice(indexOfFirstRow, indexOfLastRow)
                            .map((row) => <RowComponent key={row.uniqueId} row={row} />)
                    }
                    </tbody>

                </table>

                <nav aria-label="Page Navigation" >
                    <PaginationComponent
                        prevPage={prevPage}
                        nextPage={nextPage}
                        setPage={setPage}
                        pagesCount={pagesCount}
                        currentPage={currentPage}
                    />
                </nav>

            </>
        );
    }
}

export default TableComponent;

