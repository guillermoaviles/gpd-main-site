import React from 'react';
import Layout from '../components/layout/Layout';
import CounterUp from "../components/elements/Counterup";
import Model from "../components/model/Model"
import Slider1 from "../components/slider/Slider1"

const Arquifoam = () => {
    return (
        <>
            <Layout>
                <section className="z-0 h-[100vh] bg-gray-light w-full bg-cover bg-top -mt-24">
                    <div className="relative">
                        <img className="w-full" src="/arquifoam-hero.png" alt="Arquifoam Hero" />
                        <div className="absolute inset-y-0 top-0 left-0 h-full w-1/2">
                            <div className='h-8/12 w-8/12 mt-[20vh] mx-auto'>
                                <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading wow animate__animated animate__fadeIn">
                                    <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-gpd-turquoise via-gpd-blue to-gpd-red">Productos en Arquifoam®</span>
                                </h2>
                                <p className="mb-5 text-base text-blueGray-600 sm:pr-10 md:text-3xl 2xl:rounded-none 2xl:bg-inherit">
                                    <strong className="">Aquifoam® </strong>es un material propietario que ha revolucionado el mercado de los muebles y displays para punto de venta (POP), y nos ha posicionado como líderes de vanguardia en la categoría. Este innovador producto es mucho más duradero que el cartón ya que utiliza el material  polipropileno, que es más resistente.
                                </p>
                                <div className="relative flex mt-4">
                                    <a href="#_" className="flex items-center self-start justify-center px-5 py-2 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-gpd-orange border border-transparent rounded-full shadow lg:py-4 hover:bg-purple-600 focus:outline-none focus:border-purple-600 focus:shadow-outline-purple md:text-lg xl:text-xl md:px-5 xl:px-10 2xl:shadow-lg" data-primary="purple-500" data-rounded="rounded-full">Ver más</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="relative flex flex-col items-center justify-center w-full px-6 bg-gray-light bg-cover lg:py-48 min-w-screen 2xl:bg-[#f4f4f2] tails-selected-element">
                    <div className="flex flex-col items-center justify-center mx-auto sm:p-6 xl:p-8 lg:flex-row lg:max-w-6xl lg:p-0">
                        <div className="container relative z-20 flex flex-col w-full px-5 pb-1 pr-12 mb-16 text-2xl text-gray-700 lg:w-1/2 sm:pr-0 md:pr-6 md:pl-0 lg:pl-5 xl:pr-10 sm:items-center lg:items-start lg:mb-0">
                            <h1 className="relative z-20 text-5xl font-extrabold leading-none text-blueGray-800 xl:text-6xl sm:text-center lg:text-left" data-primary="purple-500">
                                Diseñado con<br />tu
                                <span className="mt-1 text-transparent text-6xl bg-clip-text bg-gradient-to-r from-gpd-turquoise via-gpd-blue to-gpd-red lg:mt-0"> producto</span><br />
                                en mente
                            </h1>
                            <p className="relative z-20 block mt-6 text-2xl text-blueGray-600 xl:text-3xl sm:text-center lg:text-left">El límite es tu imaginació cuando se trata de obtener el perfecto exhibidor para tu producto. ¡Ven y diseña tu exhibidor con nosotros!</p>

                        </div>
                        <div className="relative w-full px-5 rounded-lg cursor-pointer lg:w-1/2 group xl:px-0">
                            <div className="absolute top-0 left-0 w-11/12 -mt-20 opacity-50">
                                <svg className="w-full h-full ml-4 text-gpd-turquoise" data-primary="purple-500" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M45,-78C58.3,-70.3,69,-58.2,75.2,-44.4C81.3,-30.7,82.9,-15.3,83.5,0.4C84.2,16,83.8,32.1,76.5,43.9C69.2,55.7,55.1,63.3,41.2,69.4C27.3,75.4,13.6,80,-0.7,81.2C-15.1,82.5,-30.1,80.3,-41.2,72.6C-52.2,64.9,-59.2,51.6,-67.1,38.5C-75.1,25.5,-83.9,12.8,-83.8,0C-83.8,-12.7,-74.9,-25.4,-65.8,-36.4C-56.7,-47.4,-47.4,-56.7,-36.4,-65.7C-25.4,-74.7,-12.7,-83.5,1.6,-86.2C15.9,-89,31.8,-85.7,45,-78Z" transform="translate(100 100)" className=""></path></svg>
                            </div>
                            <Model />
                        </div>
                    </div>
                </section>
                <section className="py-12 md:py-20">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap -mx-3">
                            <div className="relative w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
                                <div className="max-w-md lg:max-w-xs lg:pr-16 mx-auto lg:ml-0 mb-6 lg:mb-0">
                                    <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        Amplio espacio creativo para <span className="text-blue-500">resaltar</span> tus productos
                                    </h2>
                                    <p className="text-xs md:text-base text-blueGray-600 leading-loose wow animate__animated animate__fadeIn" data-wow-delay=".9s">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/3 flex flex-wrap">
                                <div className="relative w-full">
                                    <div className="carausel-2-columns slick-carausel" id="carausel-2-columns-1">
                                        <Slider1 />
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

export default Arquifoam;
