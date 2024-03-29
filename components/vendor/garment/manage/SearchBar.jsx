import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ curState, raiseState, styles }) {
  const changeHandler = (event) => {
    raiseState(event.target.value);
  };
  return (
    <div className={styles.div}>
      <p>Search Garments</p>
      <input
        className={styles.input}
        type="text"
        value={curState}
        onChange={changeHandler}
      />
    </div>
  );
}

SearchBar.propTypes = {
  curState: PropTypes.string.isRequired,
  raiseState: PropTypes.func.isRequired,
  styles: PropTypes.exact({
    div: PropTypes.string,
    input: PropTypes.string,
  }),
};

SearchBar.defaultProps = {
  styles: {
    div: null,
    input: null,
  },
};

export default SearchBar;
