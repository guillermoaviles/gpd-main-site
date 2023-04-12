import Image from 'next/image';
import { useState, useEffect } from 'react';

// const images = [
//   '/Loreal_logo.png',
//   '/logo_claro.png',
//   '/badillo_logo.png',
//   '/Walmart_logo.png',
//   '/de_la_cruz_logo.png',
// ];

export default function Carousel() {
    //   const [currentIndex, setCurrentIndex] = useState(0);

    //   useEffect(() => {
    //     const intervalId = setInterval(() => {
    //       setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    //     }, 3000);

    //     return () => clearInterval(intervalId);
    //   }, [currentIndex]);

    return (
        // <div className="carousel pt-20">
        //   {images.map((image, index) => (
        //     <div
        //       key={index}
        //       className={`carousel__item ${
        //         index === currentIndex ? 'carousel__item--active' : ''
        //       }`}
        //     >
        //       <Image
        //         src={image}
        //         alt={`Image ${index + 1}`}
        //         width={300}
        //         height={200}
        //       />
        //     </div>
        //   ))}
        //   {images.map((image, index) => (
        //     <div
        //       key={index + images.length}
        //       className={`carousel__item ${
        //         (index + images.length) === currentIndex ? 'carousel__item--active' : ''
        //       }`}
        //     >
        //       <Image
        //         src={image}
        //         alt={`Image ${index + 1}`}
        //         width={300}
        //         height={200}
        //       />
        //     </div>
        //   ))}
        // </div>

        <div class="marquee">
            <div class="marquee--inner">
                <span class="span">
                    <div class="orb" >
                        <Image
                            src='/Loreal_logo.png'
                            width={'100'}
                            height={'100'}
                        />
                    </div>
                    <div class="orb" >
                        <Image
                            src='/logo_claro.png'
                            width={'100'}
                            height={'100'}
                        />
                    </div>
                    <div class="orb" >
                        <Image
                            src='/badillo_logo.png'
                            width={'100'}
                            height={'100'}
                        />
                    </div>
                    <div class="orb" >
                        <Image
                            src='/Walmart_logo.png'
                            width={'100'}
                            height={'100'}
                        />
                    </div>
                    <div class="orb" >
                        <Image
                            src='/de_la_cruz_logo.png'
                            width={'100'}
                            height={'100'}
                        />
                    </div>
                    <div class="orb" >
                        <Image
                            src='/mars_logo.png'
                            width={'100'}
                            height={'100'}
                        />
                    </div>
                    {/* <div class="orb" className='bg-none inline-block mx-[24.7px]'>
                        <Image
                            src='/logo_claro.png'
                            width={'50'}
                            height={'100'}
                        />
                    </div>
                    <div class="orb" className='bg-none inline-block mx-[24.7px]'>
                        <Image
                            src='/badillo_logo.png'
                            width={'50'}
                            height={'100'}
                        />
                    </div> */}
                </span>
                <span class="span">
                    <div class="orb" >
                        <Image
                            src='/Loreal_logo.png'
                            width={'100'}
                            height={'100'}
                        />
                    </div>
                    <div class="orb" >
                        <Image
                            src='/logo_claro.png'
                            width={'100'}
                            height={'100'}
                        />
                    </div>
                    <div class="orb" >
                        <Image
                            src='/badillo_logo.png'
                            width={'100'}
                            height={'100'}
                        />
                    </div>
                    <div class="orb" >
                        <Image
                            src='/Walmart_logo.png'
                            width={'100'}
                            height={'100'}
                        />
                    </div>
                    <div class="orb" >
                        <Image
                            src='/de_la_cruz_logo.png'
                            width={'100'}
                            height={'100'}
                        />
                    </div>
                    <div class="orb" >
                        <Image
                            src='/mars_logo.png'
                            width={'100'}
                            height={'100'}
                        />
                    </div>
                    {/* <div class="orb" className='bg-none inline-block mx-[24.7px]'>
                        <Image
                            src='/Loreal_logo.png'
                            width={'50'}
                            height={'100'}
                        />
                    </div>
                    <div class="orb" className='bg-none inline-block mx-[24.7px]'>
                        <Image
                            src='/Loreal_logo.png'
                            width={'50'}
                            height={'100'}
                        />
                    </div> */}
                </span>
            </div>
        </div>
    );
}
