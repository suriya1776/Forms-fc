import React from 'react'
import '../Styles/Form.css'

function Form() {
  const formdata = {
    student: [
      {
        type: [
          { type1: 'text', value: 'Firstname' },
          {
            type1: 'password',
            value: 'email',
          },
        ],
      },
    ],
  }

  const { student } = formdata

  return (
    <div>
      {student.map((student) => {
        const { type } = student
        return type.map((type) => {
          return (
            <div>
              <label for='formGroupExampleInput' class='form-label'>
                {type.value}
              </label>
              <input
                type={type.type1}
                class='form-control'
                id='formGroupExampleInput'
              ></input>
            </div>
          )
        })
      })}
    </div>
  )
}

export default Form
