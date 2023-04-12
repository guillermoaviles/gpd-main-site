import React from "react";
import Link from "next/link"

const Footer = () => {
    return (
        <>
            <section className="py-10">
                <div className="container px-4 mx-auto wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                    <div className="flex flex-wrap mb-12 lg:mb-20 justify-center text-center lg:text-left">
                        <div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
                            <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">Localización</p>
                            <p className="lg:text-lg text-blueGray-400">#300 Cll 11 NE<br /> San Juan, 00920<br /> Puerto Rico</p>
                        </div>
                        <div className="w-full lg:w-1/5 px-3">
                            <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">Contacto</p>
                            <p className="lg:text-lg text-blueGray-400">(787) 782 6340</p>
                            <a href="mailto:info@graphicprintingpr.com">
                                <p className="lg:text-lg text-blueGray-400 hover:text-gpd-orange">info@graphicprintingpr.com</p>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center lg:justify-between">
                        <p className="text-sm text-blueGray-400">
                            &copy; 1995. Graphic Printing &amp; Design Co. Diseñado por{" "}
                            <a className="text-purple" href="https://guillermoaviles.vercel.app/" target="_blank">
                                Guillermo J. Avilés
                            </a>
                        </p>
                        <div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
                            <a className="inline-block px-2" href="https://www.facebook.com/PRGraphicPrinting/">
                                <img src="/assets/imgs/icons/facebook-blue.svg" alt="Facebook" />
                            </a>
                            <a className="inline-block px-2" href="https://www.instagram.com/graphicprinting.pr/?hl=en">
                                <img src="/assets/imgs/icons/instagram-blue.svg" alt="Instagram" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
