'use client';
import Link from 'next/link';
import Nav from './Nav';
// import  Search from './Search'
import Image from 'next/image';
import { useState } from 'react';
// import Img from '@/public/images/quickkart-high-resolution-logo-color-on-transparent-background.webp';
const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className='w-[90%] relative rounded-lg mx-auto mt-5 py-[10px] px-[10px] md:px-[20px] bg-transparent backdrop-filter shadow-2xl shadow-black'>
            <div className='flex items-center justify-between'>
                <Link href='/' className=''>
                    Instagram
                </Link>
                <div className='flex flex-col gap-1' onClick={()=> setOpen(!open)}>
                    <span className='bg-white w-5 h-1 rounded-xl'></span>
                    <span className='bg-white w-5 h-1 rounded-xl'></span>
                    <span className='bg-white w-5 h-1 rounded-xl'></span>
                </div>
               {open ? <Nav /> : null}
            </div>
        </header>
    );
};

export default Header;