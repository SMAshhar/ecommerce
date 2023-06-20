'use client'
import { useState } from "react";
import { BiShoppingBag, BiTrash } from "react-icons/bi";

import { urlFor } from "@/lib/sanityImage";
import { toast } from "react-hot-toast";

import { useCookies } from 'react-cookie';
import StripeCheckout from "./stripe";
import Link from "next/link";
import localFont from "@next/font/local";


const cal = localFont({
    src: [
        {
            path: '../../../public/fonts/Calligrapher-JRxaE.ttf',
            weight: '400'
        },
    ],
    variable: '--font-cal'
})


async function CartTile2(title: string, qty: number, price: number, images: any, size: string, id: string) {

    return (
        <div className='relative border-2 my-2 flex flex-col sm:flex-row gap-4 w-full max-w-3/4 p-2 md:px-4 rounded-lg text-gray-500'>
            <div className='h-full items-center justify-center flex'>
                <img src={urlFor(images).url()} alt={title} width={200} height={200} />
            </div>
            <div className='flex flex-col md:w-1/2 p-1 md:p-4 justify-center md:justify-start'>
                <Link href={`/purchasePage/${id}`} className='text-lg md:text-2xl justify-center md:justify-start hover:underline hover:underline-offset-1 flex w-full flex-grow'>
                    {title}
                </Link>
                <div className=" text-center md:text-start">
                    Delivery Estimation
                </div>
                <div className='text-yellow-500 height-full text-center md:text-start'>
                    5 Working Days
                </div>
                <div className='text-xl text-black text-center md:text-start'>
                    {`$ ` + price * qty}
                </div>
            </div>
            <div className='flex flex-grow justify-center items-center md:justify-end md:items-end h-full'>
                {qty + ` bags of ${size}`}
            </div>
        </div>
    )

}

export default function Cart() {

    const [cookies, setCookies] = useCookies(['products']);
    const [trash, setTrash] = useState(false)

    const products = cookies.products || [];

    const handleDelete = (id: string) => {
        const updatedProducts = products.filter((p: any) => p.id !== id);

        setCookies('products', updatedProducts);
        toast.success('Item removed successfully.', {
            icon: '❤️',
            style: {
                borderRadius: '10px',
                background: '#FB856A',
                color: '#fff',
            },
        });
    };

    if (products.length > 0) {
        return (
            <div className="flex flex-col gap-8" >
                {/* <div className={`px-8 mt-20 mb-14 w-full text-center py-5 text-5xl md:text-7xl xl:text-8xl ${cal.variable} font-cal text-rose-600`}>Cart</div> */}
                <div className={`px-8 mt-20 mb-14 w-full text-center py-5 text-5xl md:text-7xl xl:text-8xl font-extralight italic text-rose-600`}>Cart</div>
                <div className="text-gray-500 bg-gradient-to-r from-rose-200 via-rose-50 to-rose-200 mx-4 md:mx-20 flex flex-col my-8">
                    {products.map((item: any, index: number) => (
                        <div key={index}>
                            <div className="flex bg-gradient-to-r from-rose-200 via-rose-50 to-rose-200">
                                {CartTile2(item.title, item.qty, item.price, item.images, item.size, item.id)}
                                <div className='text-xl text-black'>
                                    <div className='flex flex-col justify-end w-full p-2' >
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className={`${trash ? 'animate-spin' : ''} flex justify-end items-start p-4`}
                                        >
                                            <BiTrash />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <StripeCheckout products={products} />
                </div>
            </div>
        )
    } else {
        return (
            <div className="w-full bg-white">
                <div className=" text-rose-400 text-lg md:text-2xl text-center font-light justify-center md:justify-start px-40 py-16 items-center flex">
                    Cart
                </div>
                <div className="flex w-full justify-center items-center flex-col pt-8 pb-28">
                    <div className="flex text-rose-400 text-5xl md:text-9xl font-light md:justify-start p-4 items-center ">
                        <BiShoppingBag />
                    </div>
                    <div className=" text-rose-400 tracking-widest text-3xl text-center font-light md:justify-start items-center flex">
                        Your shopping bag is empty
                    </div>
                </div>
            </div>
        )
    }
}

// }

