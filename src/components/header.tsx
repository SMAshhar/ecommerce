'use client'
import Image from "next/image"
import Link from 'next/link'
import CartIcon from './cartIcon'

export default function Header() {

    return (
        <div className='flex w-full max-w-[1920px]'>
            {/* Meny for big screens */}
            <div className='flex w-full '>
                <div className=" flex bg-gradient-to-r from-rose-200 via-rose-50 to-rose-200 items-center justify-center w-full h-16">
                    <Link href={'/'} className='hidden md:flex text-md italic text-center font-light mx-4' >
                        <div className='flex w-20'> Pink Lotus</div>
                    </Link>
                    <div className='flex w-full items-center gap-6 justify-center'>
                        <Link href={'/'} className='hidden md:flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-md font-light outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground'>Home</Link>
                        <div className="flex md:hidden">
                            <CartIcon />
                        </div>
                        {/* <Link href={'/cart'} className='flex md:hidden cursor-default select-none items-center rounded-sm px-3 py-1.5 text-md outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground font-light'>Cart</Link> */}
                        <div className='relative w-28 justify-center items-center flex'>
                            <Image src={'/logo.png'} alt="logo" width={100} height={100} className="flex px-2 absolute text-lg h-14 hover:scale-110 duration-300 w-20" />
                        </div>
                        <Link href={'/tea'} className='flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-md outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground font-light'>Tea</Link>
                    </div>
                    <div className='hidden md:flex items-end justify-end px-4'>
                        <CartIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}
