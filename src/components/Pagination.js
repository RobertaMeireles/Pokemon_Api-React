import React from 'react'

function Pagination({NextPage,PreviousPage}) {

    return (
        <div className="pagination">

                {PreviousPage && <button onClick={PreviousPage}>Previous</button>}

                {NextPage && <button onClick={NextPage}>Next</button>}
        </div>
    );
  }
  
  export default Pagination
  