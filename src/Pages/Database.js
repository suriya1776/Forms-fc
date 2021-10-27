import React from 'react'
import { useState, useEffect } from 'react'
import api from '../Axios/Axios'

function Database() {
  const [data, setData] = useState([])
  const [remove, setRemove] = useState()

  const url = '/studentsdata'
  const url2 = '/studentsdata/1'

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
  useEffect(() => {
    api
      .delete(url2)
      .then((resp) => {
        console.log(resp.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [remove])

  const RemoveHandler = (index) => {
    setRemove(index)
  }

  return (
    <div>
      <h3 className='form_heading'>STUDENT DATA</h3>
      {data.map((data1, index) => {
        return (
          <div className='w-75 mx-auto'>
            <div className='top_area row'>
              <h4>STUDENT{index + 1} DATA</h4>
              <button
                type='button'
                className='btn btn-primary '
                onClick={() => RemoveHandler(index)}
              >
                REMOVE DATA
              </button>
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
