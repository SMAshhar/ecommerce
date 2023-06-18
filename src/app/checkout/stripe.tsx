'use client'
import React from 'react'
import getStripePromise from '@/lib/stripe';


export default function StripeCheckout({ products }: { products: any }) {

    const handleCheckout = async () => {
        const stripe = await getStripePromise()
        // const products = [{

        // }]
        const response = await fetch('/api/stripe-session', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            cache: 'no-cache',
            body: JSON.stringify(products),
        })

        const data = await response.json()
        if (data.session) {
            stripe?.redirectToCheckout({sessionId:data.session.id})
        }
    }

    return (
        <div className='flex justify-center items-center'>
            <button onClick={handleCheckout} className='px-4 py-2 w-auto bg-rose-400 text-gray-100 text-bold text-xl flex mb-20 mt-14 justify-center items-center'>Checkout</button>
        </div>
    )
}
