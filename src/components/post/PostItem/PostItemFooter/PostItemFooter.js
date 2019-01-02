import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Comment from '../../../../static/img/comment.png';
import Like from '../../../../static/img/like.png';

// font-family: AppleSDGothicNeo;
// font-size: 13px;
// font-weight: normal;
// font-style: normal;
// font-stretch: normal;
const FooterWrapper = styled.div`
    padding: 12px 15px 8px 15px;
    font-family: AppleSDGothicNeo;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    text-align: left;
`;

const NameWrapper = styled.div`
    height: 22px;
    margin-top: 11px;
    color: #2c2c2c;
`;

const ContentWrapper = styled.div`
    padding: 5px 0;
    color: #aaaaaa;
`;

const TagWrapper = styled.div`
    padding: 2.5px 0;
    margin-top: 4px;
    color: #6e8f9c;
`;

const ViewComment = styled.div`
    padding: 2.5px 0;
    margin-top: 4px;
    height: 22px;
    color: #aaaaaa;
`;

const LikeButton = () => {
  const buttonStyle = {
    height: '14px',
    width: '16px',
  };
  return (
    <img style={buttonStyle} src={Like} alt="like" />
  );
};

const CommentButton = () => {
  const buttonStyle = {
    height: '14px',
    width: '16px',
    marginLeft: '16px',
  };
  return (
    <img style={buttonStyle} src={Comment} alt="comment" />
  );
};

const PostItemFooter = ({
  content, tags, name,
}) => {
  const like = 'like';
  return (
    <FooterWrapper>
      <div style={{ height: '14px' }}>
        <LikeButton />
        <CommentButton />
      </div>
      <NameWrapper>
        {name}
      </NameWrapper>
      <ContentWrapper>
        {content}
      </ContentWrapper>
      <TagWrapper>
        {tags}
      </TagWrapper>
      <ViewComment>
          View all comments
      </ViewComment>
    </FooterWrapper>
  );
};

PostItemFooter.propTypes = {
  content: PropTypes.string,
  tags: PropTypes.string,
  name: PropTypes.string,
};

PostItemFooter.defaultProps = {
  content: null,
  tags: null,
  name: null,
};

export default PostItemFooter;
