import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Title from '../../../components/Title'
import Footer from '../../Shared/Footer/Footer'
import Header from '../../Shared/Header/Header'
import Owner from '../../Shared/Owner/Owner'
import Worker from '../../Shared/Worker/Worker'
import WorkersBanner from '../WorkersBanner/WorkersBanner'

function AvailableWorkers () {
  const [workers, setWorkers] = useState([])
  const [searchedWorkers, setSearchedWorkers] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [search, setSearch] = useState(false)
  const [filter, setFilter] = useState('')
  const [reset, setReset] = useState(false)
  const { role } = useParams()
  console.log(searchValue)
  console.log(searchedWorkers)
  console.log(workers)

  useEffect(() => {
    if (searchValue && search) {
      setSearch(false)
      setReset(false)
      console.log('inside1')
      fetch(`https://evening-sands-63384.herokuapp.com/worker/${searchValue}`)
        .then(res => res.json())
        .then(data => setSearchedWorkers([data]))
    } else {
      console.log('inside2')
      fetch(
        `https://evening-sands-63384.herokuapp.com/workers?role=${role}&&filter=${filter}`
      )
        .then(res => res.json())
        .then(data => setWorkers(data))
    }
  }, [search, reset, filter, role])
  console.log('clicked')
  const allAvailableWorkerNames = workers.map(worker => ({
    value: worker._id,
    label:
      worker.name?.charAt(0)?.toUpperCase() + worker.name &&
      worker.name.slice(1)
  }))

  return (
    <>
      {/* header */}
      <Header />
      {/* banner */}
      <WorkersBanner
        role={role}
        options={allAvailableWorkerNames}
        setSearchValue={setSearchValue}
        setSearch={setSearch}
        setFilter={setFilter}
        setReset={setReset}
        setSearchedWorkers={setSearchedWorkers}
      />
      {/* workers */}
      <div className='my-20'>
        <Title classes='mb-5 capitalize'>
          All Available {role || 'Workers'}
        </Title>

        <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-5'>
          {role === 'toLet' &&
            workers.map(owner => <Owner key={owner._id} owner={owner} />)}

          {searchedWorkers.length > 0 &&
            searchedWorkers.map(worker => (
              <Worker worker={worker} key={worker?._id} />
            ))}
          {searchedWorkers.length === 0 &&
            role !== 'toLet' &&
            workers.map(worker => <Worker worker={worker} key={worker._id} />)}
        </div>
      </div>
      {/* footer */}
      <Footer />
    </>
  )
}

export default AvailableWorkers
