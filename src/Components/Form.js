import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development'

import '../Styles/Form.css'

function Form() {
  // state for maintaning the remove functionality
  const [remove, setRemove] = useState(true)
  // state for maintaning errors for each fields
  const [submit, setSubmit] = useState(false)
  // state for checking empty fields
  const [validate, setValidate] = useState(false)
  // for pushing ids into the datas
  const [id, setId] = useState([1])
  //  the json state for initial rendering of page
  const [studentData, setStudentData] = useState([
    {
      id: 0,
      type: 'text',
      value: 'Firstname',
      classname: 'w-50 mx-2 p-3',
      fieldvalue: 'Enter your firstname',
      infield: '',
      error: '',
    },
    {
      id: 0,
      type: 'text',
      value: 'Secondname',
      classname: 'w-30 mx-2 p-3',
      fieldvalue: 'Enter your Secondname',
      infield: '',
      error: '',
    },
    {
      id: 0,
      type: 'text',
      value: 'Lastname',
      classname: 'w-30 mx-2 p-3',
      fieldvalue: 'Enter your Lastname',
      infield: '',
      error: '',
    },

    {
      id: 0,
      type: 'email',
      value: 'Email',
      classname: 'w-100 mx-2 p-3',
      fieldvalue: 'Enter your email',
      infield: '',
      error: '',
    },

    {
      id: 0,
      type: 'text',
      value: 'Phonenumber',
      classname: 'w-50 mx-2 p-3',
      fieldvalue: 'Enter your phone number',
      infield: '',
      error: '',
    },
    {
      id: 0,
      type: 'date',
      value: 'Birthdate:',
      classname: 'w-50 mx-4 ',
      class: 'ml-3 w-25',
      fieldvalue: '',
      infield: '',

      error: '',
    },
    {
      id: 0,
      value: 'Ethnicity',
      list: 'mylist',
      infield: '',
      classname: 'ml-3',
      value1: 'Indian',
      value2: 'NRI',
      value3: 'Foreigner',
      fieldvalue: '',
      error: '',
    },
    {
      id: 0,
      value: 'Gender',
      list: 'mylist1',
      infield: '',
      classname: 'ml-3',
      value1: 'Male',
      value2: 'Female',
      error: '',
    },
    {
      id: 0,
      type: 'text',
      value: 'StudentID',
      classname: 'w-100 mx-2 p-3',
      fieldvalue: 'ID',
      infield: '',
      error: '',
    },

    {
      id: 0,
      type: 'text',
      value: 'Semester',
      classname: 'w-100 mx-2 p-3 below_form',
      fieldvalue: '',
      infield: '',
      error: '',
    },
  ])
  // change state handler
  const ChangeHandler = (e, index) => {
    const values = [...studentData]
    values[index].infield = e.target.value

    console.log(
      studentData.map((value) => {
        return value.infield
      })
    )

    studentData.map((value) => {
      if (value.infield === '') {
        setValidate(false)
      } else {
        setValidate(true)
      }
      return validate
    })

    setStudentData(values)
    //validating the input fields
    if (e.target.value === '') {
      const values = [...studentData]
      values[index].error = 'enter a valid answer'
      setStudentData(values)
    } else if (e.target.name === 'Email') {
      var emailCheck =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
      console.log(emailCheck.test(`${e.target.value}`))
      if (emailCheck.test(`${e.target.value}`)) {
        const values = [...studentData]
        values[index].error = ''
        setStudentData(values)
        setSubmit(true)
      } else {
        const values = [...studentData]
        values[index].error = 'enter a valid email'
        setStudentData(values)
        setSubmit(false)
      }
    } else {
      const values = [...studentData]
      values[index].error = ''
      setStudentData(values)
    }
  }
  // setting state for the remove button display
  useEffect(() => {
    if (studentData.length > 10) {
      setRemove(false)
    } else {
      setRemove(true)
    }
  }, [studentData])

  //for adding additional forms

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
        infield: '',
      },
      {
        id: id.slice(-1)[0],
        type: 'text',
        value: 'Secondname',
        classname: 'w-30 mx-2 p-3',
        fieldvalue: 'Enter your Secondname',
        infield: '',
      },
      {
        id: id.slice(-1)[0],
        type: 'text',
        value: 'Lastname',
        classname: 'w-30 mx-2 p-3',
        fieldvalue: 'Enter your Lastname',
        infield: '',
      },

      {
        id: id.slice(-1)[0],
        type: 'email',
        value: 'Email',
        classname: 'w-100 mx-2 p-3',
        fieldvalue: 'Enter your email',
        infield: '',
      },

      {
        id: id.slice(-1)[0],
        type: 'text',
        value: 'Phonenumber',
        classname: 'w-50 mx-2 p-3',
        fieldvalue: 'Enter your phone number',
        infield: '',
      },
      {
        id: id.slice(-1)[0],
        type: 'date',
        value: 'Birthdate:',
        classname: 'w-50 mx-2',
        class: 'ml-3 w-25',
        fieldvalue: '',
        infield: '',

        error: '',
      },

      {
        id: id.slice(-1)[0],
        value: 'Ethnicity',
        list: 'mylist',
        infield: '',
        classname: 'ml-3',
        value1: 'Indian',
        value2: 'NRI',
        value3: 'Foreigner',
        fieldvalue: '',
        error: '',
      },
      {
        id: id.slice(-1)[0],
        value: 'Gender',
        list: 'mylist1',
        infield: '',
        classname: 'ml-3',
        value1: 'Male',
        value2: 'Female',
        error: '',
      },
      {
        id: id.slice(-1)[0],
        type: 'text',
        value: 'StudentID',
        classname: 'w-100 mx-2 p-3',
        infield: '',
        fieldvalue: 'ID',
      },

      {
        id: id.slice(-1)[0],
        type: 'text',
        value: 'Semester',
        classname: 'w-100 mx-2 p-3 below_form',
        infield: '',
        fieldvalue: '',
      },
    ])
  }

  // submit handler
  console.log(studentData)
  const submitHandler = async (e) => {
    e.preventDefault()
    console.log(validate, submit)
    if (submit && validate) {
      var myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')
      var raw = JSON.stringify(
        studentData.map((studentData) => {
          return {
            value: studentData.value,
            fieldvalue: studentData.infield,
          }
        })
      )

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      }

      fetch('http://localhost:4000/studentsdata', requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log('error', error))

      //setting form to the initial state
      setStudentData([
        {
          id: 0,
          type: 'text',
          value: 'Firstname',
          classname: 'w-50 mx-2 p-3',
          fieldvalue: 'Enter your firstname',
          infield: '',
          error: '',
        },
        {
          id: 0,
          type: 'text',
          value: 'Secondname',
          classname: 'w-30 mx-2 p-3',
          fieldvalue: 'Enter your Secondname',
          infield: '',
          error: '',
        },
        {
          id: 0,
          type: 'text',
          value: 'Lastname',
          classname: 'w-30 mx-2 p-3',
          fieldvalue: 'Enter your Lastname',
          infield: '',
          error: '',
        },

        {
          id: 0,
          type: 'email',
          value: 'Email',
          classname: 'w-100 mx-2 p-3',
          fieldvalue: 'Enter your email',
          infield: '',
          error: '',
        },

        {
          id: 0,
          type: 'text',
          value: 'Phonenumber',
          classname: 'w-50 mx-2 p-3',
          fieldvalue: 'Enter your phone number',
          infield: '',
          error: '',
        },
        {
          id: 0,
          type: 'date',
          value: 'Birthdate:',
          classname: 'w-50 mx-4 ',
          class: 'ml-3 w-25',
          fieldvalue: '',
          infield: '',

          error: '',
        },
        {
          id: 0,
          value: 'Ethnicity',
          list: 'mylist',
          infield: '',
          classname: 'ml-3',
          value1: 'Indian',
          value2: 'NRI',
          value3: 'Foreigner',
          fieldvalue: '',
          error: '',
        },
        {
          id: 0,
          value: 'Gender',
          list: 'mylist1',
          infield: '',
          classname: 'ml-3',
          value1: 'Male',
          value2: 'Female',
          error: '',
        },
        {
          id: 0,
          type: 'text',
          value: 'StudentID',
          classname: 'w-100 mx-2 p-3',
          fieldvalue: 'ID',
          infield: '',
          error: '',
        },

        {
          id: 0,
          type: 'text',
          value: 'Semester',
          classname: 'w-100 mx-2 p-3 below_form',
          fieldvalue: '',
          infield: '',
          error: '',
        },
      ])
      window.location.reload(false)
    }
  }
  //remove functionality
  const RemoveHandler = (e) => {
    const values1 = [...studentData]
    if (values1.length > 10) {
      values1.splice(values1.length - 10, 10)
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
              list={type.list}
              id={type.id}
              type={type.type}
              className={` form-control`}
              name={type.value}
              placeholder={type.fieldvalue}
              selectBoxOptions={type.selectBoxOptions}
              onChange={(e) => ChangeHandler(e, sIndex)}
            ></input>
            <datalist id={type.list}>
              <option value={type.value1} />
              <option value={type.value2} />
              <option value={type.value3} />
            </datalist>
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
        {validate ? null : (
          <div
            className='alert alert-danger w-50 p-1 mx-auto d-flex  justify-content-center align-items-center'
            role='alert'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-exclamation-triangle'
              viewBox='0 0 16 16'
            >
              <path d='M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z' />
              <path d='M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z' />
            </svg>

            <div className='ml-2'>Please full all the fields in the form</div>
          </div>
        )}

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
