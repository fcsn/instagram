import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import PostList from '../../components/post/PostList/PostList';

class MainContainer extends React.Component {
    handleGoMain = () => {
      const { history } = this.props;
      history.push('/');
    };

    render() {
      const { handleGoMain } = this;
      return (
        <PostList />
      );
    }
}

MainContainer.propTypes = {
  history: PropTypes.object,
};

MainContainer.defaultProps = {
  history: null,
};

export default withRouter(MainContainer);
