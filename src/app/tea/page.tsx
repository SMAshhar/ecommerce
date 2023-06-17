import React, { cache } from "react";
import { client } from "@/lib/sanityClient";
import ProductTiles from "@/components/tile/productTile";

import { partialProduct } from "@/lib/type";
import { urlFor } from "@/lib/sanityImage";
import Link from "next/link";

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
        <div className="flex gap-16 items-center flex-wrap justify-center mx-14 my-8 w-full">
            <div className="text-rose-400 flex flex-wrap max-w-[130vh] max-h-[150vh] gap-16 items-center">
                {data?.map((item: partialProduct) => (
                    <Link href={`/${item._id}`} key={item._id}>
                        <ProductTiles images={urlFor(item.images).url()} title={item.title} />
                    </Link>
                ))}
            </div>
        </div>
    )
}