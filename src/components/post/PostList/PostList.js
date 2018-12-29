import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from '../../../static/img/logo.png';

const PostItemWrapper = styled.div`
  margin-top: 13px;
  margin-left: 7px;
  margin-right: 7px;
  height: 1000px;
  outline: 1px solid red;
  width: calc(100vw - 14px);
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  outline: 1px solid red;
`;

const PostItem = ({
  name, location, content, tags,
}) => {
  return (
    <PostItemWrapper>
      {`${name}cfwefiwjifjwijwpeijpwijpijwp`}
    </PostItemWrapper>
  );
};

class PostList extends React.Component {
  state = {
    posts: [
      {
        name: 'sarah',
        location: 'Kauai, Hawaii',
        content: 'the edge of New Zealand! we\'re so excited! i will remember this amzing view forever.',
        tags: ['#newzealand', '#sight', '#family'],
        id: 1,
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
        <img src={Logo} width={94} alt="logo" />
        {postList}
      </Box>
    );
  }
}

PostList.propTypes = {
};

PostList.defaultProps = {
};

PostItem.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  content: PropTypes.string,
  tags: PropTypes.array,
};

PostItem.defaultProps = {
  name: null,
  location: null,
  content: null,
  tags: [],
};

export default PostList;
