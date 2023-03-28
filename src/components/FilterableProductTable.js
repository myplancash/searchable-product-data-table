import React, {useState} from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = ({products}) => {

  const [filteredText, setFilteredTex] =  useState('')
  const [isStockOnly, setIsStockOnly] =  useState(true)


  return (
    <div className='filterable-product-table'>
      <SearchBar 
        filteredText={filteredText} 
        isStockOnly={isStockOnly}
        onFilteredTextChange={setFilteredTex}
        onInStockOnlyChange={setIsStockOnly}
      />
      <ProductTable 
        products={products}
        filteredText={filteredText} 
        isStockOnly={isStockOnly}
      />
    </div>
  )
}

export default FilterableProductTable