import { useState, useEffect } from 'react';
import { LoadingSpinner } from '../utils/LoadingSpinner';
import Card from './Card';
export default function Products({category=""}) {
  const [products, setProducts] = useState([]);
  
  async function getProducts() {
    await fetch(`https://pg-delsur.herokuapp.com/products?categoryId=${category}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products)
      })
      .catch((error) => console.log('Hubo un problema con la petición Fetch:' + error.message));
  }

  useEffect(() => {
    // getProducts().then((data) => setProducts(data));
    getProducts();
    
  }, [category]);

  return (
    <div className="container">
      <div className="products">
        {products?.length > 0 ? (
          products?.map((product) => {
            return <Card name={product.name} id={product.id} cost={product.cost} key={product.id} image={product.image[0]}></Card>;
          })
        ) : (
          <LoadingSpinner/> )}
      </div>
    </div>
  );
}
