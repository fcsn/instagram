import React from 'react';
import styled from 'styled-components';
import Button from '../../elements/Button/Button';
import Input from '../../elements/Input/Input';
import Logo from '../../static/img/logo.png';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 136px;
`;

const LoginContainer = () => {
  return (
    <Box color="white">
      <img src={Logo} width={94} alt="logo" style={{ marginBottom: '236px' }} />
      <Input inputType="text" textColor="#aaaaaa" borderColor="#aaaaaa" placeholder="nickname" />
      <Input inputType="text" textColor="#aaaaaa" borderColor="#aaaaaa" placeholder="email" />
      <Input inputType="password" textColor="#aaaaaa" borderColor="#aaaaaa" placeholder="password" />
      <Button background="#4a90e2" borderColor="#4a90e2" textColor="#ffffff">Register</Button>
    </Box>
  );
};

export default LoginContainer;
