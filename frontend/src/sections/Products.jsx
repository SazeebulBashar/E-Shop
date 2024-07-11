import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import Loader from '../components/Loader';

function Products() {

    const [products, setProducts]  = useState([]);
    const [loading, setLoading]  = useState(false);

    useEffect(()=>
    {
        setLoading(true);
        fetch('https://fakestoreapi.com/products?limit=8')
        .then(res=>res.json())
        .then(data=>setProducts(data));

        setLoading(false);

    },[]);
    
  return (
    
    <div className='m-5'>
    <h3 className='text-5xl text-blue-700 text-center text-bold my-10'>Hottest Products</h3>
    {loading ? <Loader/> :
    
    
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    {products.map((product) => <Product key={product.id} product={product}/>)}
    </div>
    }
    </div>


  );
}

export default Products;