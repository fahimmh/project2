import React from 'react';
import { useNavigate } from 'react-router-dom';

function Service({ service, serviceFor }) {
    const { src, linkText, link, category, about, name } = service;
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate(`/workers/${serviceFor}`)}
            className=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl"
        >
            <div className="h-[200px] overflow-hidden">
                <img className="w-full h-auto rounded-t-lg" src={src} alt="" />
            </div>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name || category}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-[90px] overflow-hidden">
                    {about}
                </p>
            </div>
        </div>
    );
}

export default Service;
