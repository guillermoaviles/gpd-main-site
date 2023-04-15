import React from 'react';
import Layout from '../components/layout/Layout';
import CounterUp from "../components/elements/Counterup";
import Model from "../components/model/Model";
import Slider1 from "../components/slider/Slider1";
import Contactanos from '../components/Contactanos';

const FormatoGrande = () => {
    return (
        <>
            <Layout>
                <section className="z-0 h-[100vh] bg-gray-light w-full bg-cover bg-top -mt-24">
                    <div className="relative">
                        <img className="w-full" src="/Vutek.png" alt="Punto de Venta Hero" />
                        <div className="absolute inset-y-0 top-0 left-0 h-full w-1/2">
                            <div className='h-8/12 w-8/12 mt-[20vh] mx-auto'>
                                <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading wow animate__animated animate__fadeIn">
                                    <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-gpd-turquoise via-gpd-blue to-gpd-red">Formato Grande</span>
                                </h2>
                                <p className="mb-5 text-base text-blueGray-600 sm:pr-10 md:text-3xl 2xl:rounded-none 2xl:bg-inherit">
                                    <strong className="text-arquifoam">Arquifoam® </strong>es un material exclusivo que ha revolucionado el mercado de los muebles y displays para punto de venta (POP), y nos ha posicionado como líderes de vanguardia en la categoría. Este innovador producto es mucho más duradero que el cartón ya que utiliza el material  polipropileno, que es más resistente.
                                </p>
                                <div className="relative flex mt-4">
                                    <a href="#_" className="flex items-center self-start justify-center px-5 py-2 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-gpd-blue border border-transparent rounded-md shadow lg:py-4 hover:bg-purple-600 focus:outline-none focus:border-purple-600 focus:shadow-outline-purple md:text-lg xl:text-xl md:px-5 xl:px-10 2xl:shadow-lg" data-primary="purple-500" data-rounded="rounded-full">Ver más</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="relative flex flex-col items-center justify-center w-full px-6 bg-gray-light bg-cover lg:py-40 min-w-screen 2xl:bg-[#f4f4f2] tails-selected-element">
                    <div className="flex flex-col items-center justify-center mx-auto sm:p-6 xl:p-8 lg:flex-row lg:max-w-6xl lg:p-0">
                        <div className="container relative z-20 flex flex-col w-full px-5 pb-1 pr-12 mb-16 text-2xl text-gray-700 lg:w-1/2 sm:pr-0 md:pr-6 md:pl-0 lg:pl-5 xl:pr-10 sm:items-center lg:items-start lg:mb-0">
                            <h1 className="relative z-20 text-5xl font-extrabold leading-none text-blueGray-800 xl:text-6xl sm:text-center lg:text-left" data-primary="purple-500">
                                Diseñado con<br />tu
                                <span className="mt-1 text-transparent text-6xl bg-clip-text bg-gradient-to-r from-gpd-turquoise via-gpd-blue to-gpd-red lg:mt-0"> producto</span><br />
                                en mente
                            </h1>
                            <p className="relative z-20 block mt-6 text-2xl text-blueGray-600 xl:text-3xl sm:text-center lg:text-left">El único límite para lo que podemos crear es su imaginación. ¡Ven y diseña tu exhibidor con nosotros!</p>

                        </div>
                        <div className="relative w-full px-5 rounded-lg cursor-pointer lg:w-1/2 group xl:px-0">
                            <div className="absolute top-36 left-0 w-11/12 -mt-20 opacity-50">
                                <svg className="w-full h-full ml-4 text-arquifoam" data-primary="purple-500" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M45,-78C58.3,-70.3,69,-58.2,75.2,-44.4C81.3,-30.7,82.9,-15.3,83.5,0.4C84.2,16,83.8,32.1,76.5,43.9C69.2,55.7,55.1,63.3,41.2,69.4C27.3,75.4,13.6,80,-0.7,81.2C-15.1,82.5,-30.1,80.3,-41.2,72.6C-52.2,64.9,-59.2,51.6,-67.1,38.5C-75.1,25.5,-83.9,12.8,-83.8,0C-83.8,-12.7,-74.9,-25.4,-65.8,-36.4C-56.7,-47.4,-47.4,-56.7,-36.4,-65.7C-25.4,-74.7,-12.7,-83.5,1.6,-86.2C15.9,-89,31.8,-85.7,45,-78Z" transform="translate(100 100)" className=""></path></svg>
                            </div>
                            <Model />
                        </div>
                    </div>
                </section>
                <section className="py-12 md:py-20">
                    <div className="w-[85vw] px-4 mx-auto">
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full lg:w-1/2 flex flex-wrap">
                                <div className="relative w-full">
                                    <div className="carausel-2-columns slick-carausel" id="carausel-2-columns-1">
                                        <Slider1 />
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
                                <div className="w-10/12 ml-auto px-3 order-1 md:order-1">
                                    <div className="max-w-md-2">
                                        <div className="mb-4">
                                            <span className="text-xs py-1 px-3 text-gpd-orange font-semibold bg-gray-light rounded-xl wow animate__animated animate__fadeInDown" data-wow-delay=".9s">
                                                Ventajas
                                            </span>
                                            <h2 className="text-4xl mt-3 text-blueGray-800 font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                                Las ventajas principales de los productos  <br />
                                                <span className="text-arquifoam">Arquifoam® </span>son:
                                            </h2>
                                        </div>
                                        <div className="flex flex-wrap">
                                            <div className="w-full md:w-1/2 items-start pt-4 pb-8 pr-4 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                                <div className="w-8 mb-5 text-blue-500">
                                                    <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-gpd-turquoise text-white rounded">1</span>
                                                </div>
                                                <div>
                                                    <h3 className="mb-2 text-xl font-semibold font-heading">Ahorros</h3>
                                                    <p className="text-blueGray-400 leading-loose text-sm">Con Arquifoam, podemos reducir significativamente los costos de producción en comparación con otros materiales como el acrílico, el PVC y la madera.</p>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                                <div className="w-8 mb-5 text-blue-500">
                                                    <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-gpd-turquoise text-white rounded">2</span>
                                                </div>
                                                <div>
                                                    <h3 className="mb-2 text-xl font-semibold font-heading">Tiempo de producción</h3>
                                                    <p className="text-blueGray-400 leading-loose text-sm">Nuestro tiempo de producción es menor que cuando utilizamos otros materiales.</p>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-1/2 items-start py-4 pr-4 wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                                <div className="w-8 mb-5 text-blue-500">
                                                    <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-gpd-turquoise text-white rounded">3</span>
                                                </div>
                                                <div>
                                                    <h3 className="mb-2 text-xl font-semibold font-heading">Montaje y transporte</h3>
                                                    <p className="text-blueGray-400 leading-loose text-sm">Las piezas de exhibición son livianas y se ensamblan/desmontan fácilmente.</p>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                                <div className="w-8 mb-5 text-blue-500">
                                                    <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-gpd-turquoise text-white rounded">4</span>
                                                </div>
                                                <div>
                                                    <h3 className="mb-2 text-xl font-semibold font-heading">Sustentabilidad</h3>
                                                    <p className="text-blueGray-400 leading-loose text-sm">Las pantallas son duraderas, impermeables y completamente reciclables.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
                <Contactanos/>
            </Layout>
        </>
    );
};

export default FormatoGrande;
