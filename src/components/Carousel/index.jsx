import Image from 'next/image';

export default function Carousel() {

    return (

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
