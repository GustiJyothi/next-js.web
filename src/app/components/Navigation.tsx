'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaHome, FaTools, FaChartLine, FaTasks, FaPhone } from 'react-icons/fa';
import Transitions from './Transitions';

const NavLinks = [
    { name: 'Home', link: '/', icon: FaHome },
    { name: 'Skills', link: '/skills', icon: FaTools },
    { name: 'Experience', link: '/experience', icon: FaChartLine },
    { name: 'Contact', link: '/contact', icon: FaPhone },
];

const Navigation = () => {
    const [isRouting, setIsRouting] = useState(false);
    const path = usePathname();
    const [prevPath, setPrevPath] = useState("/");

    useEffect(() => {
        if (prevPath !== path) {
            setIsRouting(true);
        }
    }, [path, prevPath]);

    useEffect(() => {
        if (isRouting) {
            setPrevPath(path);
            const timeout = setTimeout(() => {
                setIsRouting(false);
            }, 1200);

            return () => clearTimeout(timeout);
        }
    }, [isRouting, path]);

    const isHomePage = path === '/';

    return (
        <div 
            style={{ 
                left: '20%', 
                top: isHomePage ? '90%' : 'auto',
                bottom: isHomePage ? 'auto' : '-90%',
                transform: 'translateX(-90%)',
            }}
            className='absolute z-[50] -bottom-20 w-[50%] md:w-[20%] max-h-[150px] rounded-full flex justify-between items-center border border-white bg-black p-4'
        >
            {isRouting && <Transitions />}
            {NavLinks.map((nav) => (
                <Link
                    key={nav.name}
                    href={nav.link}
                    className="flex flex-col items-center"
                >
                    <nav.icon 
                        className={`w-[24px] h-[24px] mb-2 ${path === nav.link ? "text-purple-800" : "text-white"}`} 
                        style={{ marginTop: '5px' }} 
                    />
                    <span className="text-white text-sm">{nav.name}</span>
                </Link>
            ))}
        </div>
    );
}

export default Navigation;
