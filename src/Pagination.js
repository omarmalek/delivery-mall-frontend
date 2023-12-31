import React, { useEffect, useState } from "react";
import './styles/Pagination.css'
// import { useGlobalContext } from "./context";

function Pagination({page, setPage}) {
  // const [page, setPage] = useState(1);
  //const { page, selectPage } = useGlobalContext();

  const [pageListIcons, setPageListIcon] = useState([1, 2, 3, 4, 5]);
//------------------------------Effect -------------------------------
  useEffect(() => {
   if (page === "...") {};
    if (page <= 4 ) {
      setPageListIcon([1, 2, 3, 4, 5]);
    }
    if (page > 4) {
      const center = page;
      setPageListIcon([
        1,
        2,
        "...",
        center - 2,
        center - 1,
        center,
        center + 1,
        center + 2,
      ]);
    }
  }, [page]);
  //------------------------------ functions ----------------------
  const selectPage = (pageLabel) => {    
    setPage(pageLabel);
  };
  const getNextPage = () => {
    selectPage(page + 1);
  };
  const getPrevPage = () => {
    if (page > 1) selectPage(page - 1);
  };
  const asignPage = (label) => {
    // let selectedPage = parseInt(e.target.value);
    selectPage(label);
  };
  //________________________________________ UI ________________________________
  return (
    <div className="pagination-component">
      <div className="pagination">
        <button onClick={getPrevPage}>&laquo; السابق</button>
        {pageListIcons.map((label) => {
          return (
            <button
              key={label}
              className={label === page ? "active" : ""}
              onClick={() => asignPage(label)}
            >
              {label}
            </button>
          );
        })}

        <button onClick={getNextPage}>التالي &raquo;</button>
      </div>
    </div>
  );
}

export default Pagination;