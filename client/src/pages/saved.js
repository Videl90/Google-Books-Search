import React from 'react';
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import BookSearch from '../components/BookSearch'
import Results from '../components/Results'

function SearchPage() {
  return (
      <>
        <Navbar></Navbar>
        <Header></Header>
        <BookSearch></BookSearch>
        <Results books-status="Saved Books"></Results>
      </>
 
  );
}

export default SearchPage;