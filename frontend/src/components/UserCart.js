"use client";


import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '@/Redux/counterSlice';
import { add, increase } from '@/Redux/cartSlice';
import Link from 'next/link';
import { MdOutlineMail, MdOutlinePerson } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';

function UserCart() {

    const { count } = useSelector((state) => state.counter);
    const cartProducts = useSelector((state) => state.cart);
    const {amount} = useSelector((state) => state.cart)
    const user = useSelector((state) => state.user);

    const addCart = (product) => {
        dispatch(add(product));
      };
      const dispatch = useDispatch();


  return (
    <div className="flex flex-row justify-between h-10 gap-5 mr-5">
        <div>
          <MdOutlinePerson size={20} />
          <p className="text-xs">{user.name}</p>
        </div>
        <div className="flex flex-col items-center">
          <MdOutlineMail size={20} />
          <p className="text-xs">{user.email}</p>
        </div>
        <Link href={'/cartPage'}>
          <div className="relative flex  ">
            <div className="flex right-3 bottom-2 justify-center items-center w-4 h-4 absolute rounded-full text-white text-xs bg-red-600">
            {cartProducts.cartItems?.length}
            </div>
            <AiOutlineShoppingCart size={20} />
          </div>
          <p className="text-xs">{user.name}</p>
        </Link> 
    </div>
  )
}

export default UserCart
