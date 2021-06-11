import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Main = () => {
  const [test, setTest] = useState('no')
  useEffect(() => {
    axios.get('/api/v1/test').then(({data}) => setTest(JSON.stringify(data)))
  })
  
  return (
    <div className="App">
      This is main page
      <p>{test}</p>
    </div>
  )
}

export default Main
