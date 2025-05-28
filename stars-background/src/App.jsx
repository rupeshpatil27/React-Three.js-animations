import { useState } from 'react'

import './App.css'
import StarsCanvas from './components/StarBackground'

function App() {


  return (
    <div className='bg-[#030014] overflow-y-scroll overflow-x-hidden checkcl'>
      <StarsCanvas />
      <div className='h-full w-full'>
        <div className='flex flex-col gap-20'>
          
        </div>
      </div>

    </div>
  )
}

export default App
