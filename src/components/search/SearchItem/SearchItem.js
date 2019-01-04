import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Search from '../../../static/img/search.png';

const SearchItemWrapper = styled.div`
    height: 57px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    font-family: AppleSDGothicNeo;
    background: #f6f6f6;
    display: flex;
`;

const SearchText = styled.div`
    flex: 1 1 auto;
    border-bottom: 1px solid #ebebeb;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const SearchItem = ({
  name, location, content, tags,
}) => {
  return (
    <SearchItemWrapper>
      <div style={{ padding: '18px 25px 22px 16px' }}>
        <img width={13} height={17} src={Search} alt="search tag" />
      </div>
      <SearchText>
        <div style={{ fontSize: '14px' }}>{`#${name}`}</div>
        <div style={{ fontSize: '13px', color: '#aaaaaa' }}>{location}</div>
      </SearchText>
    </SearchItemWrapper>
  );
};

SearchItem.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  content: PropTypes.string,
  tags: PropTypes.array,
};

SearchItem.defaultProps = {
  name: null,
  location: null,
  content: null,
  tags: [],
};

export default SearchItem;
