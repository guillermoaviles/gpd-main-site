import React from 'react';

const Preloader = () => {
    return (
        <>
            <div id="preloader-active">
            <div className="preloader flex-1 content-center">
                <div className="logo absolute inset-y-2/4 jump">
                    <img className='h-[10vh] w-full' src="/assets/imgs/logos/gpd-vertical.png" alt="GPD" />
                </div>
            </div>
        </div>
        </>
    );
};

export default Preloader;