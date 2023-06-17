'use client'
import { product } from '@/lib/type'
import React from 'react'
import { useState } from 'react'
import { CgShoppingCart } from 'react-icons/cg'

import { useDispatch } from 'react-redux'
import { cartActions } from '@/store/slice/cartSlice'
import { toast } from 'react-toast'

import { productActions } from '@/store/slice/productSlice'



export default function addCart({ item }: { item: product }) {

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
        <div className='flex justify-around gap-1'>
            <div className='flex gap-1 justify-center items-center'>
                <div className='font-bold text-black py-6'>
                    Quantity:
                </div>
                <button onClick={qty <= 1 ? () => setQty(1) : () => setQty(qty - 1)} className='p-1 rounded-full h-10 w-10 flex justify-center items-center border-2 border-gray-300 bg-white hover:shadow-xl text-gray-700 text-lg font-bold'>-</button>
                <div className='text-black flex justify-center p-2 h-10'>{qty}</div>
                {/* Qty plus and minus ammount */}
                <button onClick={qty >= 99 ? () => setQty(qty) : () => setQty(qty + 1)} className='p-1 rounded-full h-10 w-10 flex justify-center items-center border-2 border-gray-300 bg-white hover:shadow-xl text-gray-700 text-lg font-bold'>+</button>
            </div>
            <div className='w-full justify-start items-start'>
                <button onClick={() => handleClick} className='bg-rose-400 px-8 py-2 font-bold flex items-center justify-center gap-2 text-gray-200'>
                    <CgShoppingCart className="text-2xl font-bold" />
                    Add to Cart
                </ button>
            </div>
        </div>
    )
}
