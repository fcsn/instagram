import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Button from '../../elements/Button/Button';
import Logo from '../../static/img/logo.png';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 136px;
`;

class MainContainer extends React.Component {
  handleGoLogin = () => {
    const { history } = this.props;
    history.push('/login');
  };

  handleGoRegister = () => {
    const { history } = this.props;
    history.push('/register');
  };

  render() {
    const { handleGoLogin, handleGoRegister } = this;
    return (
      <Box>
        <img src={Logo} width={94} alt="logo" style={{ marginBottom: '236px' }} />
        <Button handleClick={handleGoLogin}>Login</Button>
        <Button handleClick={handleGoRegister} borderColor="#4a90e2" textColor="#4a90e2">Register</Button>
      </Box>
    );
  }
}

MainContainer.propTypes = {
  history: PropTypes.object,
};

MainContainer.defaultProps = {
  history: null,
};

export default withRouter(MainContainer);
