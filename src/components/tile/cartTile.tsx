'use client'
import { urlFor } from '@/lib/sanityImage'
import { product } from '@/lib/type'

import React from 'react'
import { useCookies } from 'react-cookie'
import { BiTrash } from 'react-icons/bi'

export default async function CartTile(item: product, qty: number) {

    const [cookies, setCookies] = useCookies(['products'])
    const handleQuantityChange = (e: any) => {
        const newQuantity = parseInt(e.target.value);

        // Find the index of the product in the products array
        const index = cookies.products.findIndex((p: any) => p.id === item._id);

        // Create a copy of the products array
        const updatedProducts = [...cookies.products];

        // Update the quantity of the product at the specified index
        updatedProducts[index].quantity = newQuantity;

        // Update the products in the cookies
        setCookies('products', updatedProducts);
    };

    const handleDelete = () => {
        // Filter out the product to be deleted from the products array
        const updatedProducts = cookies.products.filter((p: any) => p.id !== item._id);

        // Update the products in the cookies
        setCookies('products', updatedProducts);
    };

    console.log('item + qty => ', item, qty)

    return (
        <div className='relative my-2 flex flex-col sm:flex-row gap-4 w-screen/2 p-2 px-4 rounded-lg border-2 text-gray-500'>
            <div className='h-full items-center justify-center flex'>
                <img src={urlFor(item.images).url()} alt={item._id} width={200} height={200} />
            </div>
            <div className='flex flex-col w-1/2'>
                <div className='text-2xl flex w-full flex-grow'>
                    {item.title}
                </div>
                <div>
                    Delivery Estimation
                </div>
                <div className='text-yellow-500 height-full'>
                    5 Working Days
                </div>
                <div className='text-xl text-black'>
                    {`$ ` + item.price * qty}
                    <div className="quantity-section">
                        <label htmlFor={`quantity-${qty}`}>Quantity:</label>
                        <input
                            id={`quantity-${qty}`}
                            type="number"
                            min="1"
                            value={qty}
                            onChange={handleQuantityChange}
                        />
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-end w-full p-2' >
                <button onClick={() => handleDelete} className='flex justify-end items-start p-4'>
                    <BiTrash />
                </button>
                <div className='flex justify-end items-end h-1/2'>
                    {qty + ` bags of 500g`}
                </div>
            </div>

        </div>
    )
}