import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import img1 from '../../../images/homeBanner/contactBanner.jpg';
import img2 from '../../../images/homeBanner/helpYouBanner.jpg';
import img3 from '../../../images/homeBanner/workersBanner.jpg';

function NextArrow({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="text-white absolute top-[50%] right-0 bg-blue-500 p-2 md:p-3 rounded-tl-full rounded-bl-full z-10 hover:bg-blue-600"
        >
            {' '}
            <FontAwesomeIcon className="text-3xl md:text-4xl" icon={faAngleRight} />
        </button>
    );
}

function PrevArrow({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="text-white absolute top-[50%] left-0 bg-blue-500 p-2 md:p-3 rounded-tr-full rounded-br-full z-10 hover:bg-blue-600"
        >
            {' '}
            <FontAwesomeIcon className="text-3xl md:text-4xl" icon={faAngleLeft} />
        </button>
    );
}
function HomeBanner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const banners = [
        {
            id: 1,
            src: img2,
            title: 'Help You Find the perfect Service',
            link: '/allServices',
            linkText: 'Services'
        },
        {
            id: 2,
            src: img3,
            title: 'Find the Perfect worker for you',
            link: '/workers',
            linkText: 'Workers'
        },
        {
            id: 3,
            src: img1,
            title: 'Need Any help contact us',
            link: '/contactUs',
            linkText: 'Contact Us'
        }
    ];
    return (
        <div>
            <Slider className="m-0" {...settings}>
                {banners.map((banner) => (
                    <div key={banner.id} className="w-full xl:h-[800px]  md:h-[600px] h-[400px] ">
                        <div
                            className="w-full h-full flex items-center justify-center "
                            style={{
                                background: ` url(${banner.src}) no-repeat center`,
                                backgroundSize: 'cover'
                            }}
                            key={banner.id}
                        >
                            <div className="flex flex-col items-center bg-blue-200 opacity-60 p-5 rounded-lg">
                                <h2 className="text-black text-3xl md:text-5xl text-center">
                                    {banner.title}
                                </h2>
                                <Link
                                    className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-3"
                                    to={banner.link}
                                >
                                    {banner.linkText}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default HomeBanner;
