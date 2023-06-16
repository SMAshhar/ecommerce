'use client'
import { useState } from 'react';
import Tile from './tile';
import { TileProps } from './tile';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'

interface Slide {
    id: number;
    tiles: TileProps[];
}

const slides: Slide[] = [
    {
        id: 1,
        tiles: [
            {
                name: 'Product 1',
                image: '/tea2.jpg',
                price: 10,
            },
            {
                name: 'Product 2',
                image: '/tea1.webp',
                price: 15,
            },
            {
                name: 'Product 3',
                image: '/rMXJy6.webp',
                price: 20,
            },
        ],
    },
    {
        id: 2,
        tiles: [
            {
                name: 'Product 4',
                image: '/tea2.jpg',
                price: 10,
            },
            {
                name: 'Product 5',
                image: '/tea1.webp',
                price: 15,
            },
            {
                name: 'Product 6',
                image: '/rMXJy6.webp',
                price: 20,
            },
        ],
    },
    {
        id: 3,
        tiles: [
            {
                name: 'Product 7',
                image: '/tea2.jpg',
                price: 10,
            },
            {
                name: 'Product 8',
                image: '/tea1.webp',
                price: 15,
            },
            {
                name: 'Product 9',
                image: '/rMXJy6.webp',
                price: 20,
            },
        ],
    },
    // Add more slides as needed
];

const Promotion: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => prevSlide - 1);
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => prevSlide + 1);
    };

    const slide = slides[currentSlide];

    return (
        <div className="container mx-auto py-8 flex flex-col justify-center items-center">
            <h2 className="text-6xl font-light italic text-black mb-8">Promotion</h2>
            <div className="relative">
                <div className="flex flex-col md:flex-row space-x-4 gap-10">
                    {slide.tiles.map((tile, index) => (
                        <Tile key={index} name={tile.name} image={tile.image} price={tile.price} />
                    ))}
                </div>
                <div className="absolute inset-y-0 left-0 flex items-center">
                    <button
                        className={`${currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : ''
                            } px-2 py-1 rounded-l opacity-50 bg-white`}
                        onClick={handlePrevSlide}
                        disabled={currentSlide === 0}
                    >
                        <IoMdArrowDropleft />
                    </button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center">
                    <button
                        className={`${currentSlide === slides.length - 1
                            ? 'opacity-30 cursor-not-allowed'
                            : ''
                            } px-2 py-1 rounded-r opacity-50 bg-white`}
                        onClick={handleNextSlide}
                        disabled={currentSlide === slides.length - 1}
                    >
                        <IoMdArrowDropright />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Promotion;
