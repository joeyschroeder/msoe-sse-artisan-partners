import React from 'react';
import PropTypes from 'prop-types';
import styles from './app.module.scss';

export function App(props) {
  const { children } = props;
  return <div className={styles.root}>{children}</div>;
}

App.propTypes = {
  children: PropTypes.node,
};

App.defaultProps = {
  children: null,
};
