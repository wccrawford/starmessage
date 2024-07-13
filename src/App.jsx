import { useState } from 'react'
import { useSearchParams } from "react-router-dom";
import CodeScore from './CodeScore.jsx';
import CodeEntry from './CodeEntry.jsx';
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  const [searchParams, setSearchParams] = useSearchParams();
  //searchParams.get("__firebase_request_key")
  const code = searchParams.get("code");

  return (
    <>
      { code ?
        <CodeScore code={code}/>
        :
        <CodeEntry />
      }
    </>
  )
}

export default App
