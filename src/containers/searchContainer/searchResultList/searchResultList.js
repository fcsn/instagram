import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SearchItem from '../../../components/search/SearchItem/SearchItem';

class SearchResultList extends React.Component {
  state = {
    searchedList: [
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
      }, {
        name: 'cooler',
        location: 'Kauai, Hawaii',
        content: 'the edge of New Zealand! we\'re so excited! i will remember this amzing view forever.',
        tags: ['#newzealand', '#sight', '#family'],
        id: 4,
      }, {
        name: 'cooler',
        location: 'Kauai, Hawaii',
        content: 'the edge of New Zealand! we\'re so excited! i will remember this amzing view forever.',
        tags: ['#newzealand', '#sight', '#family'],
        id: 5,
      }, {
        name: 'cooler',
        location: 'Kauai, Hawaii',
        content: 'the edge of New Zealand! we\'re so excited! i will remember this amzing view forever.',
        tags: ['#newzealand', '#sight', '#family'],
        id: 6,
      }, {
        name: 'cooler',
        location: 'Kauai, Hawaii',
        content: 'the edge of New Zealand! we\'re so excited! i will remember this amzing view forever.',
        tags: ['#newzealand', '#sight', '#family'],
        id: 7,
      }, {
        name: 'cooler',
        location: 'Kauai, Hawaii',
        content: 'the edge of New Zealand! we\'re so excited! i will remember this amzing view forever.',
        tags: ['#newzealand', '#sight', '#family'],
        id: 8,
      }, {
        name: 'cooler',
        location: 'Kauai, Hawaii',
        content: 'the edge of New Zealand! we\'re so excited! i will remember this amzing view forever.',
        tags: ['#newzealand', '#sight', '#family'],
        id: 9,
      }, {
        name: 'cooler',
        location: 'Kauai, Hawaii',
        content: 'the edge of New Zealand! we\'re so excited! i will remember this amzing view forever.',
        tags: ['#newzealand', '#sight', '#family'],
        id: 10,
      }, {
        name: 'cooler',
        location: 'Kauai, Hawaii',
        content: 'the edge of New Zealand! we\'re so excited! i will remember this amzing view forever.',
        tags: ['#newzealand', '#sight', '#family'],
        id: 11,
      }, {
        name: 'cooler',
        location: 'Kauai, Hawaii',
        content: 'the edge of New Zealand! we\'re so excited! i will remember this amzing view forever.',
        tags: ['#newzealand', '#sight', '#family'],
        id: 12,
      }, {
        name: 'cooler',
        location: 'Kauai, Hawaii',
        content: 'the edge of New Zealand! we\'re so excited! i will remember this amzing view forever.',
        tags: ['#newzealand', '#sight', '#family'],
        id: 13,
      },
    ],
  };

  render() {
    const { searchedList } = this.state;
    const searchList = searchedList.map((item) => {
      const {
        name, location, content, tags, id,
      } = item;
      return (
        <SearchItem
          key={id}
          name={name}
          location={location}
          content={content}
          tags={tags}
        />
      );
    });
    return (
      <div>{searchList}</div>
    );
  }
}

SearchResultList.propTypes = {
};

SearchResultList.defaultProps = {
};

export default SearchResultList;
