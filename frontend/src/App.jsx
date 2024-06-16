import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ShortUrl from './components/ShortUrl'
import SignUp from './components/SignUp'
import Login from './components/Login'
import AllUrls from './components/AllUrls'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <ShortUrl/> */}
     {/* <SignUp/> */}
     {/* <Login/> */}
     <AllUrls/>
    </>
  )
}

export default App
