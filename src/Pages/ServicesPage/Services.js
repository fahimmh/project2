import React from 'react';
import Title from '../../components/Title';
import Service from './Service';

function Services() {
    const majorServicesCategories = [
        {
            id: 1,
            src: 'https://i.ibb.co/VxtVMrr/electrician.jpg',
            category: 'Electrician Service',
            link: '/services/electricianService',
            linkText: 'Electrician Service Details',
            about: "Development without limits.You have to change yourself. Nothing is easy in the world. If you want to acheive your goal then there is no shortcut. Only one part of success is hard work.If you want to be a web developer then you have to be a hard working person.There is no limits to develop yourself.Let's do it"
        },
        {
            id: 2,
            src: 'https://i.ibb.co/HHR6ySp/plumbing.jpg',
            category: 'Plumber Service',
            link: '/services/plumberService',
            linkText: 'Plumber Service Details',
            about: "Development without limits.You have to change yourself. Nothing is easy in the world. If you want to acheive your goal then there is no shortcut. Only one part of success is hard work.If you want to be a web developer then you have to be a hard working person.There is no limits to develop yourself.Let's do it"
        },
        {
            id: 3,
            src: 'https://i.ibb.co/JyJ9pQP/cheff.jpg',
            category: 'Chef Service',
            link: '/services/chefService',
            linkText: 'Chef Service Details',
            about: "Development without limits.You have to change yourself. Nothing is easy in the world. If you want to acheive your goal then there is no shortcut. Only one part of success is hard work.If you want to be a web developer then you have to be a hard working person.There is no limits to develop yourself.Let's do it"
        },
        {
            id: 4,
            src: 'https://i.ibb.co/BPxC64j/toLet.jpg',
            category: 'To-Let',
            link: '/services/toLetService',
            linkText: 'Available To-Let',
            about: "Development without limits.You have to change yourself. Nothing is easy in the world. If you want to acheive your goal then there is no shortcut. Only one part of success is hard work.If you want to be a web developer then you have to be a hard working person.There is no limits to develop yourself.Let's do it"
        }
    ];
    return (
        <div className="my-20">
            <Title>Services We Provide</Title>
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto mt-8 gap-5">
                {majorServicesCategories.map((service) => (
                    <Service service={service} key={service.id} />
                ))}
            </div>
        </div>
    );
}

export default Services;
