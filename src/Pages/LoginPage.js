import React from 'react'
import '../Styles/Form.css'

function LoginPage() {
  return (
    <div className='row g-3'>
      <div className='w-100'>
        <h1 className='form_heading'>LOGIN PAGE</h1>
      </div>
      <div className='w-100'>
        <a href='/database'>
          <button type='button' className='btn btn-success '>
            Database
          </button>
        </a>
        <a href='/dataentry'>
          <button type='button' className='btn btn-primary '>
            Dataentry
          </button>
        </a>
      </div>
    </div>
  )
}

export default LoginPage
