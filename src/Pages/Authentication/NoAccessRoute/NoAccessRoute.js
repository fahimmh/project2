import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

function NoAccessRoute() {
    const { savedUser } = useAuth();
    const navigate = useNavigate();
    return (
        <div className="flex w-full h-screen items-center justify-center">
            <div className="uppercase">
                <h2 className="text-4xl">Sorry, Only User Can Hire Workers</h2>
                <p className="text-center text-red-500 font-bold mt-3">{savedUser.role} Cannot</p>
                <p className="text-center mt-4">
                    Go back to,
                    <button
                        onClick={() => navigate('/')}
                        className="text-xl text-blue-500 underline"
                    >
                        Home Page
                    </button>
                </p>
            </div>
        </div>
    );
}

export default NoAccessRoute;
