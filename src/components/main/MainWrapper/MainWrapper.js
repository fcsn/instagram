import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

class MainWrapper extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Wrapper>
        { children }
      </Wrapper>
    );
  }
}

MainWrapper.propTypes = {
  children: PropTypes.object,
};

MainWrapper.defaultProps = {
  children: null,
};

export default MainWrapper;
