import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from '../../../static/img/logo.png';
import PostItem from '../PostItem/PostItem';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class PostList extends React.Component {
  state = {
    posts: [
      {
        name: 'sarah',
        location: 'Kauai, Hawaii',
        content: 'the edge of New Zealand! we\'re so excited! i will remember this amzing view forever.',
        tags: ['#newzealand', '#sight', '#family'],
        id: 1,
      }, {
        name: 'charlie',
        location: 'Kauai, Hawaii',
        content: 'the edge of New Zealand! we\'re so excited! i will remember this amzing view forever.',
        tags: ['#newzealand', '#sight', '#family'],
        id: 2,
      }, {
        name: 'cooler',
        location: 'Kauai, Hawaii',
        content: 'the edge of New Zealand! we\'re so excited! i will remember this amzing view forever.',
        tags: ['#newzealand', '#sight', '#family'],
        id: 3,
      },
    ],
  };

  render() {
    const { posts } = this.state;
    const postList = posts.map((post) => {
      const {
        name, location, content, tags, id,
      } = post;
      return (
        <PostItem
          key={id}
          name={name}
          location={location}
          content={content}
          tags={tags}
        />
      );
    });
    return (
      <Box>
        <Header>
          <img src={Logo} width={94} alt="logo" />
        </Header>
        {postList}
      </Box>
    );
  }
}

PostList.propTypes = {
};

PostList.defaultProps = {
};

export default PostList;
