import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heart from '../../static/img/navi/heart.png';
import Home from '../../static/img/navi/home.png';
import Plus from '../../static/img/navi/plus.png';
import Profile from '../../static/img/navi/profile.png';
import Search from '../../static/img/navi/search.png';
import NaviButton from '../../elements/NaviButton/NaviButton';

const FooterWrapper = styled.div`
    width: 100px;
    position: fixed;
    width: 100%;
    height: 50px;
    bottom: 0;
    left: 0;
    line-height: 50px;
    display: flex;
    background: rgb(255, 255, 255);
    border-top: 1px solid #e0e0e0;
    justify-content: space-around;
`;

const imgList = [Home, Search, Plus, Heart, Profile];

const ButtonList = imgList.map((img) => {
  return (
    <div>
      <NaviButton imgName={img} alt="naviImg" />
    </div>
  );
});

const Footer = () => {
  return (
    <FooterWrapper>
      {ButtonList}
    </FooterWrapper>
  );
};

Footer.propTypes = {
};

Footer.defaultProps = {
};

export default Footer;
