import React from 'react';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

const ProductTable = ({ products, filteredText, isStockOnly }) => {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if(product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow category={product.category} key={product.category} />
      )
    }
    rows.push(
      <ProductRow product={product} key={product.name} />
    )
    lastCategory = product.category
  })

  return (
    <table>
      {/* <caption>Council budget (in £) 2018</caption> */}
      <thead>
          <tr>
            <th>Name</th>
            <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
           {rows}
      </tbody>
    </table>
  )
}

export default ProductTable