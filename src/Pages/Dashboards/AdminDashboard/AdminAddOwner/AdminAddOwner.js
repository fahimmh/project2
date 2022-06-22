import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Button from '../../../../components/Button';
import ErrorToasts from '../../../../components/ErrorToasts';
import Input from '../../../../components/Input';
import Label from '../../../../components/Label';
import SuccessToasts from '../../../../components/SuccessToasts';
import Title from '../../../../components/Title';
import useAuth from '../../../../hooks/useAuth';
import src from '../../../../images/postTolet.svg';

function AdminAddOwner() {
    const { user } = useAuth();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState({
        category: 'toLet'
    });
    console.log(data);

    // handle form fields data
    const handleFormData = (e) => {
        const newData = { ...data };
        newData[e.target.name] = e.target.value;
        setData(newData);
    };

    // handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(false);
        setError(false);
        fetch('https://evening-sands-63384.herokuapp.com/workers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ ...data, name: user.displayName, email: user.email })
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    setSuccess(true);
                    e.target.reset();
                } else {
                    setError(true);
                }
            });
    };

    return (
        <>
            <Title classes="mb-5 hidden lg:block">Post ToLet</Title>
            <div className="container px-5 lg:mx-auto pt-5 grid lg:grid-cols-2 grid-cols-1 items-center">
                <div className="lg:flex hidden">
                    <img src={src} alt="" />
                </div>
                <div>
                    {/* toast */}
                    <div className="flex  justify-center w-full mb-5 ">
                        <SuccessToasts isSuccess={success} setIsSuccess={setSuccess}>
                            To-Let Posted Successfully{' '}
                        </SuccessToasts>
                        <ErrorToasts isError={error} setIsError={setError}>
                            An Error Occurred. Please Refresh the page and try again.
                        </ErrorToasts>
                    </div>
                    <Title classes="mb-5 lg:hidden">Post ToLet</Title>
                    <form onSubmit={handleSubmit}>
                        {/* worker name & email */}
                        <div className="flex">
                            {/* name */}
                            <div className="relative z-0 mb-6 w-full group mr-5">
                                <Input
                                    onBlur={handleFormData}
                                    id="name"
                                    name="name"
                                    variant="underlined"
                                    placeholder=" "
                                    type="text"
                                    value={user.displayName}
                                />
                                <Label>Name</Label>
                            </div>
                            {/* email */}
                            <div className="relative z-0 mb-6 w-full group">
                                <Input
                                    onBlur={handleFormData}
                                    id="email"
                                    name="email"
                                    variant="underlined"
                                    placeholder=" "
                                    type="email"
                                    value={user.email}
                                />
                                <Label>Email Address</Label>
                            </div>
                        </div>
                        {/* phone */}
                        <div className="relative z-0 mb-6 w-full group mr-5">
                            <Input
                                onBlur={handleFormData}
                                id="phone"
                                name="phone"
                                variant="underlined"
                                placeholder=" "
                                type="number"
                            />
                            <Label>Phone Number</Label>
                        </div>

                        {/* phone and address */}
                        <div className="flex">
                            {/* phone */}
                            <div className="relative z-0 mb-6 w-full group  mr-5">
                                <Input
                                    onBlur={handleFormData}
                                    name="price"
                                    variant="underlined"
                                    placeholder=" "
                                    type="number"
                                />
                                <Label>House Price</Label>
                            </div>
                            {/* phone */}
                            <div className="relative z-0 mb-6 w-full group ">
                                <Input
                                    onBlur={handleFormData}
                                    name="location"
                                    variant="underlined"
                                    placeholder=" "
                                    type="text"
                                />
                                <Label>House Location</Label>
                            </div>
                        </div>
                        {/* house category */}
                        <div className="mb-5">
                            <label
                                htmlFor="categories"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                            >
                                Select House Category
                            </label>
                            <select
                                name="houseCategory"
                                onBlur={handleFormData}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                required
                            >
                                <option value="Office Rent">Office rent</option>
                                <option value="Bachelor House Rent">Bachelor House rent</option>
                                <option value="Family House Rent">Family house rent</option>
                            </select>
                        </div>

                        {/* image */}
                        <div className="relative z-0 mb-6 w-full group mr-5">
                            <Input
                                onBlur={handleFormData}
                                id="src"
                                name="src"
                                variant="underlined"
                                placeholder=" "
                                type="text"
                            />
                            <label
                                htmlFor="src"
                                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Image
                            </label>
                        </div>

                        <Button type="submit" variant="primary">
                            Add <FontAwesomeIcon icon={faAdd} />
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AdminAddOwner;
