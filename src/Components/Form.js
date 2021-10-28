import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development'

import '../Styles/Form.css'

function Form() {
  const [remove, setRemove] = useState(true)
  const [submit, setSubmit] = useState(true)
  const [id, setId] = useState([1])
  const [studentData, setStudentData] = useState([
    {
      id: 0,
      type: 'text',
      value: 'Firstname',
      classname: 'w-40 mx-2 p-3',
      fieldvalue: 'Enter your firstname',
      error: '',
    },
    {
      id: 0,
      type: 'text',
      value: 'Secondname',
      classname: 'w-30 mx-2 p-3',
      fieldvalue: 'Enter your Secondname',
      error: '',
    },
    {
      id: 0,
      type: 'text',
      value: 'Lastname',
      classname: 'w-30 mx-2 p-3',
      fieldvalue: 'Enter your Lastname',
      error: '',
    },

    {
      id: 0,
      type: 'email',
      value: 'Email',
      classname: 'w-100 mx-2 p-3',
      fieldvalue: 'Enter your email',
      error: '',
    },

    {
      id: 0,
      type: 'text',
      value: 'Phonenumber',
      classname: 'w-50 mx-2 p-3',
      fieldvalue: 'Enter your phone number',
      error: '',
    },
    {
      id: 0,
      type: 'text',
      value: 'Birthdate',
      classname: 'w-50 mx-2 p-3',
      fieldvalue: '',
      error: '',
    },
    {
      id: 0,
      type: 'text',
      value: 'Ethnicity',
      classname: 'w-50 mx-2 p-3',
      fieldvalue: '',
      error: '',
    },

    {
      id: 0,
      type: 'text',
      value: 'Gender',
      classname: 'w-30 mx-2 p-3',
      fieldvalue: '',
      error: '',
    },

    {
      id: 0,
      type: 'text',
      value: 'StudentID',
      classname: 'w-100 mx-2 p-3',
      fieldvalue: 'ID',
      error: '',
    },

    {
      id: 0,
      type: 'text',
      value: 'Semester',
      classname: 'w-100 mx-2 p-3 below_form',
      fieldvalue: '',
      error: '',
    },
  ])

  const ChangeHandler = (e, index) => {
    const values = [...studentData]
    values[index].fieldvalue = e.target.value

    setStudentData(values)

    if (e.target.value === '') {
      const values = [...studentData]
      values[index].error = 'enter a valid answer'
      setStudentData(values)
      setSubmit(false)
    } else {
      const values = [...studentData]
      values[index].error = ''
      setStudentData(values)
      setSubmit(true)
    }
    if (e.target.name === 'Email') {
      var emailCheck =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
      if (emailCheck.test(`${e.target.value}`)) {
        const values = [...studentData]
        values[index].error = ''
        setStudentData(values)
        setSubmit(false)
      } else {
        const values = [...studentData]
        values[index].error = 'enter a valid email'
        setStudentData(values)
        setSubmit(true)
      }
    }
  }

  useEffect(() => {
    if (studentData.length > 10) {
      setRemove(false)
    } else {
      setRemove(true)
    }
  }, [studentData])

  const AddHandler = () => {
    let id_count = [...id]

    id_count.push(id_count.length + 1)

    setId(id_count)

    setStudentData([
      ...studentData,

      {
        id: id.slice(-1)[0],
        type: 'text',
        value: 'Firstname',
        classname: 'w-40 mx-2 p-3',
        fieldvalue: 'Enter your firstname',
      },
      {
        id: id.slice(-1)[0],
        type: 'text',
        value: 'Secondname',
        classname: 'w-30 mx-2 p-3',
        fieldvalue: 'Enter your Secondname',
      },
      {
        id: id.slice(-1)[0],
        type: 'text',
        value: 'Lastname',
        classname: 'w-30 mx-2 p-3',
        fieldvalue: 'Enter your Lastname',
      },

      {
        id: id.slice(-1)[0],
        type: 'email',
        value: 'Email',
        classname: 'w-100 mx-2 p-3',
        fieldvalue: 'Enter your email',
      },

      {
        id: id.slice(-1)[0],
        type: 'text',
        value: 'Phonenumber',
        classname: 'w-50 mx-2 p-3',
        fieldvalue: 'Enter your phone number',
      },
      {
        id: id.slice(-1)[0],
        type: 'text',
        value: 'Birthdate',
        classname: 'w-50 mx-2 p-3',
        fieldvalue: '',
      },
      {
        id: id.slice(-1)[0],
        type: 'text',
        value: 'Ethnicity',
        classname: 'w-50 mx-2 p-3',
        fieldvalue: '',
      },

      {
        id: id.slice(-1)[0],
        type: 'text',
        value: 'Gender',
        classname: 'w-30 mx-2 p-3',
        fieldvalue: '',
      },

      {
        id: id.slice(-1)[0],
        type: 'text',
        value: 'StudentID',
        classname: 'w-100 mx-2 p-3',
        fieldvalue: 'ID',
      },

      {
        id: id.slice(-1)[0],
        type: 'text',
        value: 'Semester',
        classname: 'w-100 mx-2 p-3 below_form',
        fieldvalue: '',
      },
    ])
  }
  // const url = `http://localhost:4000/studentsdata`
  const submitHandler = async (e) => {
    e.preventDefault()
    if (submit) {
      var myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      const id_value = studentData.map((studentData) => {
        return studentData.id
      })

      var raw = JSON.stringify(
        studentData.map((studentData) => {
          return {
            id: studentData.id,
            value: studentData.value,
            fieldvalue: studentData.fieldvalue,
          }
        })
      )

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      }

      fetch(`http://localhost:4000/studentsdata?id=${id_value}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log('error', error))
    }
  }

  const RemoveHandler = (e) => {
    const values1 = [...studentData]
    if (values1.length > 10) {
      values1.splice(values1.length - 10, 10)
      setStudentData(values1)
    }
  }

  return (
    <div className='row g-3'>
      <div className='w-100'>
        <h1 className='form_heading'>STUDENT DATA</h1>
      </div>

      {studentData.map((type, sIndex) => {
        return (
          <div className={type.classname}>
            <label htmlFor={type.value} className='form-label'>
              {type.value}
            </label>
            <input
              type={type.type}
              className='form-control'
              name={type.value}
              // id={id}
              value={type.fieldvalue}
              onChange={(e) => ChangeHandler(e, sIndex)}
            ></input>
            <p className='error_text'>{type.error}</p>
          </div>
        )
      })}

      <div className='w-100'>
        {remove ? null : (
          <button
            type='button'
            className='btn btn-primary '
            onClick={(e) => RemoveHandler(e)}
          >
            Remove Person
          </button>
        )}

        <button
          type='button'
          className='btn btn-primary '
          onClick={() => AddHandler()}
        >
          Add Person
        </button>
        <button
          type='button'
          className='btn btn-success '
          onClick={(e) => submitHandler(e)}
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default Form
