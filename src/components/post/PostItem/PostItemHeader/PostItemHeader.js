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

const ItemHeader = styled.div`;
    display: flex;
    padding: 8px 15px 8px 15px;
`;

const LocationWrapper = styled.div`
    display: flex;
    font-family: AppleSDGothicNeo;
    font-size: 13px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    color: #aaaaaa;
    height: 18px;
`;

const ImageWrapper = styled.div`
    width: 38px;
    height: 38px;
`;

const CenterWrapper = styled.div`
    margin-left: 12px;
    display: flex;
    flex-direction: column;
`;

const OptionWrapper = styled.div`
    flex: 1 1 auto;
    display: flex;
    justify-content: space-between;
`;

const CircleWrapper = styled.div`
    margin-top: 6px;
`;

const Circle = styled.span`
    height: 5px;
    width: 5px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    margin-left: 3px;
`;

const imgStyle = {
  width: '100%',
  height: '100%',
};

const PostItemHeader = ({
  name, location,
}) => {
  return (
    <ItemHeader>
      <ImageWrapper>
        <img src={Location} style={imgStyle} alt="profile" />
      </ImageWrapper>

      <CenterWrapper>
        <Name>{name}</Name>
        <LocationWrapper>
          <img width={8} height={10} style={{ marginTop: '3px' }} src={Location} alt="location" />
          <div style={{ height: '100%', marginLeft: '4px' }}>{location}</div>
        </LocationWrapper>
      </CenterWrapper>

      <OptionWrapper>
        <div />
        <CircleWrapper>
          <Circle />
          <Circle />
          <Circle />
        </CircleWrapper>
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
