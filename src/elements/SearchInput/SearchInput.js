import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  all: unset;
  width: 292px;
  height: 26px;
  border-radius: 100px;
  background-color: #eaeaea;
  text-align: left;
  margin-top: 26px;
  margin-left: 8px;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.textOrder || 'center'};
  border: 1px solid ${props => props.borderColor || '#eaeaea'};
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

class SearchInput extends React.Component {
  render() {
    const {
      children, borderColor, textColor, textOrder, background, placeholder, inputType, getText,
    } = this.props;
    return (
      <Input
        onChange={getText}
        placeholder={placeholder}
        type={inputType}
        borderColor={borderColor}
        textColor={textColor}
        textOrder={textOrder}
        background={background}
      />
    );
  }
}

SearchInput.propTypes = {
  children: PropTypes.string,
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
  textOrder: PropTypes.string,
  background: PropTypes.string,
  placeholder: PropTypes.string,
  inputType: PropTypes.string,
  getText: PropTypes.func,
};
SearchInput.defaultProps = {
  children: '',
  borderColor: null,
  textColor: null,
  textOrder: null,
  background: null,
  placeholder: null,
  inputType: 'text',
  getText: () => null,
};

export default SearchInput;
