import React, { Suspense, lazy, useState, useEffect } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

import { styles } from '../styles';

const ComputersCanvas = lazy(() => import('./canvas').then(module => ({ default: module.ComputersCanvas })));
const Hero = () => {
    const [shouldRender3D, setShouldRender3D] = useState(false);

    useEffect(() => {
        const checkRender = () => {
            setShouldRender3D(window.innerWidth > 768); // Example: only render on larger screens
        };

        checkRender();
        window.addEventListener('resize', checkRender);
        return () => window.removeEventListener('resize', checkRender);
    }, []);

    return (
        <LazyMotion features={domAnimation}>
            <section className='relative w-full h-screen mx-auto'>
                <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                    <div className='flex flex-col justify-center items-center mt-5'>
                        <div className='w-5 h-5 rounded-full bg-[#915eff]' />
                        <div className='w-1 sm:h-80 h-40 violet-gradient' />
                    </div>
                    <div>
                        <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Yuuri</span></h1>
                        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                            Full Stack Developer specializing in<br />
                            Wordpress<br />
                            React<br />
                            UI/UX Design<br />
                            SEO
                        </p>
                    </div>
                </div>

                {shouldRender3D && (
                    <Suspense fallback={<div className="loading">Loading 3D model...</div>}>
                        <ComputersCanvas />
                    </Suspense>
                )}

                <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                    <a href="#about">
                        <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                            <m.div
                                animate={{ y: [0, 24, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: 'loop'
                                }}
                                className='w-3 h-3 rounded-full bg-secondary mb-1'
                            />
                        </div>
                    </a>
                </div>
            </section>
        </LazyMotion>
    );
};

export default Hero;
