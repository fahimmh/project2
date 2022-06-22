import React from 'react';

function Title({ children, classes }) {
    return (
        <div className={` w-max mx-auto ${classes}`}>
            <h2
                style={{ fontFamily: 'Lobster, cursive' }}
                className="lg:text-6xl md:text-5xl sm:text-4xl text-2xl text-center mt-5"
            >
                {children}
            </h2>
            <span className="bg-violet-500 w-3/4 h-1 mx-auto text-center block mt-3" />
        </div>
    );
}

export default Title;
