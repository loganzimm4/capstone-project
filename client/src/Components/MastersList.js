import React from 'react'
import MasterCard from './MasterCard'

function MastersList({masters, onUpdatedMaster}) {

  return (
    <ul className='master'>
        {masters.map(master => <MasterCard master={master} onUpdatedMaster={onUpdatedMaster} key={master.id}/>)}
    </ul>
  )
}

export default MastersList