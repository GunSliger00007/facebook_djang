import React from 'react'
import './middlehome.scss'
import Stories from './stories/stories'
import Status from '../../status/status'
import Posts from './posts/posts'

export default function middlehome() {
  return (
    <div className='middleHomeWrapper'>
      <Stories/>
      <Status/>
      <Posts/>
      
    </div>
  )
}
