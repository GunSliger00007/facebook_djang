import React from 'react'
import './yourfeed.scss'
import Posts from '../../../../home/middlehome/posts/posts'
import Grouppost from '../../../../../my Data/grouppost'

export default function yourfeed() {
  const customStyles = {
    postWrapper: {
      width: '680px',
    },
    postImage: {
      backgroundColor: 'rgb(43, 42, 47)',
      height: '625px'
    },
    imageCentered: {
      display:'flex',
      justifyContent: 'center'
    },
    alternateImage: {
      width: '500px',
      height: '625px'
      
        }
  };
  return (
    <div className='groupPost'>
      <Posts data={Grouppost} customStyles={customStyles} showUploadedText={false} uploadedGroupName={true} uploaderNameGroup={true}/>
    </div>
  )
}
