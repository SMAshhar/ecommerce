'use client'
import { product } from '@/lib/type'
import React from 'react'
import { useState } from 'react'
import { CgShoppingCart } from 'react-icons/cg'

import toast from 'react-hot-toast'
import { useCookies } from 'react-cookie';

export default function AddCart({ item }: { item: product }) {

    const [cookies, setCookie] = useCookies();
    const [products, setProducts] = useState(cookies.products || []);
    const [size, setSize] = useState('500 gm')

    const addProduct = () => {
        const newProduct = { title: item.title, images: item.images, id: item._id, qty: qty, price: size == '500 gm' ? item.price : item.price * qty + 0.25 * item.price * qty, size: size };
        const updatedProducts = [...products, newProduct];
        setProducts(updatedProducts);
        setCookie('products', updatedProducts);
        console.log(newProduct)
        toast.success(`${qty} packets of ${item.title} of ${size} added to cart.`, {
            icon: '❤️',
            style: {
              borderRadius: '10px',
              background: '#FB856A',
              color: '#fff',
            },
          })
    };


    const [qty, setQty] = useState(1)
    return (
        <div className='flex flex-col justify-start py-8 gap-1'>
            <div className='flex'>
                <button onClick={() => setSize("500 gm")} className='px-2 cursor-pointer border-2 focus:ring-1 rounded-s-3xl flex rounded-e-3xl justify-center items-center hover:border-2 border-rose-400 bg-white hover:shadow-xl text-gray-700 text-lg mr-8'>500 gm</button>
                <button onClick={() => setSize("750 gm")} className='px-2 cursor-pointer border-2 focus:ring-1 rounded-s-3xl flex rounded-e-3xl justify-center items-center hover:border-2 border-rose-400 bg-white hover:shadow-xl text-gray-700 text-lg mr-8'>750 gm</button>
                <div className='text-gray-500 text-2xl flex justify-center items-center py-4'>
                    {`$ ${size == '500 gm' ? item.price * qty : item.price * qty + 0.25 * item.price * qty}`}
                    {/* $s */}
                </div>
            </div>
            <div className='flex gap-1 justify-start items-center'>
                <div className='font-bold text-rose-500 py-6 pr-8'>
                    Quantity:
                </div>
                <button onClick={qty <= 1 ? () => setQty(1) : () => setQty(qty - 1)} className=' rounded-full h-10 w-10 flex justify-center items-center border-2 border-rose-300 bg-white hover:shadow-xl text-rose-500 text-lg font-bold'>-</button>
                <div className=' text-rose-500 flex justify-center  p-2 h-10'>{qty} x {size}</div>
                {/* Qty plus and minus ammount */}
                <button onClick={qty >= 99 ? () => setQty(qty) : () => setQty(qty + 1)} className='rounded-full h-10 w-10 flex justify-center items-center border-2 border-rose-300 bg-white hover:shadow-xl text-rose-500 text-lg font-bold'>+</button>
            </div>
            <div className='flex justify-center md:justify-start'>
                <button onClick={() => addProduct()} className='bg-rose-400 px-8 py-2 font-bold flex items-center md:items-start mt-8 justify-start gap-2 text-gray-100'>
                    <CgShoppingCart className="text-2xl font-bold" />
                    Add to Cart
                </ button>
            </div>
        </div>
    )
}