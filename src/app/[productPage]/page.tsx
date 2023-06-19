import { client } from '@/lib/sanityClient';
import { urlFor } from '@/lib/sanityImage';
import React from 'react'
import localFont from '@next/font/local';
import Link from 'next/link';

const cal = localFont({
    src: [
        {
            path: '../../../public/fonts/Calligrapher-JRxaE.ttf',
            weight: '400'
        },
    ],
    variable: '--font-cal'
})

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

export default async function ProductPage({ params }: { params: any }) {

    const data = await getProductData(params.productPage)

    return (
        <div className='bg-white items-center justify-center flex flex-col px-4 md:px-16 xl:px-24'>
            <img src={urlFor(data[0].pageImage).url()} alt={data[0].title} />
            <h1 className='flex font-light justify-center items-center tracking-widest text-4xl text-rose-400 mt-14 mb-8'>{data[0].title}</h1>
            <p className='flex text-lg font-light px-4 md:px-16 xl:px-24 py-8 text-gray-700 tracking-widest text-justify'>{data[0].description}</p>
            <p className='flex text-lg font-light px-4 md:px-16 xl:px-24 py-8 text-gray-700 tracking-widest text-justify'>{data[0].productDetails}</p>
            <Link href={`/purchasePage/${data[0]._id}`} className={`px-8 my-20 hover:scale-105 duration-500 py-5 text-5xl md:text-7xl xl:text-8xl ${cal.variable} font-cal text-rose-600`}>Order Now</Link>
        </div>
    )
}