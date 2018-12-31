import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PostItemHeader from './PostItemHeader/PostItemHeader';

const PostItemWrapper = styled.div`
  margin-top: 13px;
  margin-left: 7px;
  margin-right: 7px;
  height: 1000px;
  border-radius: 5px;
  border: 1px solid white;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.03);
`;

const PostItem = ({
  name, location, content, tags,
}) => {
  return (
    <PostItemWrapper>
      <PostItemHeader
        name={name}
        location={location}
      />
      {name}
    </PostItemWrapper>
  );
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

export default PostItem;
