import React from 'react';
import Layout from '../components/layout/Layout';
import CounterUp from "../components/elements/Counterup";
import Model from "../components/model/Model";
import Contactanos from '../components/Contactanos';

const Servicios = () => {
    return (
        <>
            <Layout>
                <section className="z-0 h-[100vh] bg-gray-light w-full bg-cover bg-top -mt-32">
                    <div className="relative">
                        <img className="w-full" src="/Servicios.png" alt="Servicios Hero" />
                        <div className="absolute inset-y-0 top-0 left-0 h-full w-1/2">
                            <div className='h-8/12 w-8/12 mt-[30vh] mx-auto'>
                                <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading wow animate__animated animate__fadeIn">
                                    <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-gpd-turquoise via-gpd-blue to-gpd-red">Servicios</span>
                                </h2>
                                <p className="mb-5 text-base text-blueGray-600 sm:pr-10 md:text-3xl 2xl:rounded-none 2xl:bg-inherit">
                                    <strong className="">Una vez cruza nuestras puertas</strong>, nada es imposible. Ven y descubre cómo podemos ayudarte hacer tu idea realidad a través de nuestro servicio de primera calidad y amplia variedad de productos.
                                </p>
                                <div className="relative flex mt-4">
                                    <a href="#_" className="flex items-center self-start justify-center px-5 py-2 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-gpd-blue border border-transparent rounded-md shadow lg:py-4 hover:bg-purple-600 focus:outline-none focus:border-purple-600 focus:shadow-outline-purple md:text-lg xl:text-xl md:px-5 xl:px-10 2xl:shadow-lg" data-primary="purple-500" data-rounded="rounded-full">
                                        Ver más
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-32 pb-16 bg-gray-light xl:bg-contain bg-top bg-no-repeat">
                    <div className="w-10/12 h-[80vh] mx-auto">
                        <div className="text-center mb-24">
                            <h2 className="max-w-lg mb-4 text-5xl font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                <span>Nuestros Servicios</span>
                            </h2>
                        </div>
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full h-[590px] md:w-1/2 lg:w-1/4 px-3 mb-6">
                                <div className="relative h-full hover-up-5 shadow-xl wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                    <img className="object-cover h-full brightness-50 rounded" src="/assets/imgs/illustrations/revistas.jpg" alt="Revistas" />
                                    <div className="absolute inset-y-0 top-0 left-0 h-full pt-16 pb-8 px-4 text-center">
                                        <h3 className="mb-2 text-4xl font-bold text-blueGray-200 font-heading">Impresión General</h3>
                                        <div className="flex flex-col items-center mt-8 mb-8">
                                            <ul className="text-blueGray-200">
                                                <li className="flex mb-3">
                                                    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <span>Flyers</span>
                                                </li>
                                                <li className="flex mb-3">
                                                    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <span>Shoppers</span>
                                                </li>
                                                <li className="flex mb-3">
                                                    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <span>Posters</span>
                                                </li>
                                                <li className="flex mb-3">
                                                    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <span>Folletos</span>
                                                </li>
                                                <li className="flex mb-3">
                                                    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <span>Revistas</span>
                                                </li>
                                                <li className="flex mb-3">
                                                    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <span>Inserts</span>
                                                </li>
                                                <li className="flex mb-3">
                                                    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <span>Shelf Talkers y otras piezas POP</span>
                                                </li>
                                                <li className="flex">
                                                    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <span>Kits de Prensa</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='absolute block -ml-4 bottom-8 w-full'>
                                            <a className="block sm:inline-block mt-auto py-4 px-8 mb-4 sm:mb-0 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-gpd-orange border border-transparent rounded-md shadow hover:bg-blue-500" href="impresion-general">
                                                ¡Ver mas!
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[590px] md:w-1/2 lg:w-1/4 px-3 mb-6">
                                <div className="relative h-full hover-up-5 shadow-xl wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                    <img className="object-cover h-full brightness-50 rounded" src="/assets/imgs/illustrations/epson.jpg" alt="Monst" />
                                    <div className="absolute inset-y-0 top-0 left-0 h-full pt-16 pb-8 px-4 text-center">
                                        <h3 className="mb-2 text-4xl px-1 font-bold text-blueGray-200 font-heading">Formato Grande</h3>
                                        <div className="flex flex-col items-center md:mt-20 sm:mt:8 mb-8 ">
                                            <ul className="text-blueGray-200">
                                                <li className="flex mb-3">
                                                    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <span>Flyers</span>
                                                </li>
                                                <li className="flex mb-3">
                                                    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <span>Shoppers</span>
                                                </li>
                                                <li className="flex mb-3">
                                                    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <span>Posters</span>
                                                </li>
                                                <li className="flex mb-3">
                                                    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <span>Folletos</span>
                                                </li>
                                                <li className="flex mb-3">
                                                    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <span>Revistas</span>
                                                </li>
                                                <li className="flex mb-3">
                                                    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <span>Inserts</span>
                                                </li>
                                                <li className="flex mb-3">
                                                    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <span>Shelf Talkers y otras piezas POP</span>
                                                </li>
                                                <li className="flex">
                                                    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <span>Kits de Prensa</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='absolute block -ml-4 bottom-8 w-full'>
                                            <a className="block sm:inline-block mt-auto py-4 px-8 mb-4 sm:mb-0 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-gpd-orange border border-transparent rounded-md shadow hover:bg-blue-500" href="/formato-grande">
                                                ¡Ver mas!
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[590px] md:w-1/2 lg:w-1/4 px-3 mb-6">
                                <div className="relative h-full hover-up-5 shadow-xl wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                    <img className="object-cover h-full brightness-50 rounded" src="/assets/imgs/illustrations/arquifoam.jpg" alt="Monst" />
                                    <div className="absolute inset-y-0 top-0 left-0 h-full pt-16 pb-8 px-4 text-center">
                                        <h3 className="mb-2 text-4xl font-bold text-blueGray-200 font-heading">Punto de Venta</h3>
                                        {/* <div className="flex flex-col items-center mt-8 mb-8"> */}
                                        <div className="flex flex-col items-center md:mt-20 sm:mt:8 mb-8 ">
                                            <ul className="text-blueGray-200">
                                                <li className="flex mb-3">
                                                    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <span>Flyers</span>
                                                </li>
                                                <li className="flex mb-3">
                                                    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <span>Shoppers</span>
                                                </li>
                                                <li className="flex mb-3">
                                                    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <span>Posters</span>
                                                </li>
                                                <li className="flex mb-3">
                                                    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <span>Folletos</span>
                                                </li>
                                                <li className="flex mb-3">
                                                    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <span>Revistas</span>
                                                </li>
                                                <li className="flex mb-3">
                                                    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <span>Inserts</span>
                                                </li>
                                                <li className="flex mb-3">
                                                    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <span>Shelf Talkers y otras piezas POP</span>
                                                </li>
                                                <li className="flex">
                                                    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <span>Kits de Prensa</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='absolute block -ml-4 bottom-8 w-full'>
                                            <a className="block sm:inline-block mt-auto py-4 px-8 mb-4 sm:mb-0 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-gpd-orange border border-transparent rounded-md shadow hover:bg-blue-500" href="/punto-de-venta">
                                                ¡Ver mas!
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[590px] md:w-1/2 lg:w-1/4 px-3 mb-6">
                                <div className="relative h-full hover-up-5 rounded shadow-xl wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                    <img className="object-cover h-full brightness-50 rounded" src="/assets/imgs/illustrations/revistas.jpg" alt="Monst" />
                                    <div className="absolute inset-y-0 top-0 left-0 h-full pt-16 pb-8 px-4 text-center">
                                        <h3 className="mb-2 text-4xl font-bold text-blueGray-200 font-heading">Trabajos Especiales</h3>
                                        <div className="flex flex-col items-center mt-8 mb-8">
                                            <ul className="text-blueGray-200">
                                                <li className="flex mb-3">
                                                    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <span>Flyers</span>
                                                </li>
                                                <li className="flex mb-3">
                                                    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <span>Shoppers</span>
                                                </li>
                                                <li className="flex mb-3">
                                                    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <span>Posters</span>
                                                </li>
                                                <li className="flex mb-3">
                                                    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <span>Folletos</span>
                                                </li>
                                                <li className="flex mb-3">
                                                    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <span>Revistas</span>
                                                </li>
                                                <li className="flex mb-3">
                                                    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <span>Inserts</span>
                                                </li>
                                                <li className="flex mb-3">
                                                    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <span>Shelf Talkers y otras piezas POP</span>
                                                </li>
                                                <li className="flex">
                                                    <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <span>Kits de Prensa</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='absolute block -ml-4 bottom-8 w-full'>
                                            <a className="block sm:inline-block mt-auto py-4 px-8 mb-4 sm:mb-0 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-gpd-orange border border-transparent rounded-md shadow hover:bg-blue-500" href="trabajos-especiales">
                                                ¡Ver mas!
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section>
                    <div className="marquee">
                        <div className="marquee--inner">
                            <span>

                                <img className="object-cover w-[20px] opacity-20 rounded" src="/assets/imgs/illustrations/revistas.jpg" alt="Monst" />


                                <img className="object-cover opacity-20 rounded" src="/assets/imgs/elements/display-panadol.png" alt="Monst" />

                                <div className="orb yellow"></div>
                                <div className="orb blue"></div>
                                <div className="orb orange"></div>
                                <div className="orb purple"></div>
                                <div className="orb green"></div>
                                <div className="orb"></div>
                            </span>
                            <span>
                                <div className="orb"></div>
                                <div className="orb red"></div>
                                <div className="orb yellow"></div>
                                <div className="orb blue"></div>
                                <div className="orb orange"></div>
                                <div className="orb purple"></div>
                                <div className="orb green"></div>
                                <div className="orb"></div>
                            </span>

                        </div>
                    </div>
                </section> */}
                <Contactanos />
            </Layout>
        </>
    );
};

export default Servicios;