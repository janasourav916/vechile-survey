import { memo, useMemo, useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
function Pagination({ currentPage = 1, perPage, totalData, setPage }) {
  const totalPages = Math.ceil(totalData / perPage);

  const pages = useMemo(() => {
    return [...new Array(totalPages)].map((_, i) => i + 1);
  }, [totalPages]);

  const displayPages = useMemo(() => {
    if (pages) {
      if (totalPages < 10) {
        return pages.slice(0, totalPages);
      } else {
        if (currentPage >= 5 && currentPage + 5 <= totalPages) {
          return pages.slice(currentPage - 5, currentPage + 5);
        } else if (currentPage + 5 > totalPages) {
          return pages.slice(
            currentPage - (10 - (totalPages - currentPage) - 1),
            totalPages
          );
        }
        return pages.slice(0, 10);
      }
    }
  }, [currentPage, pages, totalPages]);

  return (
    <div className={styles.pagination}>
      <ul>
        <li>
          <button
            disabled={currentPage === 1}
            onClick={() => setPage(currentPage - 1)}
          >
            Previous
          </button>
        </li>
        {displayPages.map((page, index) => (
          <li key={page}>
            <button
              className={currentPage === page ? styles.btn__active : ""}
              onClick={() => setPage(page)}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setPage(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  totalData: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired
};

export default memo(Pagination);
