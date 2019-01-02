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
    padding: 0 15px;
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
    outline: 1px solid green;
    margin-top: 11px;
`;

const ContentWrapper = styled.div`
    outline: 1px solid blue;
`;

const TagWrapper = styled.div`
    outline: 1px solid red;
    margin-top: 4px;
    color: #6e8f9c;
`;

const ViewComment = styled.div`
    outline: 1px solid gray;
    margin-top: 4px;
    height: 22px;
    color: #aaaaaa;
`;

const Button = (logo) => {
  const isLike = logo === 'like' ? Like : Comment;
  const buttonStyle = {
    height: '14px',
    width: '16px',
  };
  return (
    <img style={buttonStyle} src={isLike} alt={Like ? 'like' : 'comment'} />
  );
};

const PostItemFooter = ({
  content, tags, name,
}) => {
  return (
    <FooterWrapper>
      <div style={{ outline: '1px solid coral', height: '14px' }}>
        <Button />
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
