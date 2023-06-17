import React from 'react'
import { BsBagDash } from 'react-icons/bs'
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Link from 'next/link';



// Cart Icon on Header
const CartIcon = () => {

  const cartValue = useSelector(
    (state: RootState) => state.cart.totalQty
  )

  // Call Cart vaalue from local storage

  return (
    <div className="relative">
      <Link href={'/checkout'}>
        <div className=" w-12 h-12 flex items-center justify-center hover:scale-110 duration-300">
          <BsBagDash className="text-gray-800 text-2xl" />
          <div className="absolute -top-1 -right-1 bg-rose-300 rounded-full w-5 h-5 flex items-center justify-center">
            <span className="text-white text-xs font-bold">{cartValue}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CartIcon;