import styles from './styles.module.css';

const Pagination = ({
                        totalPages,
                        handleNextPage,
                        handlePreviousPage,
                        handlePageClick,
                        currentPage,
                    }) => {
    return (
        <div className={styles.pagination}>
            <button onClick={handlePreviousPage}
                    disabled={currentPage <= 1}
                    className={styles.arrow}>{'<'}</button>
            <div className={styles.list}>
                {[...Array(totalPages)].map((_, index) => {
                    const pageIndex = index + 1;
                    const isActive = pageIndex === currentPage;
                    return <button
                        onClick={() => handlePageClick(pageIndex)}
                        className={`${styles.pageNumber} ${isActive ? styles.activePage : ''}`}
                        key={index}
                        disabled={isActive}
                    >{pageIndex}</button>
                })}
            </div>
            <button onClick={handleNextPage}
                    className={styles.arrow}
                    disabled={currentPage >= totalPages}>{'>'}</button>
        </div>
    )
}

export default Pagination;
