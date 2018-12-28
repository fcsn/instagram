import React from 'react';
import RegisterContainer from '../../containers/registerContainer/registerContainer';
import MainWrapper from '../../components/main/MainWrapper/MainWrapper';

class RegisterPage extends React.Component {
  render() {
    return (
      <MainWrapper>
        <RegisterContainer />
      </MainWrapper>
    );
  }
}

export default RegisterPage;
