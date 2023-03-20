import React from 'react';
import PropTypes from 'prop-types';

export function Comment(props) {
  const { author, children, title } = props;

  return (
    <div>
      <h3>{title}</h3>
      <em>{author}</em>
      <div>{children}</div>
    </div>
  );
}

Comment.propTypes = {
  author: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
};

Comment.defaultProps = {
  author: '',
  children: null,
  title: '',
};
