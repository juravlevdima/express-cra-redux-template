import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Main = () => {

  const [test, setTest] = useState('loading...')
  useEffect(() => {
    axios.get('/api/v1/test')
      .then(({data}) => setTest(JSON.stringify(data)))
      .catch(() => setTest('server error'))
  })

  return (
    <div className="App">
      <p>This is main page</p>
      <p>Server test: {test}</p>
    </div>
  )
}

export default Main
