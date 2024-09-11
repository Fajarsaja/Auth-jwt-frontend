import React, {useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [name, setName]= useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [confPassword, setConfPassword]= useState("")
    const [msg, setMsg] = useState("")

    const navigate = useNavigate()

    const RegisterUser = async(e) => {
        e.preventDefault()
        if (!name || !email || !password || !confPassword) {
            alert('pastikan semua kolom sudah di isi...');
            return;
        }       
        try{
            await axios.post("http://localhost:5001/users",{
               name,
               email,
               password,
               confPassword
        });
        console.log("register berhasil");
        
        navigate("/");
    }  catch(error){
            setMsg(error.response.data.msg);
            
            
        }
    }
    


  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
           <div className="column is-6">
                <form onSubmit={RegisterUser} className='box'>
                 <p className='has-text-centered'>{msg}</p>
                    <div className='field '>
                    <h1 className='title '>Sign In</h1>
                        <label className='label'>name</label>
                        <div className='controls'>
                            <input
                             type="text"
                              className='input'
                               placeholder='username'
                                value={name}
                                 onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div> 
                    <div className='field '>
                        <label className='label'>email</label>
                        <div className='controls'>
                            <input
                             type="email"
                              className='input'
                               placeholder='email'
                               value={email}
                               onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div> 
                    <div className='field '>
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
                    <div className='field '>
                        <label className='label'>confirm password</label>
                        <div className='controls'>
                            <input
                             type="password"
                              className='input'
                               placeholder='*******'
                                value={confPassword}
                                onChange={(e) => setConfPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className='field mt-5'>
                        <button type='submit' className='button is-success is-fullwidth'>Register</button>
                    </div>
                </form>
           </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Register
