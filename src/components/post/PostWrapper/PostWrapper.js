import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  outline: 1px solid blue;
`;

class PostWrapper extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
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
