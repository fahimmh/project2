import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import WorkerDetailModal from '../DetailModal/DetailModal';

function Owner({ owner }) {
    const [showDetail, setShowDetail] = useState(false);
    const { src, name, location, experience, category, skill, email, phone, houseCategory } = owner;
    const socials = [
        { id: 1, icon: faFacebookF, link: '#', bg: '#3b5998' },
        { id: 2, icon: faLinkedinIn, link: '#', bg: '#0e76a8' },
        { id: 3, icon: faInstagram, link: '#', bg: '#3f729b' }
    ];
    return (
        <>
            <div className=" shadow-lg hover:shadow-xl">
                {/* card header */}
                {/* img */}
                <div className="h-[300px] overflow-hidden">
                    <img className="w-full h-auto rounded-lg " src={src} alt="" />
                </div>
                {/* card body */}
                <div className="p-5 rounded-b-lg">
                    {/* name & level */}
                    <h2 className="text-xl ">{name}</h2>

                    {/*  location */}
                    <div className=" mt-2">
                        <p className="text-sm">
                            House Location: <span className="font-bold">{location}</span>
                        </p>
                    </div>

                    {/*  House type */}
                    <div className=" mt-2">
                        <p className="text-sm">
                            House Type: <span className="font-bold">{houseCategory}</span>
                        </p>
                    </div>

                    {/* phone & email */}
                    <div className="">
                        <p>
                            E-mail:
                            <span className="ml-1">{email}</span>
                        </p>
                        <div>
                            <p>
                                Phone Number:
                                <span className="ml-1">{phone}</span>
                            </p>
                        </div>
                    </div>

                    {/* social */}
                    <div className="flex justify-center mt-3 items-center">
                        {socials.map((social) => (
                            <div
                                className="p-1 mx-2 text-white rounded-full px-2.5 cursor-pointer hover:text-red-500"
                                style={{ background: social.bg }}
                            >
                                <FontAwesomeIcon icon={social.icon} />
                            </div>
                        ))}
                    </div>

                    {/* details */}
                    <div className="flex items-center justify-center mt-4">
                        <button
                            onClick={() => setShowDetail(true)}
                            className="relative flex align-middle items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 "
                        >
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Details
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* detail modal */}
            <WorkerDetailModal
                setShowDetail={setShowDetail}
                showDetail={showDetail}
                detail={owner}
            />
        </>
    );
}

export default Owner;
