import React from 'react';

function WorkerDetailModal({ showDetail, setShowDetail, detail }) {
    const { name, category, experience, location, email, phone, houseCategory } = detail;
    return (
        <div
            className={
                showDetail === true
                    ? 'flex overflow-y-auto overflow-x-hidden fixed right-0 left-[50%] top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0'
                    : 'hidden'
            }
        >
            <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                            About{' '}
                            <span>
                                {detail.category === 'toLet' ? 'House Owner' : detail.category}
                            </span>{' '}
                            <span className="capitalize">{name}</span>
                        </h3>
                        <button
                            onClick={() => setShowDetail(false)}
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="defaultModal"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="p-6 space-y-6">
                        {category === 'toLet' ? (
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                The house owner is {name}. He wants to give a {houseCategory}. And
                                also provide all the services. That a {category} provides. If you
                                want to book it then please contact him with the given below email
                                and contact number.
                            </p>
                        ) : (
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                Mr. {name} is 18 years old {category}. Who can fix any problems
                                related to {category}. And also provide all the services. That a{' '}
                                {category} provides.
                            </p>
                        )}
                        <div>
                            <p>Location: {location}</p>
                            {experience && <p>Experience: {experience}</p>}
                            {houseCategory && <p>House type: {houseCategory}</p>}
                        </div>
                        <div>
                            <p>Email: {email}</p>
                            <p>Phone: {phone}</p>
                        </div>
                    </div>

                    <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                        <button
                            onClick={() => setShowDetail(false)}
                            data-modal-toggle="defaultModal"
                            type="button"
                            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkerDetailModal;
