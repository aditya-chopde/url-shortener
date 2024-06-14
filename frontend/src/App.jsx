import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ShortUrl from './components/ShortUrl'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ShortUrl/>
    </>
  )
}

export default App
