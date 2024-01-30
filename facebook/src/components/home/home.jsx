import React from 'react'
import './home.scss'
import Lefthomesidebar from './lefthomesidebar/lefthomesidebar'
import Middlehome from './middlehome/middlehome'
import Righthomesidebar from './righthomesidebar/righthomesidebar'
export default function home() {
  return (
    <div className='home'>
     <Lefthomesidebar/>
     <Middlehome/>
     <Righthomesidebar/>
    </div>
  )
}

