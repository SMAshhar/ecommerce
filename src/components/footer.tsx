import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GrLinkedinOption } from 'react-icons/gr'
import { IoLogoTwitter } from 'react-icons/io'
import { RiFacebookFill } from 'react-icons/ri'

export default function Footer() {
    return (
        <div className='flex flex-col w-auto bg-gradient-to-t from-rose-200 via-rose-100 to-rose-200 border-t-2 border-rose-100 max-w-[1920px] '>
            <div className='flex flex-col md:flex-row justify-center items-start w-full px-4 md:px-16 xl:px-28 my-8 xl:my-10 text-rose-400'>
                <div className='md:w-1/4 h-full md:pr-16'>
                    <div className="mb-10">
                        <Image src={'/logo.png'} alt="logo" height={50} width={150} />
                    </div>
                    <div className='mb-10'>
                        For Us: Tea is life. Tea is the air we breath. 
                    </div>
                    <div className='flex gap-4'>
                        <Link href='/' className='flex h-10 w-10 justify-center items-center  rounded-lg bg-gray-200'><IoLogoTwitter /></Link>
                        <Link href='/' className='flex h-10 w-10 justify-center items-center  rounded-lg bg-gray-200'><RiFacebookFill /></Link>
                        <Link href='/' className='flex h-10 w-10 justify-center items-center  rounded-lg bg-gray-200'><GrLinkedinOption /></Link>
                    </div>
                </div>
                <div className='md:w-1/5 flex flex-col gap-2 my-2'>
                    <div className='font-bold py-2 pt-4 xl:pt-0'>
                        Company
                    </div>
                    <Link href='#'>About</Link>
                    <Link href='#'>Terms of Use</Link>
                    <Link href='#'>Privacy Policy</Link>
                    <Link href='#'>How it Works</Link>
                    <Link href='#'>Contact Us</Link>
                </div>
                <div className='md:w-1/5 flex flex-col gap-2 my-2'>
                    <div className=' font-bold py-2'>
                        Support
                    </div>
                    <Link href='#'>Support Carrer</Link>
                    <Link href='#'>24h Service</Link>
                    <Link href='#'>Quick Chat</Link>
                </div>
                <div className='md:w-1/5 flex flex-col gap-2 my-2'>
                    <div className='font-bold py-2'>Contact</div>
                    <Link href='#'>Whatsapp</Link>
                    <Link href='#'>Support 24h</Link>
                </div>
            </div>
        </div>
    )
}