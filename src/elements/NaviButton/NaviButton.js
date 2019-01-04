import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NaviButton = ({ imgName }) => {
  return (
    <img style={{ marginTop: '15px' }} width={20} height={20} src={imgName} />
  );
};

NaviButton.propTypes = {
  imgName: PropTypes.string,
};
NaviButton.defaultProps = {
  imgName: '',
};

export default NaviButton;
