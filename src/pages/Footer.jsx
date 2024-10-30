/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div className="bg-gray-500 ms:h-96 mt-16">
                <div className="container mx-auto py-4 px-5 flex  justify-center ">
                    <Link to="/" className=''> Back to home</Link>
                </div>
            </div>
            <footer className="text-gray-600 body-font bg-gray-500 border-t-2">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <span className="ml-3 text-xl text-black  hover:text-white"> <span className='text-5xl font-extrabold text-purple-800'>s</span>hoppyGlobe</span>
                        </a>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Get to Know Us</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-white ">About AhoppyGlobe</a>
                                </li>
                                <li>
                                    <a className="text-white ">Careers</a>
                                </li>
                                <li>
                                    <a className="text-white ">Press Releases</a>
                                </li>
                                <li>
                                    <a className="text-white ">ShoppyGlobe Science</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Connection with us</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-white ">Facebook</a>
                                </li>
                                <li>
                                    <a className="text-white ">Twitter</a>
                                </li>
                                <li>
                                    <a className="text-white ">Instagram</a>
                                </li>
                               
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Make Money with Us</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-white">Sell on ShoppyGlobe</a>
                                </li>
                                <li>
                                    <a className="text-white ">sell under ShoppyGlobe Acecelerator </a>
                                </li>
                                <li>
                                    <a className="text-white">supply to ShoppyGlobe</a>
                                </li>
                                <li>
                                    <a className="text-white ">Become an Affiliate</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Let Us Help you</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-white"> Your Account</a>
                                </li>
                                <li>
                                    <a className="text-white"> Returne Centre</a>
                                </li>
                                <li>
                                    <a className="text-white">100% Purchase Protection</a>
                                </li>
                                <li>
                                    <a className="text-white"> Help</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <hr />

                <div className="bg-gray-500">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-black text-sm text-center sm:text-left">© 2020 ShoppGlobe — @shoppyglobe
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a className="text-black">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-black">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-black">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-black">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
