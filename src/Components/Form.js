import React from 'react'
import { useState } from 'react/cjs/react.development'

import '../Styles/Form.css'

function Form() {
  const [studentData, setStudentData] = useState([
    {
      type: 'text',
      value: 'Firstname',
      classname: 'w-40 mx-2 p-3',
      fieldvalue: 'Enter your firstname',
    },
    {
      type: 'text',
      value: 'Secondname',
      classname: 'w-30 mx-2 p-3',
      fieldvalue: 'Enter your Secondname',
    },
    {
      type: 'text',
      value: 'Lastname',
      classname: 'w-30 mx-2 p-3',
      fieldvalue: 'Enter your Lastname',
    },

    {
      type: 'email',
      value: 'Email',
      classname: 'w-100 mx-2 p-3',
      fieldvalue: 'Enter your email',
    },

    {
      type: 'text',
      value: 'Phonenumber',
      classname: 'w-50 mx-2 p-3',
      fieldvalue: 'Enter your phone number',
    },
    {
      type: 'text',
      value: 'Birthdate',
      classname: 'w-50 mx-2 p-3',
      fieldvalue: '',
    },
    {
      type: 'text',
      value: 'Ethnicity',
      classname: 'w-50 mx-2 p-3',
      fieldvalue: '',
    },

    {
      type: 'text',
      value: 'Gender',
      classname: 'w-30 mx-2 p-3',
      fieldvalue: '',
    },

    {
      type: 'text',
      value: 'StudentID',
      classname: 'w-100 mx-2 p-3',
      fieldvalue: 'ID',
    },

    {
      type: 'text',
      value: 'Semester',
      classname: 'w-100 mx-2 p-3 below_form',
      fieldvalue: '',
    },
  ])

  const ChangeHandler = (e, index) => {
    const values = [...studentData]
    values[index].fieldvalue = e.target.value
    setStudentData(values)
    console.log(studentData)
  }
  const AddHandler = () => {
    setStudentData([
      ...studentData,
      {
        type: 'text',
        value: 'Firstname',
        classname: 'w-40 mx-2 p-3',
        fieldvalue: 'Enter your firstname',
      },
      {
        type: 'text',
        value: 'Secondname',
        classname: 'w-30 mx-2 p-3',
        fieldvalue: 'Enter your Secondname',
      },
      {
        type: 'text',
        value: 'Lastname',
        classname: 'w-30 mx-2 p-3',
        fieldvalue: 'Enter your Lastname',
      },

      {
        type: 'email',
        value: 'Email',
        classname: 'w-100 mx-2 p-3',
        fieldvalue: 'Enter your email',
      },

      {
        type: 'text',
        value: 'Phonenumber',
        classname: 'w-50 mx-2 p-3',
        fieldvalue: 'Enter your phone number',
      },
      {
        type: 'text',
        value: 'Birthdate',
        classname: 'w-50 mx-2 p-3',
        fieldvalue: '',
      },
      {
        type: 'text',
        value: 'Ethnicity',
        classname: 'w-50 mx-2 p-3',
        fieldvalue: '',
      },

      {
        type: 'text',
        value: 'Gender',
        classname: 'w-30 mx-2 p-3',
        fieldvalue: '',
      },

      {
        type: 'text',
        value: 'StudentID',
        classname: 'w-100 mx-2 p-3',
        fieldvalue: 'ID',
      },

      {
        type: 'text',
        value: 'Semester',
        classname: 'w-100 mx-2 p-3 below_form',
        fieldvalue: '',
      },
    ])
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(studentData)
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
              id={type.value}
              value={type.fieldvalue}
              onChange={(e) => ChangeHandler(e, sIndex)}
            ></input>
          </div>
        )
      })}
      <div className='w-100'>
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
