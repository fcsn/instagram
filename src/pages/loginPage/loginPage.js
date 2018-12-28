import React from 'react';
import LoginContainer from '../../containers/loginContainer/loginContainer';
import MainWrapper from '../../components/main/MainWrapper/MainWrapper';

class LoginPage extends React.Component {
  render() {
    return (
      <MainWrapper>
        <LoginContainer />
      </MainWrapper>
    );
  }
}

export default LoginPage;
