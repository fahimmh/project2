import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick/lib/slider';
import Title from '../../../components/Title';
import Worker from '../../Shared/Worker/Worker';

function NextArrow({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="absolute bottom-[40%] -right-10 md:right-[40%]  md:-bottom-10  p-2 w-10 h-10 rounded-full z-10  flex items-center justify-center hover:bg-gray-300"
        >
            {' '}
            <FontAwesomeIcon className="text-4xl" icon={faAngleRight} />
        </button>
    );
}

function PrevArrow({ onClick }) {
    return (
        <button
            onClick={onClick}
            className=" absolute bottom-[40%] -left-10 md:-bottom-10 md:left-[40%]  w-10 h-10 rounded-full z-10 flex items-center justify-center hover:bg-gray-300"
        >
            {' '}
            <FontAwesomeIcon className="text-4xl" icon={faAngleLeft} />
        </button>
    );
}

function TopWorkers({ role }) {
    const [workers, setWorkers] = useState([]);
    const [showCarousel, setShowCarousel] = useState(false);
    console.log(role, workers, showCarousel);
    useEffect(() => {
        fetch(`https://evening-sands-63384.herokuapp.com/workers?role=${role}&&filter=expert`)
            .then((res) => res.json())
            .then((data) => {
                if (data.length > 4) {
                    setShowCarousel(true);
                }
                setWorkers(data);
            });
    }, [role]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,

        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1275,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    nextArrow: 0,
                    prevArrow: 0
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: 0,
                    prevArrow: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: 0,
                    prevArrow: 0
                }
            }
        ]
    };
    return (
        workers.length && (
            <div className="my-20 container mx-auto ">
                <Title>Top {role}</Title>
                <p className="w-2/4 text-center mx-auto mt-3 mb-10">
                    Top, workers available to hire
                </p>
                {showCarousel ? (
                    <Slider className="" {...settings}>
                        {workers.map((worker) => (
                            <Worker worker={worker} key={worker.id} />
                        ))}
                    </Slider>
                ) : (
                    <div className="grid grid-cols-4">
                        {workers.map((worker) => (
                            <Worker worker={worker} key={worker.id} />
                        ))}
                    </div>
                )}
            </div>
        )
    );
}

export default TopWorkers;
