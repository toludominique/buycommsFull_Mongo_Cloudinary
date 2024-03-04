"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import applewatch from '../../public/assets/applewatch.png';

function ProductImage() {

  

  return (
    <button>
            <Image
              className=" absolute"
              src={applewatch}
              alt=""
              fill
              objectFit="cover"
           
            />
          </button>
  )
}

export default ProductImage
