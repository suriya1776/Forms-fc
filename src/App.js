import './App.css'

import LoginPage from './Pages/LoginPage'
import Database from './Pages/Database'
import Form from './Components/Form'

function App() {
  // window.document.location.href = 'http://localhost:3000'
  return (
    <div>
      {window.document.location.href === 'http://localhost:3000/' ? (
        <LoginPage />
      ) : null}
      {window.document.location.href === 'http://localhost:3000/dataentry' ? (
        <Form />
      ) : null}
      {window.document.location.href === 'http://localhost:3000/database' ? (
        <Database />
      ) : null}
    </div>
  )
}

export default App
