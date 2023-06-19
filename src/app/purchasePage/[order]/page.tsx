'use client'
import React from 'react'

import AddCart from '@/components/product/AddToCart';
import { client } from '@/lib/sanityClient';;
import { urlFor } from '@/lib/sanityImage';

async function getProductData(id: string) {
    const res = await client.fetch(`*[_type=="product" && _id=='${id}']{
        title,
        _id,
        images,
        price,
        pageImage,
        description,
        productDetails
    }`);
    return res
}

export default async function Order({ params }: { params: any }) {
    const data = await getProductData(params.order)

    return (
        <div>
            <div className='flex flex-col md:flex-row justify-center py-14 items-center'>
                <div className='md:w-1/2 justify-end flex p-5'>
                    <img src={urlFor(data[0].images).url()} alt='product' width={500} height={500} />
                </div>
                <div className='md:w-1/2'>
                    <div className='px-4 lg:px-24'>
                        {/* Dets */}
                        <div className='text-gray-500 text-4xl tracking-widest pt-20'>
                            <h1>{data[0].title}</h1>
                            {/* Heading */}
                        </div>
                        <div className='text-gray-500 text-md tracking-widest py-2 text-justify'>
                            <h1>{data[0].description}</h1>
                            {/* Category */}
                        </div>
                        <div className='flex gap-4 items-start'>
                            <div className='flex gap-1 items-start'>
                                <AddCart item={data[0]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-gray-500 text-md px-4 md:px-16 xl:px-24 md:text-center tracking-widest py-24 text-justify'>
                <h1 className='text-rose-400 text-center md:text-start text-4xl tracking-widest pb-8'>Product Details</h1>
                <p>{data[0].productDetails}</p>
                {/* Category */}
            </div>
        </div>
    )
}
