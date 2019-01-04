import React from 'react';
import ProfileContainer from '../../containers/profileContainer/profileContainer';
import MainWrapper from '../../components/main/MainWrapper/MainWrapper';
import CommonHeader from '../../components/common/CommonHeader/CommonHeader';
import Footer from '../../components/footer/Footer';

class ProfilePage extends React.Component {
  render() {
    const compoName = 'Profile';
    const isBack = true;
    return (
      <MainWrapper>
        <CommonHeader
          compoName={compoName}
          isBack={isBack}
        />
        <ProfileContainer />
        <Footer />
      </MainWrapper>
    );
  }
}

export default ProfilePage;
