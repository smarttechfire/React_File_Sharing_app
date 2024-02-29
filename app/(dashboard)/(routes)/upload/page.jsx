"use client"
import React from 'react'
import UploadForm from './_components/UploadForm'

function Upload() {
  return (
    <div className=' p-5 md:px-8'>
      <h2 className='text-[20px] text-center m-5'>Start <strong className=' text-primary'>Uploading</strong>  File and <strong className=' text-primary'>Share</strong> it</h2>
      <UploadForm />
    </div>
  )
}

export default Upload
