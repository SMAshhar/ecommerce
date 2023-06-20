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
                name: 'Gyokuro',
                image: '/tea/gyokoro/gyokoro.jpg',
                price: 27.00,
                _id:'8123e4a0-0ac3-4f47-b3bb-2bb053da6c6b'
            },
            {
                name: 'Houjicha',
                image: '/tea/houjicha/houjicha.jpg',
                price: 10.00,
                _id:'314e9859-bcab-446f-b1b1-1434c57dce3c'
            },
            {
                name: 'Kamairicha',
                image: '/tea/kamairicha/kamairicha.jpg',
                price: 11.00,
                _id:'46cf20b9-1597-44f8-a1f5-8d0d3f992eb9'
            },
        ],
    },
    {
        id: 2,
        tiles: [
            {
                name: 'Koucha',
                image: '/tea/koucha/koucha.jpeg',
                price: 20.00,
                _id:'2ab29b4c-31b0-447c-8943-6afe128584cb'
            },
            {
                name: 'Tamaryokucha',
                image: '/tea/tamaryokucha/tamaryokucha.jpg',
                price: 11.00,
                _id:'755629a1-40b9-4913-8ae7-af14ab6cf4ef'
            },
            {
                name: 'Sencha',
                image: '/tea/sencha/sencha.jpg',
                price: 22.00,
                _id:'32951850-c724-4de6-b5f1-2659ec668eb4'
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
        <div className="container mx-auto my-24 py-8 flex flex-col justify-center items-center">
            <h2 className="text-3xl md:text-6xl font-light italic text-rose-400 mb-8">Promotion</h2>
            <div className="relative">
                <div className="flex flex-col md:flex-row space-x-4 gap-2 lg:gap-10">
                    {slide.tiles.map((tile, index) => (
                        <Tile key={index} name={tile.name} image={tile.image} price={tile.price} _id={tile._id} />
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
