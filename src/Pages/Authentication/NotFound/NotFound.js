import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();
    return (
        <div className="flex w-full h-screen items-center justify-center text-center">
            <div>
                <h2 className="text-6xl">404</h2>
                <p>The Page Is Not Available</p>
                <p className="text-center mt-4 ">
                    Go back to,
                    <button
                        onClick={() => navigate('/')}
                        className="text-xl text-blue-500 underline ml-1"
                    >
                        Home Page
                    </button>
                </p>
            </div>
        </div>
    );
}

export default NotFound;
