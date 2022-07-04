import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Products from '../components/Products'

export const CategoriesProducts = () => {
  const { id } = useParams();
  useEffect(()=>{
    
  })
  return (
    <div>
        <Products category={id}></Products>
    </div>
  )
}
