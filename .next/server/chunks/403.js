"use strict";
exports.id = 403;
exports.ids = [403];
exports.modules = {

/***/ 2403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-scroll-up"
var external_react_scroll_up_ = __webpack_require__(8405);
var external_react_scroll_up_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_up_);
;// CONCATENATED MODULE: ./src/components/elements/BackToTop.js


function BackToTop() {
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_scroll_up_default()), {
        showUnder: 160,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            id: "scrollUp",
            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                className: "w-4 h-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M5 10l7-7m0 0l7 7m-7-7v18"
                })
            })
        })
    });
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/layout/Footer.jsx



const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "py-10",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container px-4 mx-auto wow animate__animated animate__fadeIn",
                "data-wow-delay": ".3s",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-wrap mb-12 lg:mb-20 justify-center text-center lg:text-left",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-full lg:w-1/5 px-3 mb-8 lg:mb-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800",
                                        children: "Localizaci\xf3n"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "lg:text-lg text-blueGray-400",
                                        children: [
                                            "#300 Cll 11 NE",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            " San Juan, 00920",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            " Puerto Rico"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-full lg:w-1/5 px-3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800",
                                        children: "Contacto"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "lg:text-lg text-blueGray-400",
                                        children: "(787) 782 6340"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "mailto:info@graphicprintingpr.com",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "lg:text-lg text-blueGray-400 hover:text-gpd-orange",
                                            children: "info@graphicprintingpr.com"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col lg:flex-row items-center lg:justify-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-sm text-blueGray-400",
                                children: [
                                    "\xa9 1995. Graphic Printing & Design Co. Dise\xf1ado por",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "text-blue-400",
                                        href: "https://guillermoaviles.vercel.app/",
                                        target: "_blank",
                                        children: "Guillermo J. Avil\xe9s"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "order-first lg:order-last -mx-2 mb-4 lg:mb-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "inline-block px-2",
                                        href: "https://www.facebook.com/PRGraphicPrinting/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/assets/imgs/icons/facebook-blue.svg",
                                            alt: "Facebook"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "inline-block px-2",
                                        href: "https://www.instagram.com/graphicprinting.pr/?hl=en",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/assets/imgs/icons/instagram-blue.svg",
                                            alt: "Instagram"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const layout_Footer = (Footer);

;// CONCATENATED MODULE: ./src/components/layout/Header.jsx




const Header = ({ handleHidden  })=>{
    const [scroll, setScroll] = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        document.addEventListener("scroll", ()=>{
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    });
    if (scroll) return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
            className: "bg-gray-light sticky-bar mt-4 stick",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-[80vw] mx-auto bg-transparent",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    className: "bg-transparent flex justify-between items-center py-3",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            legacyBehavior: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "text-3xl font-semibold leading-none",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "h-12 p-0 bg-gray-light rounded-full",
                                    src: "/assets/imgs/logos/gpd-logo-black.png",
                                    alt: "Monst"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "hidden bg-gray-light rounded-full lg:flex lg:items-center lg:w-auto lg:space-x-8 px-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "group relative pb-4 pt-4 ",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        legacyBehavior: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "text-sm font-semibold text-blueGray-600 hover:text-blueGray-500",
                                            children: "Inicio"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "pt-4 pb-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/about",
                                        legacyBehavior: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "text-sm font-semibold text-blueGray-600 hover:text-blueGray-500",
                                            children: "Sobre Nosotros"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "group relative pt-4 pb-4 has-child",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/services",
                                            legacyBehavior: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "text-sm font-semibold text-blueGray-600 hover:text-blueGray-500",
                                                children: "Servicios"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "drop-down-menu min-w-200",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/blog",
                                                        legacyBehavior: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500",
                                                            children: "Impresi\xf3n de Prensa"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/blog-2",
                                                        legacyBehavior: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500",
                                                            children: "Impresi\xf3n Digital"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/blog-single",
                                                        legacyBehavior: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500",
                                                            children: "Productos en Arquifoam"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/blog-single-2",
                                                        legacyBehavior: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500",
                                                            children: "Trabajos Especiales"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "group relative pt-4 pb-4 has-child",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            legacyBehavior: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "text-sm font-semibold text-blueGray-600 hover:text-blueGray-500",
                                                children: "Compa\xf1\xeda"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "drop-down-menu min-w-200",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/portfolio",
                                                        legacyBehavior: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500",
                                                            children: "Portfolio"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/team",
                                                        legacyBehavior: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500",
                                                            children: "Team"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/testimonials",
                                                        legacyBehavior: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500",
                                                            children: "Testimonials"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/pricing",
                                                        legacyBehavior: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500",
                                                            children: "Pricing"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/faqs",
                                                        legacyBehavior: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500",
                                                            children: "Faqs"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/404",
                                                        legacyBehavior: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500",
                                                            children: "404"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "group relative pt-4 pb-4 has-child",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            legacyBehavior: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "text-sm font-semibold text-blueGray-600 hover:text-blueGray-500",
                                                children: "Redes"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "drop-down-menu min-w-200",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/blog",
                                                        legacyBehavior: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500",
                                                            children: "Category 1"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/blog-2",
                                                        legacyBehavior: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500",
                                                            children: "Category 2"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/blog-single",
                                                        legacyBehavior: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500",
                                                            children: "Single 1"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/blog-single-2",
                                                        legacyBehavior: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500",
                                                            children: "Single 2"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "pt-4 pb-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/contact",
                                        legacyBehavior: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "text-sm font-semibold text-blueGray-600 hover:text-blueGray-500",
                                            children: "Cont\xe1ctanos"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "lg:hidden",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "navbar-burger flex items-center py-2 px-3 text-blue-500 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300",
                                onClick: handleHidden,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    className: "fill-current h-4 w-4",
                                    viewBox: "0 0 20 20",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                            children: "Mobile menu"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
            className: "bg-transparent sticky-bar mt-4",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-[80vw] mx-auto bg-transparent",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    className: "bg-transparent flex justify-end items-center py-3",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "hidden bg-gpd-blue rounded-full lg:flex lg:items-center lg:w-auto lg:space-x-8 px-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "group relative pb-4 pt-4 ",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        legacyBehavior: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "text-sm font-semibold text-white hover:text-blueGray-500",
                                            children: "Inicio"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "pt-4 pb-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/about",
                                        legacyBehavior: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "text-sm font-semibold text-white hover:text-blueGray-500",
                                            children: "Sobre Nosotros"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "group relative pt-4 pb-4 has-child",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/services",
                                            legacyBehavior: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "text-sm font-semibold text-white hover:text-blueGray-500",
                                                children: "Servicios"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "drop-down-menu min-w-200",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/blog",
                                                        legacyBehavior: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500",
                                                            children: "Impresi\xf3n de Prensa"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/blog-2",
                                                        legacyBehavior: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500",
                                                            children: "Impresi\xf3n Digital"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/blog-single",
                                                        legacyBehavior: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500",
                                                            children: "Productos en Arquifoam"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/blog-single-2",
                                                        legacyBehavior: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500",
                                                            children: "Trabajos Especiales"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "group relative pt-4 pb-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        legacyBehavior: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "text-sm font-semibold text-white hover:text-blueGray-500",
                                            children: "Compa\xf1\xeda"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "group relative pt-4 pb-4 has-child",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            legacyBehavior: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "text-sm font-semibold text-white hover:text-blueGray-500",
                                                children: "Redes"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "drop-down-menu min-w-200",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/blog",
                                                        legacyBehavior: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500",
                                                            children: "Facebook"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/blog-2",
                                                        legacyBehavior: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500",
                                                            children: "Instagram"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "pt-4 pb-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/contact",
                                        legacyBehavior: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "text-sm font-semibold text-white hover:text-blueGray-500",
                                            children: "Cont\xe1ctanos"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "lg:hidden",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "navbar-burger flex items-center py-2 px-3 text-blue-500 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300",
                                onClick: handleHidden,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    className: "fill-current h-4 w-4",
                                    viewBox: "0 0 20 20",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                            children: "Mobile menu"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const layout_Header = (Header);

;// CONCATENATED MODULE: ./src/components/layout/MobileMenu.jsx



const MobileMenu = ({ hiddenClass , handleRemove  })=>{
    const [isActive, setIsActive] = (0,external_react_.useState)({
        status: false,
        key: ""
    });
    const handleToggle = (key)=>{
        if (isActive.key === key) {
            setIsActive({
                status: false
            });
        } else {
            setIsActive({
                status: true,
                key
            });
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `${hiddenClass} navbar-menu relative z-50 transition duration-300`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    className: "fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto transition duration-300",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center mb-8",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "#",
                                    legacyBehavior: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "mr-auto text-3xl font-semibold leading-none",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "h-10",
                                            src: "/assets/imgs/logos/monst-logo.svg",
                                            alt: "Monst"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "navbar-close",
                                    onClick: handleRemove,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        className: "h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blue-500",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M6 18L18 6M6 6l12 12"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "mobile-menu",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: isActive.key == 1 ? "mb-1 menu-item-has-children rounded-xl active" : "mb-1 menu-item-has-children rounded-xl",
                                            onClick: ()=>handleToggle(1),
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "menu-expand",
                                                    children: "+"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    legacyBehavior: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl",
                                                        children: "Home"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: isActive.key == 1 ? "dropdown pl-5" : "hidden",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/index",
                                                                legacyBehavior: true,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                                    children: "Home 1"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/index-2",
                                                                legacyBehavior: true,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                                    children: "Home 2"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/index-3",
                                                                legacyBehavior: true,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                                    children: "Home 3"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/index-4",
                                                                legacyBehavior: true,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                                    children: "Home 4"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/index-5",
                                                                legacyBehavior: true,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                                    children: "Home 5"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-1 rounded-xl",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/about",
                                                legacyBehavior: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl",
                                                    children: "About Us"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/services",
                                                legacyBehavior: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                    children: "Services"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/portfolio",
                                                legacyBehavior: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                    children: "Portfolio"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/pricing",
                                                legacyBehavior: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                    children: "Pricing"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/team",
                                                legacyBehavior: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                    children: "Team"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: isActive.key == 2 ? "mb-1 menu-item-has-children rounded-xl active" : "mb-1 menu-item-has-children rounded-xl",
                                            onClick: ()=>handleToggle(2),
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "menu-expand",
                                                    children: "+"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    legacyBehavior: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                        children: "Blog"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: isActive.key == 2 ? "dropdown pl-5" : "hidden",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/blog",
                                                                legacyBehavior: true,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                                    children: "Category 1"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/blog-2",
                                                                legacyBehavior: true,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                                    children: "Category 2"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/blog-single",
                                                                legacyBehavior: true,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                                    children: "Single 1"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/blog-single-2",
                                                                legacyBehavior: true,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                                    children: "Single 2"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/faqs",
                                                legacyBehavior: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                    children: "Faqs"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/testimonials",
                                                legacyBehavior: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                    children: "Testimonial"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/contact",
                                                legacyBehavior: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500",
                                                    children: "Contact Us"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mt-4 pt-6 border-t border-blueGray-100",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/signup",
                                            legacyBehavior: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 text-white rounded",
                                                children: "Sign Up"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/login",
                                            legacyBehavior: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "block px-4 py-3 mb-2 text-xs text-center text-blue-500 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded",
                                                children: "Log In"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mt-auto",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "my-4 text-xs text-blueGray-400",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Get in Touch"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-blue-500 hover:text-blue-500 underline",
                                            children: "contact@monst.com"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "inline-block px-1",
                                    href: "https://facebook.com",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/assets/imgs/icons/facebook-blue.svg",
                                        alt: "Monst"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "inline-block px-1",
                                    href: "https://twitter.com",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/assets/imgs/icons/twitter-blue.svg",
                                        alt: "Monst"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "inline-block px-1",
                                    href: "https://www.instagram.com",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/assets/imgs/icons/instagram-blue.svg",
                                        alt: "Monst"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const layout_MobileMenu = (MobileMenu);

;// CONCATENATED MODULE: ./src/components/layout/Layout.jsx







const Layout = ({ children  })=>{
    const [hiddenClass, setHiddenClass] = (0,external_react_.useState)("hidden");
    const handleHidden = ()=>setHiddenClass("");
    const handleRemove = ()=>{
        if (hiddenClass === "") {
            setHiddenClass("hidden");
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "main font-body text-body",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(layout_Header, {
                    handleHidden: handleHidden
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileMenu, {
                    hiddenClass: hiddenClass,
                    handleRemove: handleRemove
                }),
                children,
                /*#__PURE__*/ jsx_runtime_.jsx(layout_Footer, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(BackToTop, {})
            ]
        })
    });
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ })

};
;