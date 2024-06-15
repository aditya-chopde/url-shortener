import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ShortUrl from './components/ShortUrl'
import SignUp from './components/SignUp'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <ShortUrl/> */}
     <SignUp/>
     {/* <Login/> */}
    </>
  )
}

export default App
