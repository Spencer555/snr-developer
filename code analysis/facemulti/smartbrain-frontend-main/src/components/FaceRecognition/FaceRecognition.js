import React from 'react'
import './FaceRecognition.css'
export default function FaceRecognition({imageUrl, box}) {
  return (
    <div className='center ma'>
        
    
        <div className="absolute mt2">
        <img  id='inputImage' src={imageUrl} alt="image" width='500px' height='auto' />


{
  box?.map((box, i) => (
    <div key={i} className='bounding-box' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}> </div>
  ))
}

        </div>
 
   
    </div>
  )
}


