import { faAnglesUp, faCheck, faSign, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useAuth from '../hooks/useAuth';

function Table({
    rows,
    cols,
    variant,
    setIsDeleted,
    setStatus,
    setToLetUpdate,
    setToLetUpdated,
    setWorkerUpdated
}) {
    // hooks
    const { setWorkUpdate, setApplicationUpdate } = useAuth();
    // handle delete worker
    const handleDeleteWorker = (id, email) => {
        console.log(id);
        fetch(`https://evening-sands-63384.herokuapp.com/workers?id=${id}&&email=${email}`, {
            method: 'DELETE'
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                data.deletedCount > 0 && setWorkerUpdated(true);
            });
    };

    // handle delete services
    const handleDeleteService = (id) => {
        fetch(`https://evening-sands-63384.herokuapp.com/services?id=${id}`, {
            method: 'DELETE'
        })
            .then((res) => res.json())
            .then((data) => {
                data.deletedCount > 0 && setIsDeleted(true);
            });
    };

    // handle approve application
    const handleApproveApplication = (worker) => {
        fetch(`https://evening-sands-63384.herokuapp.com/application`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(worker)
        })
            .then((res) => res.json())
            .then((data) => {
                setApplicationUpdate(true);
            });
    };
    // handle delete application
    const handleDeleteApplication = (email) => {
        fetch(`https://evening-sands-63384.herokuapp.com/application?email=${email}`, {
            method: 'DELETE'
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    setApplicationUpdate(true);
                }
            });
    };

    // handle working status
    const handleWorkingStatus = (email, status, id) => {
        fetch(`https://evening-sands-63384.herokuapp.com/workingStatus`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email, status, id })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.message) {
                    setWorkUpdate(true);
                }
            });
    };

    // handle complete work
    const handleCompleteWork = (id) => {
        fetch(`https://evening-sands-63384.herokuapp.com/complete`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    alert('Status Updated');
                }
                setWorkUpdate(true);
            });
    };

    // handle toLet application Delete & approve
    const handleToLetApplication = (id, method) => {
        fetch(`https://evening-sands-63384.herokuapp.com/toLet`, {
            method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
            .then((res) => res.json())
            .then((data) => {
                setToLetUpdate(true);
            });
    };

    // handle tolet delete
    const handleDeleteToLet = (id) => {
        console.log(id);
        fetch(`https://evening-sands-63384.herokuapp.com/toLet/delete?id=${id}`, {
            method: 'DELETE'
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                    setToLetUpdated(true);
                }
            });
    };
    return (
        <div className="mr-2">
            <div className="flex flex-col">
                <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden ">
                            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                <thead className="bg-gray-100 dark:bg-gray-700">
                                    <tr>
                                        {rows.map((row) => (
                                            <th
                                                key={row}
                                                scope="col"
                                                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                            >
                                                {row}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                    {/* to show booking status */}
                                    {variant === 'bookingStatus' &&
                                        cols.map((col) => (
                                            <tr
                                                key={col.id}
                                                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.customerName}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.customerEmail}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.workerName}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.workerEmail}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.workerCategory}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    <span
                                                        className={`py-1 px-2 rounded-full text-black ${
                                                            col.workingStatus === 'Pending' &&
                                                            'bg-yellow-500'
                                                        } ${
                                                            col.workingStatus === 'Not Working' &&
                                                            'bg-violet-500'
                                                        } ${
                                                            col.workingStatus === 'Working' &&
                                                            'bg-blue-500'
                                                        } ${
                                                            col.workingStatus === 'Completed' &&
                                                            'bg-green-500'
                                                        }
                                                        ${
                                                            col.workingStatus === 'Rejected' &&
                                                            'bg-red-500'
                                                        }`}
                                                    >
                                                        {col.workingStatus}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}

                                    {/* to show services */}
                                    {variant === 'adminServices' &&
                                        cols.map((col) => (
                                            <tr
                                                key={col.id}
                                                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.name}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.category}
                                                </td>

                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {/* <button
                                                        title="Update worker"
                                                        className="bg-blue-400 text-white p-2 mr-2 rounded-full w-10 h-10 hover:bg-blue-500"
                                                    >
                                                        <FontAwesomeIcon icon={faPen} />
                                                    </button> */}
                                                    <button
                                                        title="Remove worker"
                                                        className="bg-red-400 text-white p-2  rounded-full w-10 h-10 hover:bg-red-500"
                                                        onClick={() => handleDeleteService(col._id)}
                                                    >
                                                        <FontAwesomeIcon icon={faXmark} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    {/* to show workers */}
                                    {variant === 'workersTable' &&
                                        cols.map((col) => (
                                            <tr
                                                key={col.id}
                                                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.name}
                                                </td>

                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.phone}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.email}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.experience}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.skill}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {/*  <button
                                                        title="Update worker"
                                                        className="bg-blue-400 text-white p-2 mr-2 rounded-full w-10 h-10 hover:bg-blue-500"
                                                    >
                                                        <FontAwesomeIcon icon={faPen} />
                                                    </button> */}
                                                    <button
                                                        title="Remove worker"
                                                        className="bg-red-400 text-white p-2  rounded-full w-10 h-10 hover:bg-red-500"
                                                        onClick={() =>
                                                            handleDeleteWorker(col._id, col.email)
                                                        }
                                                    >
                                                        <FontAwesomeIcon icon={faXmark} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    {/* to show booked workers and tolets */}
                                    {variant === 'bookingsTable' &&
                                        cols.map((col) => (
                                            <tr
                                                key={col.id}
                                                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.workerName}
                                                </td>

                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.workerCategory}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.workerPhone}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    <span
                                                        className={`py-1 px-2 rounded-full text-black ${
                                                            col.workingStatus === 'Pending' &&
                                                            'bg-yellow-500'
                                                        } ${
                                                            col.workingStatus === 'Not Working' &&
                                                            'bg-violet-500'
                                                        } ${
                                                            col.workingStatus === 'Working' &&
                                                            'bg-blue-500'
                                                        } ${
                                                            col.workingStatus === 'Completed' &&
                                                            'bg-green-500'
                                                        }
                                                        ${
                                                            col.workingStatus === 'Rejected' &&
                                                            'bg-red-500'
                                                        }`}
                                                    >
                                                        {col.workingStatus}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white ">
                                                    {col?.workingProgress}
                                                </td>
                                            </tr>
                                        ))}

                                    {/* to show worker requests */}
                                    {variant === 'workersRequest' &&
                                        cols.map((col) => (
                                            <tr
                                                key={col._id}
                                                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.name}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.category}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.phone}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.experience}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.skill}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    <button
                                                        onClick={() =>
                                                            handleApproveApplication(col)
                                                        }
                                                        title="Approve"
                                                        className="bg-green-400 text-white p-2 mr-2 rounded-full w-10 h-10 hover:bg-green-500"
                                                    >
                                                        <FontAwesomeIcon icon={faSign} />
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            handleDeleteApplication(col.email)
                                                        }
                                                        title="Delete"
                                                        className="bg-red-400 text-white p-2  rounded-full w-10 h-10 hover:bg-red-500"
                                                    >
                                                        <FontAwesomeIcon icon={faXmark} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}

                                    {/* current works */}
                                    {variant === 'currentWorks' &&
                                        cols?.map((col) => (
                                            <tr
                                                key={col.id}
                                                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.customerName}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.customerEmail}
                                                </td>

                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.customerPhone}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    <span
                                                        className={`py-1 px-2 rounded-full text-black ${
                                                            col.workingStatus === 'Not Working' &&
                                                            'bg-yellow-500'
                                                        } ${
                                                            col.workingStatus === 'Working' &&
                                                            'bg-green-500'
                                                        }`}
                                                    >
                                                        {col.workingStatus}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.workingProgress}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.cost}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    <button
                                                        onClick={() =>
                                                            handleWorkingStatus(
                                                                col.workerEmail,
                                                                'Working',
                                                                col._id
                                                            )
                                                        }
                                                        title="Update Working Status"
                                                        className="bg-yellow-400 text-white p-2 mr-2 rounded-full w-10 h-10 hover:bg-yellow-500"
                                                    >
                                                        <FontAwesomeIcon icon={faAnglesUp} />
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            handleWorkingStatus(
                                                                col.workerEmail,
                                                                'Completed',
                                                                col._id
                                                            )
                                                        }
                                                        title="Work Completed"
                                                        className="bg-green-400 text-white p-2 mr-2 rounded-full w-10 h-10 hover:bg-green-500"
                                                    >
                                                        <FontAwesomeIcon icon={faCheck} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}

                                    {/* to show Available to-lets */}
                                    {variant === 'toLets' &&
                                        cols?.map((col) => (
                                            <tr
                                                key={col._id}
                                                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.name}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.location}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.phone}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.houseCategory}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.price}
                                                </td>

                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {/* <button
                                                        title="Update to-let information"
                                                        className="bg-blue-400 text-white p-2 mr-2 rounded-full w-10 h-10 hover:bg-blue-500"
                                                    >
                                                        <FontAwesomeIcon icon={faPen} />
                                                    </button> */}
                                                    <button
                                                        onClick={() => handleDeleteToLet(col._id)}
                                                        title="Remove to-let"
                                                        className="bg-red-400 text-white p-2  rounded-full w-10 h-10 hover:bg-red-500"
                                                    >
                                                        <FontAwesomeIcon icon={faXmark} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}

                                    {/* to show customers */}
                                    {variant === 'customers' &&
                                        cols.map((col) => (
                                            <tr
                                                key={col.id}
                                                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.displayName}
                                                </td>

                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.email}
                                                </td>
                                            </tr>
                                        ))}

                                    {/* to show workers available */}
                                    {variant === 'availableWorkers' &&
                                        cols.map((col) => (
                                            <tr
                                                key={col._id}
                                                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.name}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.category}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.phone}
                                                </td>

                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    <button
                                                        onClick={() =>
                                                            handleWorkingStatus(
                                                                col.email,
                                                                'Busy',
                                                                col._id
                                                            )
                                                        }
                                                        title="Update Status"
                                                        className="bg-green-400 text-white p-2 mr-2 rounded-full w-10 h-10 hover:bg-green-500"
                                                    >
                                                        <FontAwesomeIcon icon={faSign} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    {/* to show workers available */}
                                    {variant === 'busyWorkers' &&
                                        cols.map((col) => (
                                            <tr
                                                key={col.id}
                                                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.name}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.category}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    {col.phone}
                                                </td>

                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    <button
                                                        onClick={() =>
                                                            handleWorkingStatus(col.email, 'Free')
                                                        }
                                                        title="Update Status"
                                                        className="bg-green-400 text-white p-2 mr-2 rounded-full w-10 h-10 hover:bg-green-500"
                                                    >
                                                        <FontAwesomeIcon icon={faSign} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}

                                    {/* to show work request */}
                                    {variant === 'workRequest' &&
                                        cols?.map((col) => (
                                            <tr
                                                key={col.id}
                                                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.customerName}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.customerPhone}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.customerEmail}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.cost}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    <span
                                                        className={`py-1 px-2 rounded-full text-black font-light bg-yellow-400
                                                         `}
                                                    >
                                                        {col.workingStatus}
                                                    </span>
                                                </td>

                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    <button
                                                        onClick={() =>
                                                            handleWorkingStatus(
                                                                col.workerEmail,
                                                                'Not Working',
                                                                col._id
                                                            )
                                                        }
                                                        title="Accept Request"
                                                        className="bg-green-400 text-white p-2 mr-2 rounded-full w-10 h-10 hover:bg-green-500"
                                                    >
                                                        <FontAwesomeIcon icon={faCheck} />
                                                    </button>
                                                    <button
                                                        title="Delete Request"
                                                        className="bg-red-400 text-white p-2  rounded-full w-10 h-10 hover:bg-red-500"
                                                        onClick={() =>
                                                            handleWorkingStatus(
                                                                col.workerEmail,
                                                                'Rejected',
                                                                col._id
                                                            )
                                                        }
                                                    >
                                                        <FontAwesomeIcon icon={faXmark} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    {/* to show all works */}
                                    {variant === 'works' &&
                                        cols?.map((col) => (
                                            <tr
                                                key={col.id}
                                                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.customerName}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.customerPhone}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.customerEmail}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.cost}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    <span
                                                        className={`py-1 px-2 rounded-full text-black font-light  ${
                                                            col.workingStatus === 'Completed' &&
                                                            'bg-green-400'
                                                        } ${
                                                            col.workingStatus === 'Rejected' &&
                                                            'bg-red-500'
                                                        } ${
                                                            col.workingStatus === 'Pending' &&
                                                            'bg-yellow-500'
                                                        } ${
                                                            col.workingStatus === 'Not Working' &&
                                                            'bg-blue-500'
                                                        } ${
                                                            col.workingStatus === 'Rejected' &&
                                                            'bg-green-500'
                                                        }`}
                                                    >
                                                        {col.workingStatus}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.workingStatus}
                                                </td>
                                            </tr>
                                        ))}

                                    {/* to show pending requests */}

                                    {variant === 'requestPending' &&
                                        cols?.map((col) => (
                                            <tr
                                                key={col.id}
                                                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.workerName}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.workerEmail}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.workerPhone}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.cost}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    <span
                                                        className={`py-1 px-2 rounded-full text-black font-light   ${
                                                            col.workingStatus === 'Rejected' &&
                                                            'bg-red-500'
                                                        } ${
                                                            col.workingStatus === 'Pending' &&
                                                            'bg-yellow-500'
                                                        } `}
                                                    >
                                                        {col.workingStatus}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    {/* to show pending tolet requests */}

                                    {variant === 'toLetRequests' &&
                                        cols?.map((col) => (
                                            <tr
                                                key={col.id}
                                                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.name}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.email}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.phone}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.price}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.location}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {col.houseCategory}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    <span className="bg-yellow-500 py-1 px-2 rounded-full">
                                                        {col.applicationStatus || 'Pending'}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                    <button
                                                        onClick={() =>
                                                            handleToLetApplication(col._id, 'PUT')
                                                        }
                                                        title="Accept Request"
                                                        className="bg-green-400 text-white p-2 mr-2 rounded-full w-10 h-10 hover:bg-green-500"
                                                    >
                                                        <FontAwesomeIcon icon={faCheck} />
                                                    </button>
                                                    <button
                                                        title="Delete Request"
                                                        className="bg-red-400 text-white p-2  rounded-full w-10 h-10 hover:bg-red-500"
                                                        onClick={() =>
                                                            handleToLetApplication(
                                                                col._id,
                                                                'DELETE'
                                                            )
                                                        }
                                                    >
                                                        <FontAwesomeIcon icon={faXmark} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;
