import Pagination from 'react-bootstrap/Pagination';

const RenderPagination = (prop) => {
    let { totalPages, currentPage, onPageChange } = prop;

    const handlePageChange = (page) => {
        onPageChange(page);
    };

    const renderPaginationItems = () => {
        const items = [];
        const maxVisibleButtons = 10;

        let startPage = 1;
        let endPage = totalPages;

        if (totalPages > maxVisibleButtons) {
            const half = Math.floor(maxVisibleButtons / 2);
            startPage = Math.max(currentPage - half, 1);
            endPage = startPage + maxVisibleButtons - 1;

            if (endPage > totalPages) {
                endPage = totalPages;
                startPage = endPage - maxVisibleButtons + 1;
            }
        }

        for (let number = startPage; number <= endPage; number++) {
            items.push(
                <Pagination.Item
                    key={number}
                    active={number === currentPage}
                    onClick={() => handlePageChange(number)}
                >
                    {number}
                </Pagination.Item>
            );
        }

        const newValue = <Pagination.Ellipsis key="ellipsis" />;
        const middleIndex = Math.floor(items.length / 2);
        items.splice(middleIndex, 0, newValue);

        return items;
    };

    return (
        <Pagination className="justify-content-center">
            <Pagination.Prev
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
            />
            {renderPaginationItems()}
            <Pagination.Next
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
            />
        </Pagination>
    );
};

export default RenderPagination;
