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
  console.log(
    student.map((student) => {
      return student.type[0]
    })
  )
  return (
    <div>
      {student.map((student) => {
        const { name, type } = student
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
