import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const Loader = () => {
    const { progress } = useProgress()
    return <Html center className='text-white text-3xl text-center font-normal'>{progress.toFixed(2)}% Loaded</Html>
}

export default Loader