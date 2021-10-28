import React from 'react'
import { useState, useEffect } from 'react'
import api from '../Axios/Axios'

function Database() {
  const [data, setData] = useState([])

  const url = '/studentsdata'

  console.log(api)

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

  return (
    <div>
      <h3 className='form_heading'>STUDENT DATA</h3>
      {data.map((data1, index) => {
        return (
          <div className='w-75 mx-auto'>
            <div className='top_area row'>
              <h4>STUDENT{index + 1} DATA</h4>
            </div>
            {data1.map((data2) => {
              return (
                <table className='table table-dark table-striped'>
                  <tr>
                    <th scope='row'>{data2.value}</th>
                    <td className='mx-auto w-50 table-active' colspan='2'>
                      {data2.fieldvalue}
                    </td>
                  </tr>
                </table>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Database
