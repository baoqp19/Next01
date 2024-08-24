import React from 'react'

const ProductDetail = ({params, searchParams}) => {
    console.log(params);
    console.log(searchParams);
    
    
  return (
    <div>
        {/*  http://localhost:3000/san-pham/4?page=3 */}
        <h1>Chi tiet san pham: {params.id}</h1>
        <h2>page: {searchParams.page}</h2>
    </div>
  )
} 

export default ProductDetail