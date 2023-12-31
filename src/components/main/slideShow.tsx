'use client'
import { useEffect, useState } from 'react';

const slides = [
    {
        title: 'Try Our Matcha For A Vitalized Morning',
        image: '/matcha.jpg',
    },
    {
        title: 'Be As Light As Your Tea...!',
        image: '/pinkTea.jpg',
    },
];

const Slideshow: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[80vh] z-50">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`flex bg-black absolute justify-center text-center items-center -z-50 top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div className="flex items-center justify-center h-full">
                        <h1 className="p-4 text-3xl md:text-6xl font-light text-white justify-center items-center italic flex z-50">{slide.title}</h1>
                    </div>
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="absolute inset-0 object-cover w-full h-full -z-50"
                    />
                </div>
            ))}
        </div>
    );
};

export default Slideshow;
