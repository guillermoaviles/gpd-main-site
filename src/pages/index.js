import CounterUp from "../components/elements/Counterup"
import TextEffect from "../components/elements/TextEffect"
import Layout from "../components/layout/Layout";
import Slider1 from "../components/slider/Slider1";
// import { useState, useEffect } from "react";

function Home() {

    // useEffect(() => {
    //     var value = document.getElementById("count").innerHTML;
    //     console.log(value);
    // })

    return (
        <>
            <Layout>
                <section className="bg-gray-light w-full bg-cover bg-top -mt-24">
                    <img className="w-full" src="/gpd-hero-main-new.png" alt="Monst" />

                </section>
                <section className="bg-gray-light h-[90vh]" id="key-features">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap justify-between ">
                            <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                <div className="flex justify-center items-center bg-blueGray-400 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                    {/* <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg> */}
                                    <img className="h-12 w-auto wow animate__animated animate__fadeIn" src="/assets/imgs/placeholders/handshake-skin-4-svgrepo-com.svg" alt="Monst" />
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading">+ </span>
                                    <span className="sm:text-2xl font-bold font-heading count">
                                        <CounterUp count={28} time={3} />
                                    </span>
                                    <p className="text-xs sm:text-base text-blueGray-600">Años de servicio</p>
                                </div>
                            </div>
                            <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                <div className="flex justify-center items-center bg-blueGray-400 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                    <img className="h-12 w-auto wow animate__animated animate__fadeIn" src="/assets/imgs/placeholders/map-vector.svg" alt="Map" />
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading">+ </span>
                                    <span id="count" className="sm:text-2xl font-bold font-heading count">
                                        <CounterUp count={12} time={3} />
                                    </span>
                                    <p className="text-xs sm:text-base text-blueGray-600">Países Servidos</p>
                                </div>
                            </div>
                            <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".6s">
                                <div className="flex justify-center items-center bg-blueGray-400 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                <img className="h-12 w-auto wow animate__animated animate__fadeIn" src="/assets/imgs/placeholders/customer.svg" alt="Happy Customer" />
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading">Miles</span>
                                    <p className="text-xs sm:text-base text-blueGray-600">Clientes Satisfechos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap h-[70vh] pt-20 lg:flex-nowrap bg-cover bg-no-repeat" style={{ backgroundImage: "url('assets/imgs/backgrounds/pattern.png')" }}>
                        <div className=" w-6/12 my-auto mx-auto">
                            <div className="w-8/12 m-auto text-left">
                                <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading wow animate__animated animate__fadeIn">
                                    <span className="text-transparent text-5xl bg-clip-text bg-gradient-to-r from-gpd-turquoise via-gpd-blue to-gpd-red"> Nunca subestimes el poder de una buena impresión </span>
                                </h2>
                                <p className="mb-8 mt-12 w-10/12 text-2xl text-blueGray-600 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    Aunque vivimos vidas altamente digitalizadas, el material impreso sigue siendo uno de los medios
                                    principales para vender servicios y productos. Y gracias a su poder de crear primeras impresiones
                                    impecablesy generar nuevas oportunidades de negocio, las piezas de mercadeo y publicidad impresas
                                    continuarán siendo una poderosa herramienta para las ventas.
                                </p>
                            </div>
                        </div>
                        <div className=" w-6/12 m-auto wow animate__animated animate__fadeIn rounded-3xl" data-wow-delay=".5s">
                            <div className=" w-8/12 mx-auto">
                                <img className="transition ease-in-out hover:scale-105 rounded-tl-3xl rounded-br-3xl wow animate__animated animate__fadeIn object-cover" src="/assets/imgs/placeholders/guillotina.png" alt="Guillotina" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-gray-light h-[80vh] " id="key-features">
                    <div className="flex flex-wrap h-[70vh] lg:flex-nowrap">
                        <div className=" w-6/12 m-auto wow animate__animated animate__fadeIn rounded-3xl" data-wow-delay=".5s">
                            <div className=" w-8/12 mx-auto">
                                <img className="transition ease-in-out hover:scale-105 rounded-tl-3xl rounded-br-3xl wow animate__animated animate__fadeIn object-cover" src="/assets/imgs/placeholders/triangle-collage.png" alt="Triangle Collage" />
                            </div>
                        </div>
                        <div className="w-6/12 my-auto mx-auto">
                            <div className="w-8/12 m-auto text-center">
                                <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading wow animate__animated animate__fadeIn">
                                    <span className="text-transparent text-5xl bg-clip-text bg-gradient-to-r from-gpd-turquoise via-gpd-blue to-gpd-red"> Misión </span>
                                </h2>
                                <p className="mb-8 text-2xl text-blueGray-600 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    <strong>¿Qué es importante para nosotros?</strong> Usted. Porque estamos conscientes de cómo nuestros servicios tienen un impacto en el crecimiento de su negocio. <br /><br />Nuestra misión es crear valor para todos nuestros clientes, resaltando sus fortalezas a través de cada material colateral, promocional o de exhibición que creamos para ellos.

                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-20 mt-20 bg-center bg-no-repeat" style={{ backgroundImage: "url('assets/imgs/elements/puerto-rico.svg')" }}>
                    <div className="container px-4 mx-auto">
                        <div className="relative py-20 px-4 lg:p-20">
                            <div className="max-w-lg mx-auto text-center">
                                <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading wow animate__animated animate__fadeIn">
                                    <span className="text-gpd-orange"> Contáctenos </span>
                                </h2>
                                <p className="mb-8 text-blueGray-600 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    Si tienes preguntas, necesita más información o necesita producir algo, llámenos o envíenos un correo
                                    electrónico. También puede visitar nuestras facilidades personalmente, ¡nos encantaría recibirte!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
export default Home