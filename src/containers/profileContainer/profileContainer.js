import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Box = styled.div`
    width: 100%;
    height: 100%;
    background: #f6f6f6;
`;

const Face = styled.span`
    height: 38px;
    width: 38px;
    background-color: red;
    border-radius: 50%;
    display: inline-block;
    margin-left: 3px;
`;

const ChangeButton = styled.div`
    margin: 16px auto;
    width: 161px;
    height: 38px;
    border-radius: 6px;
    border: 1px solid #4a90e2;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ButtonInner = styled.div`
    font-family: AppleSDGothicNeo;
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.14;
    letter-spacing: -0.3px;
    text-align: center;
    color: #4a90e2;
`;

class ProfileContainer extends React.Component {
  render() {
    return (
      <Box>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
          <Face />
        </div>
        <ChangeButton>
          <ButtonInner>
            Change Profile
          </ButtonInner>
        </ChangeButton>
      </Box>
    );
  }
}

ProfileContainer.propTypes = {
};

ProfileContainer.defaultProps = {
};

export default ProfileContainer;
