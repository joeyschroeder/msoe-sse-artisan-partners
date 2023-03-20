import PropTypes from 'prop-types';
import React from 'react';
import styles from './block-button.module.scss';

export function BlockButton(props) {
  const { children, onClick } = props;

  return (
    <button className={styles.root} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

BlockButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

BlockButton.defaultProps = {
  children: null,
  onClick: null,
};
