import React from 'react'
import { useState } from 'react/cjs/react.development'
import '../Styles/Form.css'

function Form() {
  const [studentData, setstudentData] = useState({})

  const formdata = {
    student: {
      type: [
        {
          type: 'text',
          value: 'Firstname',
          classname: 'w-40 mx-2 p-3',
          fieldvalue: '',
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
          classname: 'w-50 mx-2 p-3',
          fieldvalue: 'ID',
        },

        {
          type: 'text',
          value: 'Semester',
          classname: 'w-30 mx-2 p-3',
          fieldvalue: '',
        },
      ],
    },
  }

  const ChangeHandler = (e, index, id) => {
    let Initial_value = student.type
    setstudentData(Initial_value)
    if (id === 'Firstname') {
      setstudentData((student.type[index].fieldvalue = e.target.value))
    }
  }

  const { student } = formdata

  return (
    <div className='row g-3'>
      <div className='w-100'>
        <h1 className='form_heading'>STUDENT DATA</h1>
      </div>
      {student.type.map((type, sIndex) => {
        return (
          <div className={type.classname}>
            <label htmlFor={type.value} className='form-label'>
              {type.value}
            </label>
            <input
              type={type.type}
              className='form-control'
              id={type.value}
              value={studentData.type[sIndex].fieldvalue}
              onChange={(e, id) => ChangeHandler(e, sIndex, id)}
            ></input>
          </div>
        )
      })}

      <div className='w-100'>
        <button type='button' className='btn btn-primary '>
          Add Person
        </button>
        <button type='button' className='btn btn-success'>
          Submit
        </button>
      </div>
    </div>
  )
}

export default Form
