import React from 'react';
import PostWrapper from '../../components/post/PostWrapper/PostWrapper';
import PostContainer from '../../containers/postContainer/postContainer';

class MainPage extends React.Component {
  render() {
    return (
      <PostWrapper>
        <PostContainer />
      </PostWrapper>
    );
  }
}

export default MainPage;
