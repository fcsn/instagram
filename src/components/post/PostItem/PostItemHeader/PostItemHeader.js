import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Location from '../../../../static/img/location.png';

const Name = styled.div`
    font-family: AppleSDGothicNeo;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    text-align: left;
    height: 18px;
`;

const ItemHeader = styled.div`
    display: flex;
    padding: 8px 15px 8px 15px;
`;

const LocationWrapper = styled.div`
    font-family: AppleSDGothicNeo;
    font-size: 13px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    color: #aaaaaa;
    height: 18px;
`;

const ImageWrapper = styled.div`
`;

const CenterWrapper = styled.div`
    margin-left: 12px;
    display: flex;
    flex-direction: column;
`;

const OptionWrapper = styled.div`
    
`;

const PostItemHeader = ({
  name, location,
}) => {
  return (
    <ItemHeader>
      <ImageWrapper>
        <img src={Location} width={38} height={38} alt="profile" />
      </ImageWrapper>

      <CenterWrapper>
        <Name>{name}</Name>
        <LocationWrapper>
          <img width={8} src={Location} alt="location" />
          <span style={{ maxHeight: '100%', marginLeft: '4px' }}>{location}</span>
        </LocationWrapper>
      </CenterWrapper>

      <OptionWrapper>
        <div>O O O</div>
      </OptionWrapper>
    </ItemHeader>
  );
};

PostItemHeader.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
};

PostItemHeader.defaultProps = {
  name: null,
  location: null,
};

export default PostItemHeader;
