'use client'
import React from 'react'

import addCart from '@/components/product/addToCart'
import { client } from '@/lib/sanityClient';

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

            {addCart(params.order)}
        </div>
    )
}
