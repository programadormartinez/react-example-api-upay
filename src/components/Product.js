import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { LoadingSpinner } from '../utils/LoadingSpinner';
import Card from './Card';

export const Product = () => {
  const [product, setProduct] = useState({});
  const { idProduct } = useParams();

  async function getProductById() {
    await fetch(`https://pg-delsur.herokuapp.com/products/${idProduct}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log('Hubo un problema con la petición Fetch:' + error.message));
  }

  useEffect(() => {
    // getProducts().then((data) => setProducts(data));
    getProductById();
  }, [idProduct]);

  return (
    <div>
      {product.name ? (<Card
          name={product.name}
          id={product.id}
          cost={product.cost}
          key={product.id}
          image={product.image[0]}
        ></Card>):(
          <LoadingSpinner/> )}
    </div>
  );
};
