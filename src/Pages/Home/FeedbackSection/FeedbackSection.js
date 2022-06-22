import React from 'react';
import Slider from 'react-slick/lib/slider';
import Title from '../../../components/Title';
import Feedback from '../Feedback/Feedback';

function FeedbackSection() {
    const feedbacks = [
        {
            id: 1,
            src: 'https://i.ibb.co/pnQSq2K/john.jpg',
            name: 'Adam Smith',
            role: 'Customer',
            about: 'Hundreds Of Successful Organizations Companies of every size, and in 62 different countries, are using Affirm.'
        },
        {
            id: 2,
            src: 'https://i.ibb.co/rHD13hY/andrew.jpg',
            name: 'Jason Cole',
            role: 'Customer',
            about: 'Hundreds Of Successful Organizations Companies of every size, and in 62 different countries, are using Affirm.'
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        fade: true

        /* nextArrow: 0,
        prevArrow: 0, */
    };
    return (
        <div data-aos="zoom-out" className="container mx-auto my-20">
            <Title classes="mb-10">Clients Feedback</Title>

            <Slider {...settings}>
                {feedbacks.map((feedback) => (
                    <Feedback feedback={feedback} key={feedback.id} />
                ))}
            </Slider>
        </div>
    );
}

export default FeedbackSection;
