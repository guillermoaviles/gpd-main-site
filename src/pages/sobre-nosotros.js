import React from 'react';
import Layout from '../components/layout/Layout';
import Link from "next/link"
import Image from 'next/image';
import calidad from "public/calidad.png"
import innovacion from "public/inovacion.png"
import equipo from "public/equipo.png"
import respSocial from "public/resp-soc.png"

const SobreNosotros = () => {
    return (
        <>
            <Layout>
                <section className="relative flex flex-col-reverse w-full h-[100vh] -mt-24 py-16 bg-gray-light lg:pt-0 lg:flex-col lg:pb-0">
                    <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                        <svg className="absolute left-0 hidden h-full text-gray-900 transform translate-x-[15%] lg:block" viewBox="0 0 100 100" fill="#F4F4F2" preserveAspectRatio="none slice"><path d="M50 0H80L50 120H0L50 0Z"></path></svg>
                        <img className="object-cover w-[63%] ml-auto h-56 shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full" src="https://images.unsplash.com/photo-1601933470096-0e34634ffcde?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80" alt="" />
                    </div>
                    <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-28 md:px-0 lg:px-8 lg:max-w-screen-xl">
                        <div className="mb-16 lg:my-32 lg:pr-5">
                            <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading wow animate__animated animate__fadeIn">
                                <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-gpd-turquoise via-gpd-blue to-gpd-red">Nuestra Historia</span>
                            </h2>
                            <p className="mb-5 text-blueGray-600 sm:pr-10 md:text-l 2xl:rounded-none 2xl:bg-inherit">
                                <strong>Graphic Printing es una empresa puertorriqueña.</strong> Fue fundada en 1985 por Glorimar y Guillermo Avilés y desde entonces se ha dedicado a brindar una gama completa de servicios de impresión.<br /><br />
                                Desde sus humildes comienzos nos propusimos, junto a un equipo de 7 empleados y 15 clientes, a revolucionar la industria de la imprenta en la Isla.
                                Guillermo aprendió el oficio a una edad temprana, trás crecer en la agencia de publicidad de su padre. Ahí desarrolló una pasión inequívoca por el arte de la impresión
                                de la industria. Mientras Glorimar, por su ética y habilidad para brindar trato de excelencia a sus clientes, se convirtio rápidamente en una piedra angular en la industria.
                                Ella sentó el estándar para las mejores prácticas locales en el servicio al cliente dando a cada uno atención individualizada.<br /><br /> Hoy, nuestro equipo de sobre 40
                                empleados trabaja sin parar para imprimir desde “Flyers”hasta libros, sin importar el tamaño o complejidad del proyecto. Mientras nuestras instalaciones de última generación
                                y equipos sofisticados garantizan la satisfacción del cliente en todo momento.
                            </p>
                            <div className="relative flex mt-4">
                                <a href="#_" className="flex items-center self-start justify-center px-5 py-2 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-gpd-blue border border-transparent rounded-md shadow lg:py-4 hover:bg-purple-600 focus:outline-none focus:border-purple-600 focus:shadow-outline-purple md:text-lg xl:text-xl md:px-5 xl:px-10 2xl:shadow-lg" data-primary="purple-500" data-rounded="rounded-full">Ver más</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-gray-light pb-4">
                    <div class="max-w-7xl mx-auto px-10 sm:py-24 sm:px-6 lg:px-8 sm:text-center">
                        <p class="text-4xl font-heading font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl"> Nuestros Valores</p>
                        <p class="max-w-3xl mt-5 mx-auto text-2xl text-blueGray-600">
                            La capacidad de aumentar nuestra oferta de servicios mientras mantenemos un crecimiento sostenido es el
                            resultado de un importante conjunto de valores; principios que nos han guiado como compañia desde el primer día.
                        </p>
                    </div>
                    <div className="container">
                        <div className="flex flex-wrap -mx-4 mb-12 wow animate__animated animate__fadeIn animated hover-up-5">
                            <div className="w-full lg:w-1/2 px-4 lg:pr-20 lg:pt-4 order-1 lg:order-0">
                                <Image
                                    src={calidad}
                                    className="inline-block py-1 px-3"
                                    width={60}
                                    height={50}

                                />
                                <h3 className="my-4 text-xl md:text-2xl font-bold font-heading">
                                    Calidad
                                </h3>
                                <p className="mb-4 text-sm md:text-base leading-loose text-blueGray-500">
                                    <strong>Nuestros clientes confían en nosotros</strong> porque obtienen resultados. Lo logramos con los
                                    más altos estándares de calidad en nuestros productos y servicios y entregándolos a tiempo, para
                                    maximizar su inversión.
                                </p>
                            </div>
                            <div className="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-1">
                                <img className="h-[40vh] w-full object-cover rounded" src="/assets/imgs/placeholders/img-6.png" alt="Monst" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-4 mb-12 wow animate__animated animate__fadeIn animated hover-up-5">
                            <div className="w-full lg:w-1/2 px-4 lg:pl-20 lg:pt-4 order-1">
                                <Image
                                    src={innovacion}
                                    className="inline-block py-1 px-3"
                                    width={60}
                                    height={50}
                                />
                                <h3 className="my-4 text-xl md:text-2xl font-bold font-heading">
                                    Innovación
                                </h3>
                                <p className="mb-4 text-sm md:text-base leading-loose text-blueGray-500"><strong>Nuevos productos. Nuevos procesos.</strong>
                                    Al adquirir productos innovadores y actualizar constantemente nuestra tecnología, podemos proporcionar servicios
                                    integrados 360 bajo un mismo techo. Y esto reduce costos y crea eficiencias operacionales para usted.
                                </p>
                            </div>
                            <div className="w-full lg:w-1/2 px-4 mb-8 order-0">
                                <img className="h-[40vh] w-full object-cover rounded" src="/assets/imgs/placeholders/img-7.png" alt="Monst" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-4 mb-12 wow animate__animated animate__fadeIn animated hover-up-5">
                            <div className="w-full lg:w-1/2 px-4 lg:pr-20 lg:pt-4 order-1 lg:order-0">
                                <Image
                                    src={equipo}
                                    className="inline-block py-1 px-3"
                                    width={60}
                                    height={50}
                                />
                                <h3 className="my-4 text-xl md:text-2xl font-bold font-heading">
                                    Trabajo en Equipo
                                </h3>
                                <p className="mb-4 text-sm md:text-base leading-loose text-blueGray-500">
                                    <strong>Nos llena de orgullo</strong> poder decir que Graphic Printing es un excelente lugar para trabajar.
                                    Todos estamos comprometidos con la excelencia operacional a través de la honestidad, la transparencia y al
                                    poder ofrecer asesoramiento experto que supere sus expectativas.
                                </p>
                            </div>
                            <div className="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-1">
                                <img className="h-[40vh] w-full object-cover rounded" src="/assets/imgs/placeholders/img-8.png" alt="Monst" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-4 mb-12 wow animate__animated animate__fadeIn animated hover-up-5">
                            <div className="w-full lg:w-1/2 px-4 lg:pl-20 lg:pt-4 order-1">
                                <Image
                                    src={respSocial}
                                    className="inline-block py-1 px-3"
                                    width={60}
                                    height={50}
                                />
                                <h3 className="my-4 text-xl md:text-2xl font-bold font-heading">
                                    Responsabilidad Social
                                </h3>
                                <p className="mb-4 text-sm md:text-base leading-loose text-blueGray-500">
                                    <strong>Tenemos un gran compromiso social</strong> con nuestra comunidad y con el planeta. Nuestra sede en Puerto Nuevo ha
                                    crecido a lo largo de los años y estamos orgullosos de las raíces fuertes que hemos echado en la comunidad. Y en lo que respecta a nuestro
                                    impacto ambiental, continuamente actualizamos prácticas para reducir nuestra huella ambiental y crear un
                                    futuro mejor.

                                </p>
                            </div>
                            <div className="w-full lg:w-1/2 px-4 mb-8 order-0">
                                <img className="h-[40vh] w-full object-cover rounded" src="/assets/imgs/placeholders/img-9.jpg" alt="Monst" />
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default SobreNosotros;