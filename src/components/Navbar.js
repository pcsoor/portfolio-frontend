import React from 'react'
import {Disclosure, Menu, Transition} from '@headlessui/react'
import {NavLink} from 'react-router-dom'
import {Sparkles} from "heroicons-react"

const navigation = [
    {
        name: 'Home',
        href: '/',
        current: true
    }, {
        name: 'My Work',
        href: '/work',
        current: false
    }, {
        name: 'Resume',
        href: '/resume',
        current: false
    }, {
        name: 'Contact',
        href: '/contact',
        current: false
    }
]
function classNames(...classes) {
    return classes
        .filter(Boolean)
        .join(' ')
}

export default function Navbar() {
    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({open}) => ( <> <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <Disclosure.Button
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </Disclosure.Button>
                    </div>
                    <div
                        className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <a href="/" className="text-white font-semibold text-xl tracking-tight">Peter Frank Csoor</a>
                    </div>
                    <div
                        className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <NavLink exact
                                        to={item.href}
                                        className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                        activeClassName="bg-gray-900 text-white"
                                        aria-current={item.current
                                        ? 'page'
                                        : undefined}>
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div> < Disclosure.Panel className = "sm:hidden" > <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={classNames(item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium')}
                        aria-current={item.current
                        ? 'page'
                        : undefined}>
                        {item.name}
                    </a>
                ))}
            </div> </Disclosure.Panel>
        </ >)}
        </Disclosure>
    )
}