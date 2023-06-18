import React, { useEffect, useState } from 'react'
import { BsBagDash } from 'react-icons/bs'
import Link from 'next/link';
import { useCookies } from 'react-cookie';


// Cart Icon on Header
const CartIcon = () => {

  const [cookies] = useCookies(['products']);
  const [cartCount, setCartCount] = useState(0);
  const [spin, setSpin] = useState(false)


  const handleClick = () => {
    setSpin(true)
    setTimeout(() => {
      setSpin(false);
    }, 3000);
  }


  useEffect(() => {
    // Retrieve the products array from cookies
    const products = cookies.products || [];

    // Update the cart count based on the number of products
    setCartCount(products.length);
  }, [cookies]);

  return (
    <div className="relative">
      <Link href={'/checkout'}>
        <div className=" w-12 h-12 flex items-center justify-center hover:scale-110 duration-300">
          <button onClick={handleClick}><BsBagDash className={`${spin ? "animate-spin" : ""} text-gray-800 text-2xl`} /></button>
          <div className="absolute -top-1 -right-1 bg-rose-300 rounded-full w-5 h-5 flex items-center justify-center">
            <div className="text-white text-xs font-bold">{cartCount}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CartIcon;