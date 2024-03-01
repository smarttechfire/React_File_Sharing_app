import React from 'react'
import success from '../../../../assets/success.json'
import Lottie from 'lottie-react'

function CompleteCheck() {
  const style = {
    width: "300px",
    height: "300px"
    
  }
  return (
    <div className='flex flex-col items-center justify-center w-full p-15'>
      <Lottie style={style} animationData={success}/>
      <h1>Successfully Upload!!</h1>
    </div>
  )
}

export default CompleteCheck
