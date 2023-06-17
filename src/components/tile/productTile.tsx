import React from 'react'

import { partialProduct } from '@/lib/type'

export default function ProductTiles({images, title}:Partial<partialProduct>) {
    return(
        <div className='text-rose-500 justify-center items-center flex flex-col'>
            <img src={images} alt='productId' width={250} height={250} className='max-w-24 max-h-60 hover:shadow-2xl hover:border-2 rounded-full mb-8' />
            <div className='tracking-wider text-lg font-light py-2'>{title}</div>
        </div>
    )
}