


import React from 'react'

import logohere2 from '../../../../public/assets/logohere2.png';
import applewatch from '../../../../public/assets/applewatch.png';
import star from '../../../../public/assets/star.png';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdOutlineMail, MdOutlinePerson } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '@/Redux/counterSlice';
import { add, increase } from '@/Redux/cartSlice';
import Link from 'next/link';


const apiUrl = process.env.NEXT_PUBLIC_API_URL;

/* export async function generateStaticParams  () {
  

  const res = await fetch(
    `http://localhost:8800/popularproducts`
  );
  const data = await res.json()
 console.log(data)
   return data.map((item) => ({
    params: {
      id: item._id,
    }
  }))
 
}  */

 /*   async function getProduct(id) {
  const res = await fetch(`http://localhost:8800/${id}`, {
    cache: 'no-store'
  });
   
  const product = await res.json();

return res.json()
}*/

/* export async function generateStaticParams  () {
  
return [{"_id": "65d3d76299dd42ede719d659"}]
}
  */

export async function getAllProduct () {
  

  const res = await fetch(
    `${apiUrl}/popularproducts`
  );

 return res.json()

}

export async function singleProduct (id) {
  
  const res = await fetch(
    `${apiUrl}/${id}`
  );

 return res.json()

}

/* export const getSingleProduct = async (params) => {
  const singleProduct = await getProduct()
  const product = singleProduct?.find((item) => {
    item._id === params.id
    
  })
  return product;
 
   
}
  */

/* export async function generateStaticParams  () {
  
  return [{"_id": "65d3d76299dd42ede719d659"}]
  }

 */

  export async function generateStaticParams  () {
  
  const products = await getAllProduct()

  return products.map((item) => ({id: `${item._id}`}))
    }

 async function page({ params }) {


  
  //const dispatch = useDispatch();
  //const { id } = params;
  //const { cartItems } = useSelector((state) => state.cart);
  //const user = useSelector((state) => state.user);
  //const [product, setProduct] = useState({});
  //const [image, setImage] = useState('');

/*   useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${apiUrl}/${id}`, {
          cache: 'no-store'
        });
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (id) {
      fetchProduct();
    }
    
  
  }, [apiUrl, id]);

  const addCart = (product) => {
    dispatch(add(product));
  };


  const handleIncrease = (item) => {
    dispatch(add(item))
  }

 */

       /*  const res = await fetch(
          `http://localhost:8800/${params.id}`
        
        );

        const data = await res.json(); */
        //setProduct(data);
      
     //const product = await getProduct(params.id)

    /*   const product = await getSingleProduct(params.id)
    console.log(product)
 */
console.log("this page id is", params.id)
const data = await singleProduct(params.id)
  return (
    <div className="flex flex-col gap-3">
    <div className=" flex justify-between w-full items-center h-10 font-light bg-gray-300 text-xs">
      <div className="flex gap-2 ml-10">
        <p>FACEBOOK</p>
        <p>INSTAGRAM</p>
      </div>
      <div>FREE DELIVERY</div>
      <div className="mr-10">TRUSTED PAYMENTS</div>
    </div>
    <div className="flex flex-row justify-between">
      <div></div>
      <div className=" flex w-20 h-10 relative ml-40">
        <Image className="absolute" src={logohere2} alt="" fill />
      </div>
      <div className="flex flex-row justify-between h-10 gap-5 mr-5  ">
        <div>
          <MdOutlinePerson size={20} />
          <p className="text-xs">John</p>
        </div>
        <div className="flex flex-col items-center">
          <MdOutlineMail size={20} />
          <p className="text-xs">John@gmail.com</p>
        </div>
        <Link href={'/cartPage'}>
          <div className="relative flex  ">
            <div className="flex right-3 bottom-2 justify-center items-center w-4 h-4 absolute rounded-full text-white text-xs bg-red-600">
             5
            </div>
            <AiOutlineShoppingCart size={20} />
          </div>
          <p className="text-xs">John</p>
        </Link>
      </div>
    </div>
    <div className="flex flex-row justify-between ml-10 mr-10 border-b sm:flex gap-5">
      <div className="flex gap-2 text-sm font-medium">
        <p>PORTFOLIO</p>
        <p>PORTFOLIO</p>
        <p>PORTFOLIO</p>
        <p>PORTFOLIO</p>
      </div>
      <div className="flex items-center justify-end bg-red-500 w-30 h-5">
        <input
          className=" w-30 relative h-5 border-b-2 outline-none"
          placeholder="search"
        />
        <FiSearch className="absolute " size={20} />
      </div>
    </div>
    <div className="flex gap-4 text-xs ml-10 items-end h-10">
      <p>PORTFOLIO</p>
      <p>PORTFOLIO</p>
      <p className="font-extralight">PORTFOLIO</p>
    </div>

    <div className="flex flex-row  justify-center mt-5 ml-28 gap-5">
      <div className="flex flex-col  gap-2">
        <div>
          {!data.image ? (
            <div className=" relative w-80 h-96">
              <Image src={applewatch} alt="/" fill objectFit="cover" />
            </div>
          ) : (
            <div className=" w-80 h-96 relative">
              <Image
                src={data.image}
                alt="/"
                fill
                objectFit="cover"
              />
            </div>
          )}
        </div>
        <div className=" flex flex-row relative gap-1 w-80 h-32 overflow-x-scroll">
          <div className="absolute bg-gray-200 w-6 h-7 mt-14 border-black border-2 z-10">
            <FaChevronLeft className="mt-1" />
          </div>
          <div className="absolute bg-gray-200 w-6 h-7 mt-14 right-0 border-black border-2 z-10">
            <FaChevronRight className="mt-1 ml-1" />
          </div>
          <div className=" w-16 h-24 relative ml-3 mt-5">
            <Image
              className=" absolute"
              src={data.image}
              alt=""
              fill
              objectFit="cover"
              /* onClick={() =>
                setImage(data.image)
              } */
            />
          </div>

          <div className="  w-16 h-24 relative ml-3 mt-5">
            <Image
              className=" absolute"
              src={applewatch}
              alt=""
              fill
              objectFit="cover"
              //onClick={() => setImage(applewatch)}
            />
          </div>

          <div className=" w-16 h-24 relative ml-3 mt-5">
            <Image
              className=" absolute"
              src={applewatch}
              alt=""
              fill
              objectFit="cover"
             // onClick={() => setImage(applewatch)}
            />
          </div>

          <div className="  w-16 h-24 relative ml-3 mt-5">
            <Image
              className=" absolute"
              src={applewatch}
              alt=""
              fill
              objectFit="cover"
              //onClick={() => setImage(applewatch)}
            />
          </div>
        </div>
      </div>
      <div className="">
        <p className="font-bold text-lg">{data.name}</p>

        <p className="text-xs"> GEMINI</p>
        <div className=" flex mt-5 gap-40 w-96 border-b-2">
          <div className=" flex w-5 h-5 gap-1 ">
            <Image className="" src={star} alt="" />
            <Image className="" src={star} alt="" />
            <Image className="" src={star} alt="" />
            <Image className="" src={star} alt="" />
            <Image className="" src={star} alt="" />
          </div>
          <p> 1 rating </p>
        </div>
        <p className="mt-5">${data.price}</p>
        <div className="flex mt-5 gap-5 items-end">
          <p>Model: </p>
          <div className="flex  justify-end">
            <input className="w-40 h-5 rounded-md border-b-2 relative " />
            <IoIosArrowDown className="absolute " />
          </div>
          <div className="text-xs flex flex-col uppercase">
            <p className="text-green-600">in stock</p>
            <p> shipping within 2 business workdays</p>
          </div>
        </div>
        <div className="flex mt-5 ">
         {/*  <button
            onClick={() => dispatch(decrement())}
            className="flex justify-center w-7 h-7 bg-gray-200 text-lg cursor-pointer"
          >
            -
          </button>
        
          <div className="flex justify-center w-7 h-7 ">{amount}</div>
          <button
            onClick={() => handleIncrease(single)}
            className=" flex justify-center w-7 h-7 bg-gray-200 text-lg  cursor-pointer"
          >
            +
          </button> */}
          {/* <button
            onClick={() => addCart(product)}
            className="w-20 h-7  p-1 text-white text-xs bg-blue-900 cursor-pointer"
          >
            {' '}
            CART
          </button> */}
        </div>
        <div className="w-96 mt-5">
          <p className="whitespace-normal">{data.desc}</p>
        </div>
      </div>
    </div>

    <div className="w-full h-5 text-xs ml-10 mt-5 flex gap-10 ">
      <p>ADDITIONAL INFORMATION</p>
      <p className="font-smi font-semibold underline">REVIEW 1</p>
    </div>

    <div className="w-full flex items-center justify-center gap-2 ml-10 mt-5 mr-10 h-7 bg-gray-200  ">
      <p>+</p>
      <p className="text-xs ">ADDITIONALS</p>
    </div>

    <div className="ml-10 mt-5 mb-5 bg-gray-200  flex w-full h-20 gap-20">
      <div className="flex flex-col gap-2 ml-5 mt-5 text-xs w-10 h-10">
        <p className="font-bold whitespace-nowrap"> John Doe</p>
        <p>21/3/2023</p>
        <div className=" flex w-2 h-2 gap-1 ">
          <Image className="" src={star} alt="" />
          <Image className="" src={star} alt="" />
          <Image className="" src={star} alt="" />
          <Image className="" src={star} alt="" />
          <Image className="" src={star} alt="" />
        </div>
      </div>

      <div className="text-xs whitespace-normal font-medium flex items-center">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          maxime, voluptate incidunt repudiandae, doloribus magni in, earum
          ipsam autem impedit reiciendis provident ipsum animi. Eaque sequi
          libero dolorum non magni.
        </p>
      </div>
    </div>
  </div>
  
);
   
  
}

export default page