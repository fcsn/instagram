import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Outline = styled.div`
  width: 247px;
  height: 40px;
  border-radius: 20px;
  background-color: ${props => props.background || '#ffffff'};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.textOrder || 'center'};
  border: 1px solid ${props => props.borderColor || '#2c2c2c'};
  color: ${props => props.textColor || '#2c2c2c'};
  font-family: AppleSDGothicNeo;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.14;
  letter-spacing: -0.3px;
  & + div {
    margin-top: 1rem;
  }
  & + input {
    margin-top: 1rem;
  }
`;

const Button = ({
  children, borderColor, textColor, textOrder, background, handleClick,
}) => {
  return (
    <Outline onClick={handleClick} borderColor={borderColor} textColor={textColor} textOrder={textOrder} background={background}>
      { children }
    </Outline>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
  textOrder: PropTypes.string,
  background: PropTypes.string,
  handleClick: PropTypes.func,
};
Button.defaultProps = {
  children: '',
  borderColor: null,
  textColor: null,
  textOrder: null,
  background: null,
  handleClick: null,
};

export default Button;
