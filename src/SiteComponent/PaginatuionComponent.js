import React from 'react';


class PaginationComponent extends React.Component {

    render() {

        return(

            <ul className="pagination pg-blue justify-content-center ">
                <li class="page-item"><a class="page-link">Previous</a></li>
                <li class="page-item"><a class="page-link">1</a></li>
                <li class="page-item"><a class="page-link">2</a></li>
                <li class="page-item"><a class="page-link">3</a></li>
                <li class="page-item"><a class="page-link">Next</a></li>
            </ul>
        )
    }
}

export default PaginationComponent;
