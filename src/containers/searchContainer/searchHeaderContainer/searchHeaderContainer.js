import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SearchInput from '../../../elements/SearchInput/SearchInput';

const HeaderWrapper = styled.div`
  height: 64px;
  width: 100%;
  outline: 1px solid red;
  display: flex;
`;

const CancelButton = styled.div`
  margin-top: 16px;
  margin-left: 16px;
  height: 26px;
  font-family: AppleSDGothicNeo;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: -0.3px;
  text-align: center;
  color: #030303;
`;


class SearchHeaderContainer extends React.Component {
  render() {
    const { getText } = this.props;
    return (
      <HeaderWrapper>
        <SearchInput getText={getText} />
        <div><CancelButton>Cancel</CancelButton></div>
      </HeaderWrapper>
    );
  }
}

SearchHeaderContainer.propTypes = {
  getText: PropTypes.func,
};

SearchHeaderContainer.defaultProps = {
  getText: () => null,
};

export default SearchHeaderContainer;
