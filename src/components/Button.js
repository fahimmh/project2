import React from 'react';

function Button({ children, variant, ...rest }) {
    let classes;
    if (variant === 'primary') {
        classes =
            'text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900';
    } else if (variant === 'outlined') {
        classes =
            'text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800';
    } else if (variant === 'auth') {
        classes =
            'w-full py-1 mb-2 text-md bg-gradient-to-r from-cyan-500 to-blue-800  rounded-full text-white uppercase';
    }
    return (
        <button className={classes} {...rest}>
            {children}
        </button>
    );
}

export default Button;
