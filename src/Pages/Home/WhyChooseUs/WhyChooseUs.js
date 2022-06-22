import React from 'react';
import Title from '../../../components/Title';
import happyClients from '../../../images/whyUs/happyClients.svg';
import src from '../../../images/whyUs/onTime.svg';
import standValue from '../../../images/whyUs/standValue.svg';
import weInnovate from '../../../images/whyUs/weInnovate.svg';

function WhyChooseUs() {
    const services = [
        { id: 1, src, title: 'On Time', about: 'We Delever our service on time ' },
        { id: 2, src, title: 'On Time', about: 'We Delever our service on time ' },
        { id: 3, src, title: 'On Time', about: 'We Delever our service on time ' },
        { id: 4, src, title: 'On Time', about: 'We Delever our service on time ' }
    ];
    return (
        <div className="container mx-auto my-20">
            <Title classes="mb-5">Why Choose Us</Title>

            {/* section 1 = happy clients */}
            <div className="h-max md:grid md:grid-cols-2  md:gap-5 flex flex-col lg:w-1/2 p-5 lg:p-0 mx-auto">
                <div
                    data-aos="fade-up-right"
                    className="md:h-[400px] w-full flex items-end lg:justify-end overflow-hidden "
                >
                    <img className=" h-full" src={happyClients} alt="service" />
                </div>
                <div data-aos="fade-up-left" className="flex items-start justify-center flex-col ">
                    <h4 className="text-2xl uppercase text-gray-700 mb-3 mx-auto text-center">
                        Our Clients Are Happy
                    </h4>
                    <p className="text-center">
                        Nothing gives us greater pride than seeing our clients delighted with the
                        work we’ve done together. Our case studies are solid proof of all the
                        different ways we’ve transformed the way people collaborate, work, and
                        succeed.
                    </p>
                </div>
            </div>

            {/* section 2 = we innovate for you */}
            <div className="h-max md:grid md:grid-cols-2  md:gap-5 flex flex-col-reverse lg:w-1/2 p-5 lg:p-0 mx-auto">
                <div data-aos="fade-right" className="flex items-end justify-center flex-col">
                    <h4 className="text-2xl mb-3 uppercase text-gray-700 mx-auto text-center">
                        We Innovate for You
                    </h4>
                    <p className="text-center">
                        We’re a team of dreamers, thinkers and creators. We’re constantly evolving
                        our products to reach even higher standards for design, quality,
                        manufacturing, and environmental sustainability. It’s how we earned ISO 9001
                        and ISO 14000 Certification and it’s how we pledge to transform the way you
                        work.
                    </p>
                </div>
                <div
                    data-aos="fade-left"
                    className="md:h-[400px] w-full flex items-end justify-start"
                >
                    <img className=" h-full" src={weInnovate} alt="service" />
                </div>
            </div>

            {/* section 3 */}
            <div className="h-max md:grid md:grid-cols-2  md:gap-5 flex flex-col lg:w-1/2 p-5 lg:p-0 mx-auto">
                <div
                    data-aos="fade-right"
                    className="md:h-[400px] overflow-hidden w-full flex items-end justify-end"
                >
                    <img className=" h-auto" src={standValue} alt="service" />
                </div>
                <div data-aos="fade-left" className="flex items-start justify-center flex-col">
                    <h4 className="text-2xl md:mb-3 uppercase text-gray-700 mx-auto text-center">
                        We Stand by Our Values
                    </h4>
                    <p className="text-center">
                        We care deeply about the people we serve and the products we create. It
                        stems from a set of uncompromising brand values that guide us in everything
                        we do. It’s why we believe in people-first design, working collaboratively,
                        and sweating the details so we can find new ways to transform the way you
                        think, create and work.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;
