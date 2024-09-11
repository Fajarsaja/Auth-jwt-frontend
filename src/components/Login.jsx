import React, {useState}from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const [msg, setMsg] = useState("")
  const navigate = useNavigate()

  const LoginUser = async(e) => {
    e.preventDefault()
    if ( !email || !password ) {
        alert('pastikan semua kolom sudah di isi...');
        return;
    }       
    try{
        await axios.post("http://localhost:5001/login",{
           email,
           password,
    });
    console.log("login berhasil");
    
    navigate("/dashboard");
}  catch(error){
        setMsg(error.response.data.msg);
        
        
    }
}
 

  
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
           <div className='column is-6'>
                <form onSubmit={LoginUser} className='box'>
                  <p className='has-text-centered'>{msg}</p>
                    <div className='field'>
                    <h1 className='title'>Login</h1>
                        <label className='label'>email or username</label>
                        <div className='controls'>
                            <input 
                              type="email"
                              className='input'
                              placeholder='email'
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}  />
                        </div>
                    </div> 
                    <div className='field'>
                        <label className='label'>password</label>
                        <div className='controls'>
                            <input  
                              type="password"
                              className='input'
                              placeholder='*******' 
                              value={password}
                              onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className='field'>
                        <button type='submit' className='button is-success is-fullwidth'>Login</button>
                    </div>
                </form>
           </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Login
