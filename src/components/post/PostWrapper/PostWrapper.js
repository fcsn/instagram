import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class PostWrapper extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div style={{ height: '100vh', width: '100vw' }}>
        { children }
      </div>
    );
  }
}

PostWrapper.propTypes = {
  children: PropTypes.object,
};

PostWrapper.defaultProps = {
  children: null,
};

export default PostWrapper;
