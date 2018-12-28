import React from 'react';
import MainContainer from '../../containers/mainContainer/mainContainer';
import MainWrapper from '../../components/main/MainWrapper/MainWrapper';

class MainPage extends React.Component {
  render() {
    return (
      <MainWrapper>
        <MainContainer />
      </MainWrapper>
    );
  }
}

export default MainPage;
