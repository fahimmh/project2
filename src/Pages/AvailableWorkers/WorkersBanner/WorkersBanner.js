import React from 'react';
import Select from 'react-select';
import Slider from 'react-slick';
import Button from '../../../components/Button';
// import person1 from '../../../images/person1-removebg-preview.png';
import person2 from '../../../images/person2-removebg-preview.png';
import person3 from '../../../images/person3-removebg-preview.png';
import person4 from '../../../images/person4-removebg-preview.png';
import './WorkersBanner.css';

function WorkersBanner({
    role,
    options,
    setSearchValue,
    setSearch,
    setReset,
    setFilter,
    setSearchedWorkers
}) {
    const persons = [
        // { id: 1, src: person1, name: 'Jashim' },
        { id: 1, src: person2, name: 'Karim' },
        { id: 1, src: person3, name: 'Rabbi' },
        { id: 1, src: person4, name: 'Jasim' }
    ];
    const filterOptions = [
        { label: 'Top Workers', value: 'expert' },
        { label: 'Available Workers', value: 'Free' },
        { label: 'Busy Workers', value: 'Busy' }
    ];
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        arrows: false
    };

    // funcs
    const handleReset = () => {
        console.log('inside');
        setSearchValue('');
        setSearchedWorkers([]);
        setFilter('');
        setReset(true);
    };

    const handleFilter = (e) => {
        const filter = filterOptions.find((option) => option.label === e.target.innerText);
        console.log(filter);
        setFilter(filter.value);
    };

    return (
        <div className="bg-pink-400 -z-10 pt-20 pb-10 -mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 md:w-3/4 mx-auto w-full">
                {/* search field */}
                <div className="my-auto lg:ml-10 mx-10 lg:mx-0">
                    <h2 className="text-3xl mb-3 capitalize">
                        Find the perfect {role || 'Worker'}
                    </h2>

                    <div className="flex">
                        <Select
                            className="w-full rounded-r-none"
                            options={options}
                            onChange={(e) => setSearchValue(e.value)}
                        />
                        <button
                            onClick={() => setSearch(true)}
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-[9px] -ml-1 z-10 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-r-lg"
                        >
                            Search
                        </button>
                    </div>
                    <div className="mt-3">
                        <span className="mr-2">Filter:</span>
                        {filterOptions.map((option) => (
                            <Button onClick={handleFilter} key={option.value} variant="outlined">
                                {option.label}
                            </Button>
                        ))}
                        <Button onClick={handleReset} variant="primary">
                            Clear Filter & Search
                        </Button>
                    </div>
                </div>
                {/* slider */}
                <div className="hidden lg:block">
                    <Slider style={{ zIndex: 1 }} {...settings}>
                        {persons.map((person, index) => (
                            <div className="flex justify-center" key={person.id}>
                                <div
                                    style={{
                                        height: '600px',
                                        overflow: 'hidden',
                                        mx: 'auto',
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <img src={person.src} alt="" />
                                </div>
                                <h2 className="text-center text-2xl">{person.name}</h2>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default WorkersBanner;
