import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'react-bootstrap';

const Page = ({ currentPage, itemsCount, pageSize, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;

  const pages = [...Array(pagesCount).keys()].map((i) => i + 1);

  return (
    <Pagination size="lg" className="justify-content-center">
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          active={page === currentPage}
          className="mr-4"
          onClick={() => {
            onPageChange(page);
          }}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

Page.propTypes = {
  currentPage: PropTypes.number.isRequired,
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Page;
