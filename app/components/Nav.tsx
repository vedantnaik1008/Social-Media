'use client';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import UserButtont from '@/app/components/UserButton';

const items = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'post', link: '/post' },
    { id: 3, name: 'bio', link: '/bio' },
    { id: 4, name: 'search', link: '/search' },
    { id: 4, name: 'reels', link: '/reels' }
];


const Nav = () => {
    const { user } = useUser();
    
    return (
        <nav className='absolute top-16 left-0 bg-black rounded-lg px-4 py-8 w-full mx-auto'>
                <ul className='flex flex-col justify-center items-center gap-6'>
                    {items.map((item) => (
                            <li
                                key={item.id}
                                className=' hover:underline underline-offset-1 font-medium'>
                                <Link href={item.link}>{item.name}</Link>
                            </li>
                    ))}
                    <li>
                        <UserButtont />
                    </li>
                </ul>
        </nav>
    );
};

export default Nav;
