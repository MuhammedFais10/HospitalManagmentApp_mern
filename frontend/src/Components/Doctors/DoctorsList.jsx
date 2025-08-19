import React from 'react'
import {doctors} from '../../assets/Data/doctors'
import DoctorCard from './DoctorCard'

function DoctorsList() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[3-px] lg:mt-[55px]'>
  {doctors.map((doctor) => (
  <DoctorCard key={doctor.id} doctor={doctor} />
))}
      </div>
  )
}

export default DoctorsList