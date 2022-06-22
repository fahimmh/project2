import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

function CustomerMessages() {
    const [messages, setMessages] = useState([]);
    const { setIsMessageSent, isMessageSent } = useAuth();
    console.log(isMessageSent);
    useEffect(() => {
        setIsMessageSent(false);
        fetch('https://evening-sands-63384.herokuapp.com/messages')
            .then((res) => res.json())
            .then((data) => setMessages(data));
    }, [isMessageSent]);
    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mx-3">
            {messages.map((message) => (
                <div className="shadow-md p-4 rounded-lg">
                    <h4 className="text-center text-xl uppercase">{message.name}</h4>
                    <p>Email: {message.email}</p>
                    <p className="text-sm">Message: {message.message}</p>
                </div>
            ))}
        </div>
    );
}

export default CustomerMessages;
