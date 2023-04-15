import React from "react";

const Contactanos = () => {
    return (
        <>
            <section className="">
                <div className="container mt-20">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="max-w-md mb-8 mx-auto">
                            <span className="text-xs py-1 px-3 text-gpd-orange font-semibold bg-gray-light rounded-xl wow animate__animated animate__fadeInDown" data-wow-delay=".9s">
                                Contáctanos
                            </span>
                            <h2 className="mt-2 text-4xl text-gpd-blue font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                ¡Nos <span className="text-gpd-turquoise">encantaría</span> ayudarte!
                            </h2>
                        </div>
                        <div>
                            <form>
                                <div className="mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    <input className="w-full p-4 text-xs font-semibold leading-none bg-gray-light rounded outline-none" type="text" placeholder="Sujeto" />
                                </div>
                                <div className="mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    <input className="w-full p-4 text-xs font-semibold leading-none bg-gray-light rounded outline-none" type="text" placeholder="Nombre" />
                                </div>
                                <div className="mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    <input className="w-full p-4 text-xs font-semibold leading-none bg-gray-light rounded outline-none" type="email" placeholder="Correo electrónico" />
                                </div>
                                <div className="mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    <textarea className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-gray-light rounded outline-none" placeholder="Mensaje..."></textarea>
                                </div>
                                {/* <div className="mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        <label className="flex px-2 bg-blueGray-50 rounded">
                                            <input className="hidden" type="file" name="Choose file"/>
                                            <span className="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-blueGray-500 hover:bg-blueGray-600 rounded cursor-pointer"> Importar</span>
                                        </label>
                                    </div> */}
                                <div className="flex justify-center items-center wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    <button className="py-4 px-8 text-s text-white font-semibold leading-none bg-gpd-turquoise hover:bg-blue-500 rounded-md" type="submit">
                                        Enviar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contactanos;