import React from 'react';
import './searchBar.css';

function SearchBar() {
  return (
    <div className='search-bar'>
        <form className='search-form d-flex align-items-center'
            method="POST"
            action='0'
            >
                <input
                type='text'
                name='query'
                placeholder='search'
                title='Enter search keyword'
                />
                <button type='submit' title='search'>
                    <i className='bi bi-search'></i>
                </button>
        </form>
    </div>
  );
}

export default SearchBar