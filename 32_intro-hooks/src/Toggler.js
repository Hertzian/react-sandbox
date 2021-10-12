//import { useState } from 'react'
import useToggle from './hooks/useToggle'

const Toggler = () => {
  const [isHappy, toggleIsHappy] = useToggle(true)
  const [isBroken, toggleIsBroken] = useToggle(false)
  const [isFruit, toggleIsFruit] = useToggle(false)

  //const happiness = () => setIsHappy(!isHappy)
  //const brokeness = () => setIsBroken(!isBroken)

  return (
    <div>
      <h2>Toggler happy: </h2>
      <h2 onClick={toggleIsHappy}>{isHappy ? '😄' : '😢'}</h2>
      <h2>Toggler hearts: </h2>
      <h2 onClick={toggleIsBroken}>{isBroken ? '💔' : '💖'}</h2>
      <h2>Toggler fruis: </h2>
      <h2 onClick={toggleIsFruit}>{isFruit ? '🍉' : '🍎'}</h2>
    </div>
  )
}

export default Toggler
