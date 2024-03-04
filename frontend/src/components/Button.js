"use client";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add, increase } from '@/Redux/cartSlice';
import { useParams } from 'next/navigation';

function Button() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    const cartProducts = useSelector((state) => state.cart);
    const {amount} = useSelector((state) => state.cart)
    const user = useSelector((state) => state.user);
    const [product, setProduct] = useState({}) 

    const dispatch = useDispatch();

    const addCart = (product) => {
        dispatch(add(product));

      };

      const params = useParams()

  
      const id = params.id;

      useEffect(() => {
        const singleProduct = async () => {
          try {
       
            const res = await fetch(
              `${apiUrl}/${id}`,
              {
                cache: 'no-store',
              }
            );
    
            const data = await res.json();
            setProduct(data);
          
          } catch (error) {
            console.log(error);
          }
        };
        singleProduct();
      }, []);
    
      console.log(product) 

  return (
    <button
            onClick={() => addCart(product)}
            className="w-20 h-7  p-1 text-white text-xs bg-blue-900 cursor-pointer"
          >
            {' '}
            CART
          </button>
  )
}

export default Button