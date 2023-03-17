import React from 'react';
import Layout from '../components/layout/Layout';
import CounterUp from "../components/elements/Counterup";
import Model from "../components/model/Model"

const Services = () => {
    return (
        <>
            <Layout>
                <section className="z-0 bg-gray-light w-full bg-cover bg-top -mt-24">
                    <div className="relative">
                        <img className="w-full" src="/servicios-hero-2.png" alt="Monst" />
                        <div className="absolute inset-y-0 top-0 left-0 h-full w-1/2">
                            <div className='h-8/12 w-8/12 mt-80 mx-auto'>
                                <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading wow animate__animated animate__fadeIn">
                                    <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-gpd-turquoise via-gpd-blue to-gpd-red">Servicios</span>
                                </h2>
                                <p class="mb-5 text-base text-gpd-blue sm:pr-10 md:text-3xl 2xl:rounded-none 2xl:bg-inherit">
                                    <strong class="">Una vez cruza nuestras puertas</strong>, nada es imposible. Ven y descubre cómo podemos ayudarte hacer tu idea realidad a través de nuestro servicio de primera calidad y amplia variedad de productos.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <div>

                </div>
                <section className="pt-24 pb-16 bg-gray-light xl:bg-contain bg-top bg-no-repeat">
                    <div className="w-10/12 h-[80vh] mx-auto">
                        <div className="text-center mb-24">
                            <h2 className="max-w-lg mb-4 text-5xl font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                <span>Nuestros Servicios</span>
                            </h2>
                        </div>
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full h-[590px] md:w-1/2 lg:w-1/4 px-3 mb-6">
                                <div className="relative h-full hover-up-5 shadow-xl wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                    <img className="object-cover h-full opacity-20 rounded" src="/assets/imgs/illustrations/revistas.jpg" alt="Revistas" />
                                    <div className="absolute inset-y-0 top-0 left-0 h-full pt-16 pb-8 px-4 text-center">
                                        <h3 className="mb-2 text-4xl font-bold text-gpd-blue font-heading">Impresión de Prensa</h3>
                                        <div className="flex flex-col items-center mt-8 mb-8">
                                            <ul className="text-gpd-blue">
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
                                        <div>
                                            <a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" href="#">
                                                ¡Ver mas!
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[590px] md:w-1/2 lg:w-1/4 px-3 mb-6">
                                <div className="relative h-full hover-up-5 shadow-xl wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                    <img className="object-cover h-full opacity-20 rounded" src="/assets/imgs/illustrations/epson.jpg" alt="Monst" />
                                    <div className="absolute inset-y-0 top-0 left-0 h-full pt-16 pb-8 px-4 text-center">
                                        <h3 className="mb-2 text-4xl px-1 font-bold text-gpd-blue font-heading">Impresión Digital</h3>
                                        <div className="flex flex-col items-center mt-8 mb-8">
                                            <ul className="text-gpd-blue">
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
                                        <div>
                                            <a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" href="#">
                                                ¡Ver mas!
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[590px] md:w-1/2 lg:w-1/4 px-3 mb-6">
                                <div className="relative h-full hover-up-5 shadow-xl wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                    <img className="object-cover h-full opacity-20 rounded" src="/assets/imgs/illustrations/arquifoam.jpg" alt="Monst" />
                                    <div className="absolute inset-y-0 top-0 left-0 h-full pt-16 pb-8 px-4 text-center">
                                        <h3 className="mb-2 text-4xl font-bold text-gpd-blue font-heading">Productos de Arquifoam</h3>
                                        <div className="flex flex-col items-center mt-8 mb-8">
                                            <ul className="text-gpd-blue">
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
                                        <div>
                                            <a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" href="#">
                                                ¡Ver mas!
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[590px] md:w-1/2 lg:w-1/4 px-3 mb-6">
                                <div className="relative h-full hover-up-5 rounded shadow-xl wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                    <img className="object-cover h-full opacity-20 rounded" src="/assets/imgs/illustrations/revistas.jpg" alt="Monst" />
                                    <div className="absolute inset-y-0 top-0 left-0 h-full pt-16 pb-8 px-4 text-center">
                                        <h3 className="mb-2 text-4xl font-bold text-gpd-blue font-heading">Trabajos Especiales</h3>
                                        <div className="flex flex-col items-center mt-8 mb-8">
                                            <ul className="text-gpd-blue">
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
                                        <div>
                                            <a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" href="#">
                                                ¡Ver mas!
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="">
                    <div className="container mt-20">
                        <div className="max-w-2xl mx-auto text-center">
                            <div className="max-w-md mb-8 mx-auto">
                                <span className="text-xs py-1 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl wow animate__animated animate__fadeInDown" data-wow-delay=".9s">
                                    Contáctanos
                                </span>
                                <h2 className="mt-2 text-4xl font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    ¡Nos <span className="text-blue-500">encantaría</span> ayudarte!
                                </h2>
                            </div>
                            <div>
                                <form>
                                    <div className="mb-4 text-sm wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                        <span className="mr-4 font-semibold">Departamento:</span>
                                        <label className="mr-4">
                                            <input className="mr-1" type="radio" name="department" value="1" checked="" />
                                            <span>Servicio</span>
                                        </label>
                                        <label>
                                            <input className="mr-1" type="radio" name="department" value="2" />
                                            <span>Ventas</span>
                                        </label>
                                    </div>
                                    <div className="mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        <input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" placeholder="Sujeto" />
                                    </div>
                                    <div className="mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        <input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" placeholder="Nombre" />
                                    </div>
                                    <div className="mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        <input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="email" placeholder="Correo electrónico" />
                                    </div>
                                    <div className="mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        <textarea className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none" placeholder="Mensaje..."></textarea>
                                    </div>
                                    {/* <div className="mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        <label className="flex px-2 bg-blueGray-50 rounded">
                                            <input className="hidden" type="file" name="Choose file"/>
                                            <span className="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-blueGray-500 hover:bg-blueGray-600 rounded cursor-pointer"> Importar</span>
                                        </label>
                                    </div> */}
                                    <div className="flex justify-center items-center wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        <button className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded" type="submit">
                                            Enviar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Services;