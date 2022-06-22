import React from 'react';
import InputWithBtn from '../../../components/InputWithBtn';

function Newsletter() {
    return (
        <div className="w-full lg:w-max p-10 rounded-lg flex justify-center bg-blue-600 text-white flex-col md:flex-row mx-auto items-center mt-10 ">
            <h2 className="text-2xl lg:text-4xl font-serif mr-4">Subscribe to our Newsletter</h2>
            <div className="flex align-center">
                <InputWithBtn placeholder="Your Email" btnText="Subscribe" />
            </div>
        </div>
    );
}

export default Newsletter;
