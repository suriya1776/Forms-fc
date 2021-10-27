import React from 'react'
import { useState, useEffect } from 'react'
import api from '../Axios/Axios'

function Database() {
  const [data, setData] = useState([])

  const url = '/studentsdata'

  useEffect(() => {
    api
      .get(url)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [url])
  console.log(data)
  return (
    <div>
      <h1>database page</h1>
    </div>
  )
}

export default Database
