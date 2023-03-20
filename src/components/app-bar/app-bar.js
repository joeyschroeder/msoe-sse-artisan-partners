import PropTypes from 'prop-types';
import React from 'react';
import styles from './app-bar.module.scss';

export function AppBar(props) {
  const { children } = props;
  return <div className={styles.root}>{children}</div>;
}

AppBar.propTypes = {
  children: PropTypes.node,
};

AppBar.defaultProps = {
  children: null,
};
