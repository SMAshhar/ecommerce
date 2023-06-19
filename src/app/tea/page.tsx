import React from "react";
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
        <div className="flex flex-col gap-16 items-center flex-wrap justify-center mx-4 md:mx-14 pb-16">
            <div className={`px-8 pt-14 py-5 text-6xl md:text-7xl xl:text-8xl text-center ${cal.variable} font-cal text-rose-600`}>Our Auspicious Teas</div>
            <div className="text-gray-500 text-md tracking-widest py-2 text-justify md:text-center ">A curated selection of exceptional and premium Japanese green tea and matcha, directly sourced with the farmers and shipped from Fukuoka, Japan. Start your green tea journey with IKKYU and discover an amazing and healthy universe of taste and flavors.
            </div>
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