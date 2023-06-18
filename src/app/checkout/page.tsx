'use client'
import React, { useState } from "react";
import { BiShoppingBag, BiTrash } from "react-icons/bi";

import { product } from "@/lib/type";
import CartTile from "@/components/tile/cartTile";
import { client } from "@/lib/sanityClient";
import { urlFor } from "@/lib/sanityImage";
import { productActions } from "@/store/slice/productSlice";
import { toast } from "react-hot-toast";

import { useCookies } from 'react-cookie';
import StripeCheckout from "./stripe";



async function CartTile2(title: string, qty: number, price: number, images: any, size: string) {

    return (
        <div className='relative border-2 my-2 flex flex-col sm:flex-row gap-4 w-full p-2 px-4 rounded-lg text-gray-500'>
            <div className='h-full items-center justify-center flex'>
                <img src={urlFor(images).url()} alt={title} width={200} height={200} />
            </div>
            <div className='flex flex-col w-1/2 p-4'>
                <div className='text-2xl flex w-full flex-grow'>
                    {title}
                </div>
                <div>
                    Delivery Estimation
                </div>
                <div className='text-yellow-500 height-full'>
                    5 Working Days
                </div>
                <div className='text-xl text-black'>
                    {`$ ` + price * qty}
                </div>
            </div>
            <div className='flex justify-end items-end h-full'>
                {qty + ` bags of ${size}`}
            </div>
        </div>
    )

}



// export async function CartTile1(item: product, qty: number) {

//     const [cookies, setCookies] = useCookies(['products'])
//     const handleQuantityChange = (e: any) => {
//         const newQuantity = parseInt(e.target.value);

//         // Find the index of the product in the products array
//         const index = cookies.products.findIndex((p: any) => p.id === item._id);

//         // Create a copy of the products array
//         const updatedProducts = [...cookies.products];

//         // Update the quantity of the product at the specified index
//         updatedProducts[index].quantity = newQuantity;

//         // Update the products in the cookies
//         setCookies('products', updatedProducts);
//     };

//     const handleDelete = () => {
//         // Filter out the product to be deleted from the products array
//         const updatedProducts = cookies.products.filter((p: any) => p.id !== item._id);

//         // Update the products in the cookies
//         setCookies('products', updatedProducts);
//     };

//     console.log('item + qty => ', item, qty)

//     return (
//         <div className='relative my-2 flex flex-col sm:flex-row gap-4 w-screen/2 p-2 px-4 rounded-lg border-2 border-rose-300 text-gray-500'>
//             <div className='h-full items-center justify-center flex'>
//                 <img src={urlFor(item.images).url()} alt={item._id} width={200} height={200} />
//             </div>
//             <div className='flex flex-col w-1/2'>
//                 <div className='text-2xl flex w-full flex-grow'>
//                     {item.title}
//                 </div>
//                 <div>
//                     Delivery Estimation
//                 </div>
//                 <div className='text-yellow-500 height-full'>
//                     5 Working Days
//                 </div>
//                 <div className='text-xl text-black'>
//                     {`$ ` + item.price * qty}
//                     <div className="quantity-section">
//                         <label htmlFor={`quantity-${qty}`}>Quantity:</label>
//                         <input
//                             id={`quantity-${qty}`}
//                             type="number"
//                             min="1"
//                             value={qty}
//                             onChange={handleQuantityChange}
//                         />
//                     </div>
//                 </div>
//             </div>
//             <div className='flex flex-col justify-end w-full p-2' >
//                 <button onClick={() => handleDelete} className='flex justify-end items-start p-4'>
//                     <BiTrash />
//                 </button>

//             </div>

//         </div>
//     )
// }


async function getProductData() {
    const res = await client.fetch(`*[_type=="product"]{
        title,
        _id,
        images,
        type,
        price
    }`);
    return res
}


export default async function Cart() {

    const [cookies, setCookies] = useCookies(['products']);
    const [trash, setTrash] = useState(false)

    const products = cookies.products || [];

    // console.log('this is products: ', products, products.length)
    const productsFromSanity = await getProductData()

    const handleDelete = (id: string) => {
        // Filter out the product to be deleted from the products array
        setTrash(true)
        setTimeout(() => {
            setTrash(false);
        }, 2000);
        const updatedProducts = cookies.products.filter((p: any) => p.id !== id);

        // Update the products in the cookies
        setCookies('products', updatedProducts);
        toast.success('Item removed successfully.')
        // setTrash(false)
    };


    // Retrieve the products array from cookies
    console.log(products)

    if (products.length > 0) {
        return (
            <div className="flex gap-8" >
                <div className="text-gray-500 bg-gradient-to-r from-rose-200 via-rose-50 to-rose-200 mx-20 flex flex-col w-2/3 my-8">
                    {products?.map((item: any, index: number) => (
                        <div key={index}>
                            {productsFromSanity.map((data: product) => (
                                <div key={data._id}>
                                    {item.id == data._id &&
                                        <div className="flex bg-gradient-to-r from-rose-200 via-rose-50 to-rose-200">
                                            {CartTile2(data.title, item.qty, data.price, data.images, item.size)}
                                            <div className='text-xl text-black'>
                                                {/* {`$ ` + item.price * item.qty} */}
                                                <div className='flex flex-col justify-end w-full p-2' >
                                                    <button onClick={() => handleDelete(item.id)} className={`${trash ? 'animate-spin' : ''} flex justify-end items-start p-4`}>
                                                        <BiTrash />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div>
                    <StripeCheckout />
                </div>
            </div>
        )
    } else {
        return (
            <div className="w-screen bg-white">
                <div className=" text-rose-400 text-2xl font-bold justify-start px-40 py-16 items-center flex">
                    Shopping Cart
                </div>
                <div className="flex w-screen justify-center items-center flex-col pt-8 pb-28">
                    <div className="flex text-rose-400 text-9xl font-bold justify-start p-4 items-center ">
                        <BiShoppingBag />
                    </div>
                    <div className=" text-rose-400 tracking-widest text-3xl font-bold justify-start items-center flex">
                        Your shopping bag is empty
                    </div>
                </div>
            </div>
        )
    }
}

// }

