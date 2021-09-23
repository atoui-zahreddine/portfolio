import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Filter = ({ categories, selectedCategory, selectCategory }) => {
  const filters = categories.map((category) => (
    <button
      type="button"
      onClick={() => selectCategory(category.id)}
      key={category.id}
      className={`cta-btn cta-btn--hero mt-4 mr-4 p-4 ${
        category.id === selectedCategory ? 'cta-btn--hero__active' : ''
      } `}
    >
      {category.name}
    </button>
  ));
  return (
    <Container>
      <Fade bottom duration={1000} delay={300} distance="0px">
        <Row className="justify-content-center ">{filters}</Row>
      </Fade>
    </Container>
  );
};

Filter.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string }, { id: PropTypes.number })
  ),
  selectedCategory: PropTypes.number,
  selectCategory: PropTypes.func,
};

export default Filter;
