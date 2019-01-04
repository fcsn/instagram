import React from 'react';
import MainWrapper from '../../components/main/MainWrapper/MainWrapper';
import SearchContainer from '../../containers/searchContainer/searchContainer';

class SearchPage extends React.Component {
  getText = e => console.log(e.target.value);

  render() {
    const { getText } = this;
    return (
      <MainWrapper>
        <SearchContainer
          getText={getText}
        />
      </MainWrapper>
    );
  }
}

export default SearchPage;
