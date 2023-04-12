import React from 'react';
import Layout from '../components/layout/Layout';
import Link from "next/link"
import Image from 'next/image';

const SobreNosotros = () => {
    return (
        <>
            <Layout>
                <section class="relative flex flex-col-reverse w-full h-[100vh] -mt-24 py-16 bg-gray-900 lg:pt-0 lg:flex-col lg:pb-0">
                    <div class="inset-y-0 top-0 right-0 z-0 w-full max-w-xl md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                        <svg class="absolute left-0 hidden h-full text-gray-900 transform -translate-x-1/2 lg:block" viewBox="0 0 100 100" fill="currentColor" preserveAspectRatio="none slice"><path d="M50 0H80L50 120H0L50 0Z"></path></svg>
                        <img class="object-cover h-56 shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full" src="https://images.unsplash.com/photo-1601933470096-0e34634ffcde?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80" alt=""/>
                    </div>
                    <div class="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                        <div class="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                            <p class="flex inline-block text-sm font-semibold tracking-wider text-purple-200 uppercase rounded-full mb-7">
                                New Features
                            </p>
                            <h1 class="mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-6xl sm:leading-none">
                                The Future of<br class="hidden md:block"/>
                                    <span class="inline-block text-purple-500">Web Design</span>
                            </h1>
                            <p class="mb-5 text-base text-gray-300 sm:pr-10 md:text-lg">
                                Learn how we are tranforming the world of web design. These state-of-the-art innovative tools will remind you of why you got into design in the first place.
                            </p>
                            <div class="flex flex-col items-center pt-2 sm:flex-row sm:pt-4">
                                <a href="/" class="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 bg-purple-500 rounded shadow-md sm:w-auto sm:mr-4 sm:mb-0 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                                    Get started
                                </a>
                                <a href="/" class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-700 rounded shadow-md sm:w-auto hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-20">
                    <div className="container">
                        <div className="flex flex-wrap -mx-4 mb-12 wow animate__animated animate__fadeIn animated hover-up-5">
                            <div className="w-full lg:w-1/2 px-4 lg:pr-20 lg:pt-4 order-1 lg:order-0">
                                <Link href="/blog" legacyBehavior>
                                    <a>
                                        <span className="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-50 rounded-full text-blue-600">Development</span>
                                    </a>
                                </Link>
                                <h3 className="my-4 text-xl md:text-2xl font-bold font-heading">
                                    <Link href="/blog-single" legacyBehavior>
                                        <a className="hover:text-blue-500"> How to Make Website WCAG Compliant?</a>
                                    </Link>
                                </h3>
                                <p className="mb-4 text-sm md:text-base leading-loose text-blueGray-400">Aenean tempus orci eu est ultrices hendrerit. Fusce suscipit, leo a semper venenatis, felis urna pulvinar nibh, vitae porta erat risus sed mauris. Vestibulum vehicula leo eget libero eleifend, quis dictum eros bibendum. Maecenas convallis tempor varius.</p>
                                <Link href="/blog-single" legacyBehavior>
                                    <a className="text-xs font-semibold text-blue-600">
                                        <span>Read More</span>
                                        <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                            <div className="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-1">
                                <Link href="/blog-single" legacyBehavior>
                                    <a>
                                        <img className="h-80 w-full object-cover rounded" src="/assets/imgs/placeholders/img-6.png" alt="Monst" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-4 mb-12 wow animate__animated animate__fadeIn animated hover-up-5">
                            <div className="w-full lg:w-1/2 px-4 lg:pl-20 lg:pt-4 order-1">
                                <Link href="/blog-2" legacyBehavior>
                                    <a>
                                        <span className="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-50 rounded-full text-blue-600">Startup</span>
                                    </a>
                                </Link>
                                <h3 className="my-4 text-xl md:text-2xl font-bold font-heading">
                                    <Link href="/blog-single" legacyBehavior>
                                        <a className="hover:text-blue-500"> You have a Great Is Business Idea?</a>
                                    </Link>
                                </h3>
                                <p className="mb-4 text-sm md:text-base leading-loose text-blueGray-400">Aenean tempus orci eu est ultrices hendrerit. Fusce suscipit, leo a semper venenatis, felis urna pulvinar nibh, vitae porta erat risus sed mauris. Vestibulum vehicula leo eget libero eleifend, quis dictum eros bibendum. Maecenas convallis tempor varius.</p>
                                <Link href="/blog-single" legacyBehavior>
                                    <a className="text-xs font-semibold text-blue-600">
                                        <span>Read More</span>
                                        <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                            <div className="w-full lg:w-1/2 px-4 mb-8 order-0">
                                <Link href="/blog-single" legacyBehavior>
                                    <a>
                                        <img className="h-80 w-full object-cover rounded" src="/assets/imgs/placeholders/img-7.png" alt="Monst" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-4 mb-12 wow animate__animated animate__fadeIn animated hover-up-5">
                            <div className="w-full lg:w-1/2 px-4 lg:pr-20 lg:pt-4 order-1 lg:order-0">
                                <Link href="/blog-2" legacyBehavior>
                                    <a>
                                        <span className="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-50 rounded-full text-blue-600">Startup</span>
                                    </a>
                                </Link>
                                <h3 className="my-4 text-xl md:text-2xl font-bold font-heading">
                                    <Link href="/blog-single" legacyBehavior>
                                        <a className="hover:text-blue-500"> The Future of Enterprise API Development</a>
                                    </Link>
                                </h3>
                                <p className="mb-4 text-sm md:text-base leading-loose text-blueGray-400">Aenean tempus orci eu est ultrices hendrerit. Fusce suscipit, leo a semper venenatis, felis urna pulvinar nibh, vitae porta erat risus sed mauris. Vestibulum vehicula leo eget libero eleifend, quis dictum eros bibendum. Maecenas convallis tempor varius.</p>
                                <Link href="/blog-single" legacyBehavior>
                                    <a className="text-xs font-semibold text-blue-600">
                                        <span>Read More</span>
                                        <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                            <div className="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-1">
                                <Link href="/blog-single" legacyBehavior>
                                    <a>
                                        <img className="h-80 w-full object-cover rounded" src="/assets/imgs/placeholders/img-8.png" alt="Monst" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-4 mb-12 wow animate__animated animate__fadeIn animated hover-up-5">
                            <div className="w-full lg:w-1/2 px-4 lg:pl-20 lg:pt-4 order-1">
                                <Link href="/blog-2" legacyBehavior>
                                    <a>
                                        <span className="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-50 rounded-full text-blue-600">Startup</span>
                                    </a>
                                </Link>
                                <h3 className="my-4 text-xl md:text-2xl font-bold font-heading">
                                    <Link href="/blog-single" legacyBehavior>
                                        <a className="hover:text-blue-500"> How To Make Your iOS 13 Compatible?</a>
                                    </Link>
                                </h3>
                                <p className="mb-4 text-sm md:text-base leading-loose text-blueGray-400">Aenean tempus orci eu est ultrices hendrerit. Fusce suscipit, leo a semper venenatis, felis urna pulvinar nibh, vitae porta erat risus sed mauris. Vestibulum vehicula leo eget libero eleifend, quis dictum eros bibendum. Maecenas convallis tempor varius.</p>
                                <Link href="/blog-single" legacyBehavior>
                                    <a className="text-xs font-semibold text-blue-600">
                                        <span>Read More</span>
                                        <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                            <div className="w-full lg:w-1/2 px-4 mb-8 order-0">
                                <Link href="/blog-single" legacyBehavior>
                                    <a>
                                        <img className="h-80 w-full object-cover rounded" src="/assets/imgs/placeholders/img-9.jpg" alt="Monst" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="text-center">
                            <Link href="/blog" legacyBehavior>
                                <a className="hover-up-5 inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded">Show all posts</a>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-blue-500">
                    <div className="container">
                        <div className="text-center max-w-xl mx-auto">
                            <h2 className="mb-4 text-3xl lg:text-3xl text-white font-bold font-heading">
                                <span>Subscribe now to </span>
                                <span className="text-blue-200">Our Newsletter</span> <br />
                                <span>and get the Coupon code.</span>
                            </h2>
                            <p className="mb-8 text-blueGray-200">All your information is completely confidential</p>
                            <div className="flex flex-wrap max-w-lg mx-auto">
                                <div className="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-blue-500 border border-blue-300 rounded">
                                    <svg className="h-6 w-6 my-auto text-blue-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    <input className="w-full pl-3 py-4 text-xs text-white placeholder-white font-semibold leading-none bg-blue-500 outline-none" type="text" placeholder="Type your e-mail" />
                                </div>
                                <button className="w-full md:w-auto py-4 px-8 text-xs text-white text-blue-800 hover:text-white font-semibold leading-none border border-blue-300 hover:border-blue-300 bg-white hover:bg-blue-500 rounded transition duration-300 ease-in-out" type="submit">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default SobreNosotros;