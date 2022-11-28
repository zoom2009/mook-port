import React, { useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import Favicon from 'react-favicon'

const App = () => {
  const normalRef = useRef(null)
  const workRef = useRef(null)
  const pictureRef = useRef(null)

  return (
    <div>
      <Favicon url='favicon.ico' />
      <MyNav
        normalRef={normalRef}
        workRef={workRef}
        pictureRef={pictureRef}
      />
      <div ref={normalRef} style={{ width: '100%', height: '100vh', backgroundColor: 'pink' }}>
        
      </div>
      <div ref={workRef} style={{ width: '100%', height: '100vh', backgroundColor: '#f39c12' }}>
        
      </div>
      <div ref={pictureRef} style={{ width: '100%', height: '100vh', backgroundColor: '#1abc9c' }}>
        
      </div>
    </div>
  )
}

export default App
