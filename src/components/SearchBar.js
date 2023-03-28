import React from 'react'

const SearchBar = ({filteredText, isStockOnly, onFilteredTextChange, onInStockOnlyChange}) => {

  const handleChange = (e) => {
    onFilteredTextChange(e.target.value)
    console.log(e.target.value);
  }

  const handleInStock = (e) => {
    onInStockOnlyChange(e.target.checked)
    console.log(e.target.checked);
  }

  return (
    <form action="" className='search-bar'>
      <input 
        type="text"
        value={filteredText}
        onChange={handleChange}
        placeholder='search...'
       />
       <label htmlFor="">
        <input type="checkbox" checked={isStockOnly} onChange={handleInStock} />
        {' '}
        check for stock products
       </label>
    </form>
  )
}

export default SearchBar