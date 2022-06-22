import React from 'react';

function InputWithBtn({ btnText, ...rest }) {
    return (
        <div className="flex">
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-tl-lg rounded-bl-lg"
                {...rest}
            />
            <button className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium  text-sm px-5 py-2.5 text-center  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 rounded-tr-lg rounded-br-lg">
                {btnText}
            </button>
        </div>
    );
}

export default InputWithBtn;
