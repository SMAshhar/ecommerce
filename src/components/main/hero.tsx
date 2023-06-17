'use client'
import { useEffect, useState } from 'react';
import localFont from '@next/font/local'

const cal = localFont({
    src: [
      {
        path: '../../../public/fonts/Calligrapher-JRxaE.ttf',
        weight: '400'
      },
    ],
    variable: '--font-cal'
  })

const Hero: React.FC = () => {
    const [isHeadingVisible, setIsHeadingVisible] = useState(false);

    useEffect(() => {
        setIsHeadingVisible(true);
    }, []);

    return (
        <div className="relative h-[40rem]">
            <div
                className={`absolute flex inset-0 bg-cover justify-center items-start bg-[url('/bg.avif')] bg-center bg-opacity-50 `}
            // style={{ backgroundImage: '/hero.jpg' }}
            >
                <div className={`flex items-center text-rose-400 justify-center h-full w-full transition-opacity duration-1000 ${isHeadingVisible ? 'opacity-100' : 'opacity-0'
                    }`}>
                    <div>
                        <h1 className={`${cal.variable} font-cal text-5xl md:text-7xl xl:text-9xl w-full italic font-extralight text-start transform translate-y-4`}>
                            The Pink
                        </h1>
                        <h1 className={`${cal.variable} font-cal text-5xl md:text-7xl xl:text-9xl w-full italic font-extralight text-end transform translate-y-4`}>
                            Lotus
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
