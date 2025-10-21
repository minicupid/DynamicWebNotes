import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar() {
    const location = useLocation();

    const navItems = [
        { path: '/brew', emoji: '☕'},
        { path: '/history', emoji: '📖'},
        { path: '/philosophy', emoji: '💭' }
    ];

    return (
        <div className = "fixed bg-transparent rounded-full m-5 h-fit p-5">
            <ul className="[ navbar ] bg-white/20 backdrop-blur-md rounded-full px-8 py-10 shadow-xl border border-white/30 flex flex-col gap-10">
                {navItems.map((item) => (
                    <li key={item.path}>
                        <Link
                            to={item.path}
                            className={`tooltip tooltip-right ${location.pathname === item.path ? 'active' : ''}`}
                            data-tip={item.path}
                        >
                            <motion.button 
                                className="text-3xl"
                                whileHover={{ scale: 1.2 }}
                            >
                                {item.emoji}
                            </motion.button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}