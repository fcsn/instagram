import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const CommonHeaderWrapper = styled.div`
    height: 64px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ececec;
`;

const Left = styled.div`
    flex: 1 1 auto;
`;

const Middle = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
`;

const NameWrapper = styled.div`
    font-family: AppleSDGothicNeo;
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.13;
    letter-spacing: -0.3px;
    text-align: center;
    color: #030303;
`;

const Right = styled.div`
    flex: 1 1 auto;
`;

class CommonHeader extends React.Component {
    handleGoMain = () => {
      const { history } = this.props;
      history.push('/');
    };

    render() {
      const { compoName, isBack } = this.props;
      return (
        <CommonHeaderWrapper>
          { isBack ? <Left>l</Left> : <div>&nbsp;</div>}
          <Middle>
            <NameWrapper>
              {compoName}
            </NameWrapper>
          </Middle>
          <Right>
                    r
          </Right>
        </CommonHeaderWrapper>
      );
    }
}

CommonHeader.propTypes = {
  history: PropTypes.object,
  compoName: PropTypes.string,
  isBack: PropTypes.string,
};

CommonHeader.defaultProps = {
  history: null,
  compoName: null,
  isBack: null,
};

export default withRouter(CommonHeader);
