import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [register,setRegister] = useState('')
  
  const registerUser (){
    // git init 
  }

  return (
    <>
      <div>
        <h1>Register</h1>
        <form onSubmit={registerUser}>
        <label htmlFor="">name</label>
          <input 
          value={name}
          onChange={(e)=>setName(e.target.value)}
          type="text" 
          placeholder='name' /> 
          <br />
          <label htmlFor="">email</label>
          <input 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          type="text"
          placeholder='email' /> 
          <br />
          <label htmlFor="">password</label>
          <input 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          type="password"
          placeholder='password' />
          <button 
          onClick={(e)=>setRegister(e.target.value)}
          type='submit' 
          value={register}
          >Submit</button>
        </form>
        <div>
          <p>Name:{name}</p>
          <p>Email:{email}</p>
          <p>Password:{password}</p>
          <p>Register:{register}</p>
        </div>
      </div>
    </>
  )
}

export default App
