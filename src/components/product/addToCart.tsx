'use client'
import { product } from '@/lib/type'
import React from 'react'
import { useState } from 'react'
import { CgShoppingCart } from 'react-icons/cg'

import { useDispatch } from 'react-redux'
import { cartActions } from '@/store/slice/cartSlice'
import { toast } from 'react-toast'

import { productActions } from '@/store/slice/productSlice'

export default function AddCart({ item }: { item: product }) {

    const [qty, setQty] = useState(1)

    const obj = {
        product: item._id,
        price: item.price,
        quantity: qty,
    }

    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(cartActions.addToCart({ quantity: qty }))
        dispatch(productActions.product(obj))
        toast.success(`${qty} of ${item.title} added to cart.`)
        console.log(obj)
    }

    return (
        <div className='flex flex-col justify-start py-8 gap-1'>
            <div className='flex'>
                <div className='text-gray-500 text-2xl flex justify-center items-center py-4'>
                    {`$ ${item.price * qty}.00`}
                    {/* $s */}
                </div>
            </div>
            <div className='flex gap-1 justify-start items-center'>
                <div className='font-bold text-rose-500 py-6 pr-8'>
                    Quantity:
                </div>
                <button onClick={qty <= 1 ? () => setQty(1) : () => setQty(qty - 1)} className='p-1 rounded-full h-10 w-10 flex justify-center items-center border-2 border-gray-300 bg-white hover:shadow-xl text-rose-500 text-lg font-bold'>-</button>
                <div className=' text-rose-500 flex justify-center  p-2 h-10'>{qty} x 500g</div>
                {/* Qty plus and minus ammount */}
                <button onClick={qty >= 99 ? () => setQty(qty) : () => setQty(qty + 1)} className='p-1 rounded-full h-10 w-10 flex justify-center items-center border-2 border-gray-300 bg-white hover:shadow-xl text-rose-500 text-lg font-bold'>+</button>
            </div>
            <div className='flex justify-center md:justify-start'>
                <button onClick={() => handleClick()} className='bg-rose-400 px-8 py-2 font-bold flex items-center md:items-start mt-8 justify-start gap-2 text-gray-200'>
                    <CgShoppingCart className="text-2xl font-bold" />
                    Add to Cart
                </ button>
            </div>
        </div>
    )
}