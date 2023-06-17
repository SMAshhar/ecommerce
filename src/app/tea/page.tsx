import React, { cache } from "react";
import { client } from "@/lib/sanityClient";
import ProductTiles from "@/components/tile/productTile";

import { partialProduct } from "@/lib/type";
import { urlFor } from "@/lib/sanityImage";
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

async function getProductData() {
    const res = await client.fetch(`*[_type=="product"]{
        title,
        _id,
        images,
        price
    }`);
    return res
}

export default async function AllProducts() {

    const data = await getProductData()

    return (
        <div className="flex flex-col gap-16 items-center flex-wrap justify-center mx-14 pb-16">
            <div className={`px-8 py-5 text-5xl md:text-7xl xl:text-8xl text-center ${cal.variable} font-cal text-rose-600`}>Our Auspicious Teas</div>
            <div className="text-rose-400 flex flex-wrap max-w-[130vh] gap-16 justify-center items-center">
                {data?.map((item: partialProduct) => (
                    <Link href={`/${item._id}`} key={item._id}>
                        <ProductTiles images={urlFor(item.images).url()} title={item.title} />
                    </Link>
                ))}
            </div>
        </div>
    )
}