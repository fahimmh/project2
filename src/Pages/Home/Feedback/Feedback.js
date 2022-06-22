import React from 'react';

function Feedback({ feedback }) {
    const { name, src, about, role } = feedback;
    return (
        <div>
            <div className="md:grid md:grid-cols-2 mx-auto  overflow-hidden md:gap-10 flex flex-col items-center justify-center">
                {/* image */}
                <div className="overflow-hidden rounded-full flex items-center justify-end h-max">
                    <img className="rounded-full " src={src} alt="" />
                </div>
                {/* name & role & feedback */}
                <div className="flex flex-col justify-center items-center md:items-start">
                    <h4 className="text-3xl font-serif mb-1">{name}</h4>
                    <span className="bg-gray-500 text-white py-1 px-2 rounded-full mb-3 inline-block w-max text-sm">
                        {role}
                    </span>
                    <p className="text-gray-500 w-1/2 inline-block">{about}</p>
                </div>
            </div>
        </div>
    );
}

export default Feedback;
