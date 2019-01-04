import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Outline = styled.input`
  all: unset;
  width: 213px;
  height: 40px;
  border-radius: 20px;
  background-color: ${props => props.background || '#ffffff'};
  text-align: left;
  padding-left: 1rem;
  padding-right: 1rem;
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
  ::placeholder {
    color: ${props => props.textColor || '#2c2c2c'};
  }
  & + div {
    margin-top: 1rem;
  }
  & + input {
    margin-top: 1rem;
  }
`;

const Input = ({
  children, borderColor, textColor, textOrder, background, placeholder, inputType,
}) => {
  return (
    <Outline placeholder={placeholder} type={inputType} borderColor={borderColor} textColor={textColor} textOrder={textOrder} background={background} />
  );
};

Input.propTypes = {
  children: PropTypes.string,
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
  textOrder: PropTypes.string,
  background: PropTypes.string,
  placeholder: PropTypes.string,
  inputType: PropTypes.string,
};
Input.defaultProps = {
  children: '',
  borderColor: null,
  textColor: null,
  textOrder: null,
  background: null,
  placeholder: null,
  inputType: 'text',
};

export default Input;
