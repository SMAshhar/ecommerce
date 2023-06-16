'use client'

import { useState } from 'react'

import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import Image from "next/image"
import Link from 'next/link'
import CartIcon from './cartIcon'

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className='flex w-full py-1 '>
            {/* Meny for big screens */}
            <div className='flex w-full '>
                <Menubar className=" flex bg-red-50 items-center justify-center w-full h-12">
                    <Link href={'/'} className='flex text-md italic text-center font-light mx-4' >
                        <div className='hidden md:flex w-20'> Pink Lotus</div>
                        <div> <Image src={'/logo.png'} alt='logo' width={70} height={70} className='flex md:hidden flex-grow z-50' /> </div>
                    </Link>
                    <div className='hidden md:flex w-full items-center gap-6 justify-center'>
                        <MenubarMenu>
                            <MenubarTrigger className='font-light text-md'>Menu</MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    Herb Tea <MenubarShortcut>⌘T</MenubarShortcut>
                                </MenubarItem>
                                <MenubarItem>
                                    Black Tea <MenubarShortcut>⌘N</MenubarShortcut>
                                </MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                        <Link href={'/'} className='flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-md font-light outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground'>Home</Link>
                        <MenubarMenu>
                            <div className='relative w-28 justify-center items-center flex'>
                                <Image src={'/logo.png'} alt="logo" width={100} height={100} className="flex px-2 absolute text-lg h-14 hover:scale-110 duration-300 w-20" />
                            </div>
                            <MenubarMenu>
                                <Link href={'/'} className='flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-md outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground font-light'>Asian</Link>
                            </MenubarMenu>
                            <MenubarMenu>
                                <Link href={'/'} className='flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-md outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground font-light'>English</Link>
                            </MenubarMenu>
                        </MenubarMenu>
                    </div>
                    <div className='hidden md:flex items-end justify-end px-4'>
                        <CartIcon />
                    </div>
                    <div className='flex-grow mx-4 flex md:hidden items-center justify-end'>
                        <button
                            className="flex md:hidden rounded-md p-2 flex-grow items-end justify-end text-gray-800 duration-300 ease-in"
                            onClick={toggleMenu}
                        >
                            <RxHamburgerMenu size={25} />
                        </button>
                    </div>
                </Menubar>
            </div>
            {/* Menu for mobile screens  */}
            <div className={`flex fixed transition-all duration-300 flex-col mx-4 w-full h-screen items-start justify-around md:hidden top-0  bg-white ${isMenuOpen ? "block" : "hidden"
                }`} >
                <div className='flex w-full justify-around'>
                    <Image src={'/logo.png'} alt='logo' width={70} height={70} />
                    <div className='flex w-full justify-end'>
                        <button
                            className="px-4 ml-4 text-gray-800 rounded-md relative focus:outline-none"
                            onClick={toggleMenu}
                        >
                            <IoMdClose size={40} />
                        </button>
                    </div>
                </div>
                <div>
                    <Link href={'/'} className='flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-md font-light outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground'>Home</Link>
                    <Link href={'/'} className='flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-md font-light outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground'>Explore</Link>
                    <Link href={'/'} className='flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-md font-light outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground'>Asian</Link>
                    <Link href={'/'} className='flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-md font-light outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground'>English</Link>
                </div>
            </div>
        </div>
    )
}
