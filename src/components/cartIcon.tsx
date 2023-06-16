import React from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'



// Cart Icon on Header
const CartIcon = () => {

// Call Cart vaalue from local storage

  return (
    <div className="relative">
      <div className=" w-12 h-12 flex items-center justify-center hover:scale-110 duration-300">
        <RiShoppingCartLine className="text-gray-800 text-2xl" />
        <div className="absolute -top-1 -right-1 bg-rose-300 rounded-full w-5 h-5 flex items-center justify-center">
          <span className="text-white text-xs font-bold">1</span>
        </div>
      </div>
    </div>
  );
};

export default CartIcon;