import React, { useState } from 'react';
import ErrorToast from '../../../../components/ErrorToasts';
import SuccessToast from '../../../../components/SuccessToasts';

function MakeAdmin() {
    const [email, setEmail] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleSubmit = (e) => {
        setIsError(false);
        setIsSuccess(false);
        e.preventDefault();
        fetch('https://evening-sands-63384.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    setIsSuccess(true);
                } else {
                    setIsError(true);
                }
            });
    };
    return (
        <div className="flex items-center justify-center h-full flex-col">
            <div className="flex flex-col lg:w-1/4 items-center justify-center bg-blue-300 pt-8 pb-10 px-5 rounded-lg">
                <label
                    htmlFor="email-adress-icon"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    New Admin Email
                </label>
                <form onSubmit={handleSubmit} className="flex lg:flex-row flex-col">
                    <div className="relative  flex flex-row items-center justify-center">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none justify-center">
                            <svg
                                className="w-5 h-5 text-gray-500 dark:text-gray-400 "
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </div>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            id="email-adress-icon"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg rounded-r-lg lg:rounded-r-none focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="email"
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-r-lg rounded-l-lg md:rounded-l-none text-sm px-5 py-2.5 text-center "
                    >
                        Make
                    </button>
                </form>
            </div>
            {/* toast */}
            <div className="mt-2">
                <SuccessToast isSuccess={isSuccess} setIsSuccess={setIsSuccess}>
                    User Successfully updated to Admin
                </SuccessToast>
                <ErrorToast isError={isError} setIsError={setIsError}>
                    User Does not exists
                </ErrorToast>
            </div>
        </div>
    );
}

export default MakeAdmin;
