import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import WorkerDetailModal from '../DetailModal/DetailModal';

function Worker({ worker }) {
    const [showDetail, setShowDetail] = useState(false);
    const navigate = useNavigate();
    const { savedUser } = useAuth();
    const {
        src,
        name,
        location,
        experience,
        category,
        skill,
        email,
        phone,
        _id,
        workingStatus,
        salary
    } = worker;
    const socials = [
        { id: 1, icon: faFacebookF, link: '#', bg: '#3b5998' },
        { id: 2, icon: faLinkedinIn, link: '#', bg: '#0e76a8' },
        { id: 3, icon: faInstagram, link: '#', bg: '#3f729b' }
    ];

    return (
        <>
            <div className="shadow-lg mx-2 rounded-md hover:shadow-xl">
                {/* card header */}
                {/* img */}
                <div className="h-[270px] overflow-hidden">
                    <img className="w-full h-auto rounded-lg " src={src} alt="worker" />
                </div>
                {/* card body */}
                <div className="px-5 pt-2 pb-3 rounded-b-lg">
                    {/* name */}
                    <h2 className="text-xl text-center mb-3">{name}</h2>
                    {/*  level & category & avaivility */}
                    <div className="flex items-center justify-center align-middle">
                        <p
                            className={`text-white  inline-block px-3 py-1 rounded-full w-min h-min text-sm capitalize ${
                                skill === 'expert' && 'bg-violet-500'
                            } ${skill === 'intermediate' && 'bg-orange-500'} ${
                                skill === 'beginner' && 'bg-green-500'
                            }`}
                        >
                            {skill}
                        </p>
                        <p className="text-white inline-block px-3 py-1 rounded-full w-min h-min text-sm capitalize bg-blue-500 mx-2">
                            {category}
                        </p>
                        <p
                            className={`text-white  inline-block px-3 py-1 rounded-full w-min h-min text-sm capitalize  ${
                                workingStatus === 'Busy' && 'bg-red-500'
                            }  ${workingStatus === 'Free' && 'bg-green-500'}`}
                        >
                            {workingStatus || 'Free'}
                        </p>
                    </div>

                    {/* experience & location & contact */}

                    <div className="my-2">
                        <div className=" mt-2">
                            <p className="text-sm mr-2">
                                Experience:
                                <span className="font-bold"> {experience}</span>
                            </p>
                            <p className="text-sm my-2">
                                Location: <span className="font-bold">{location}</span>
                            </p>
                        </div>
                        {/* phone & email */}
                        <div className="flex text-sm justify-between">
                            <p>
                                <FontAwesomeIcon icon={faEnvelope} />:{' '}
                                <span className="ml-.5">{email}</span>
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faPhone} />:{' '}
                                <span className="ml-.5">{phone}</span>
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

                    {/* salary */}
                    <div>
                        <p className="text-xl text-center my-3 font-bold">
                            Salary: <span className="text-yellow-500">{salary || '5000'}</span>
                        </p>
                    </div>

                    {/* actions */}
                    <div className="flex rounded-md shadow-sm items-center justify-center">
                        <button
                            onClick={() => setShowDetail(true)}
                            type="button"
                            className="relative flex align-middle items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-l-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                        >
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-l-md group-hover:bg-opacity-0 ">
                                Details
                            </span>
                        </button>
                        {savedUser.role === 'user' ? (
                            <button
                                onClick={() =>
                                    workingStatus === 'working'
                                        ? navigate(`/request/${_id}`)
                                        : navigate(`/hire/${_id}`)
                                }
                                type="button"
                                className="relative flex align-middle items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-r-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 "
                            >
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-r-md group-hover:bg-opacity-0">
                                    {workingStatus === 'Busy' ? 'Request' : 'Hire Now'}
                                </span>
                            </button>
                        ) : (
                            <button disabled className="bg-gray-300 p-2.5 rounded-r-lg">
                                Hire
                            </button>
                        )}
                    </div>
                </div>
            </div>
            {/* detail modal  */}
            <WorkerDetailModal
                showDetail={showDetail}
                setShowDetail={setShowDetail}
                detail={worker}
            />
        </>
    );
}

export default Worker;
