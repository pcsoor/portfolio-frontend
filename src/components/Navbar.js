import React from 'react'
import {Disclosure, Menu, Transition} from '@headlessui/react'
import {NavLink, Link, useHistory} from 'react-router-dom'
import {Sparkles} from "heroicons-react"
import userEvent from '@testing-library/user-event'
import {createPopper} from "@popperjs/core";

function Navbar() {
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

    
    var firstName;
    if (localStorage.getItem('user-info') != null && JSON.parse(localStorage.getItem('user-info')).name != null) {
        const user = JSON.parse(localStorage.getItem('user-info'));
        firstName = user.name.split(" ")[0];
    }
    

    const history = useHistory();

    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();

    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {placement: "bottom-start"});
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };

    function classNames(...classes) {
        return classes
            .filter(Boolean)
            .join(' ')
    }

    function logout() {
        localStorage.clear();
        history.go("/login");
    }

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
                                    <NavLink
                                        exact
                                        to={item.href}
                                        key={item.name}
                                        className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium duration-100'
                                        activeClassName="bg-gray-900 hover:text-gray-300 hover:bg-gray-900"
                                        aria-current={item.current
                                        ? 'page'
                                        : undefined}>
                                        {item.name}
                                    </NavLink>
                                ))}
                                <NavLink
                                    to='/login'
                                    key='login'
                                    className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium duration-100'
                                    activeClassName="bg-gray-900 hover:text-gray-300 hover:bg-gray-900">
                                    Login
                                </NavLink>
                                {localStorage.getItem('user-info') && JSON.parse(localStorage.getItem('user-info')).name != null
                                    ? 
                                    <> 
                                        <button className={
                                            "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium duration-100"
                                        }
                                        type="button"
                                        ref={btnDropdownRef}
                                        onClick={() => {
                                            dropdownPopoverShow
                                            ? closeDropdownPopover()
                                            : openDropdownPopover();
                                        }}
                                        >
                                        {firstName}
                                        </button>
                                        <div ref={popoverDropdownRef} className={ 
                                            (dropdownPopoverShow ? "block " : "hidden ") +
                                            "text-base z-50 p-2 float-left list-none text-left rounded shadow-md bg-white overflow-hidden"}
                                            style={{ minWidth: "12rem" }}>
                                            <Link to="/" 
                                                className="text-sm font-normal block w-full whitespace-nowrap bg-transparent hover:text-gray-500" 
                                                onClick={logout}>
                                                Logout
                                            </Link>
                                        </div>
                                    </>
                                    : null
                                }
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
                {< a href = "" > Login </a>}
            </div> </Disclosure.Panel>
        </>)}
        </Disclosure>
    )
}

export default Navbar;