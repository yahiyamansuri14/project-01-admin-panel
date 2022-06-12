import {  TextField } from '@mui/material'
import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'


export default function Login() {
  
  const [isResetPassword, setIsResetPassword] = useState(false)
  const [loginId, setLoginId] = useState()
  const [password, setpassword] = useState()
  const [auth_type, setAuthType] = useState('branch')
  
  const navigate = useNavigate()
  const notify = () => toast("Invalid LoginID or Password")


  const handleSubmit = async () => {
    console.log(loginId)
    console.log(password)
    axios({
        method: 'POST',
        url: 'http://3.108.219.92:3800/v1/auth/login',
        data: {
            loginId: loginId,
            password: password,
            auth_type: 'branch'
        }
    }).then(async data => {
        console.log(data)
        if(data.data.status === "OK") {
            let user = data.data.data
            try {
                await localStorage.setItem('admin', JSON.stringify(user))
                await localStorage.setItem('token', JSON.stringify(user.accessToken))
            } catch(e) { }
            navigate('/home')
        } else {
            notify()
        }
    }).catch(error => {
        console.log(error)
    })
  }

  return (
      <div className="login-container">
          <ToastContainer />
        <div className='container mt-5 p-5'>
            <span className='display-5 d-block text-center font-weight-bolder text-primary'>MANDORIYA GROUP ADMIN</span>
            <div className='row justify-content-center mt-lg-4'>
                <TextField 
                    variant='outlined'
                    label='login id'
                    className='col-sm-12 col-md-6 col-xl-6 m-2'
                    onChange={(e) => setLoginId(e.target.value)}
                ></TextField>
                <TextField 
                    variant='outlined'
                    label='password'
                    className='col-sm-12 col-md-6 col-xl-6 m-2'
                    onChange={(e) => setpassword(e.target.value)}
                ></TextField>
                <div className="text-primary p-4 col-sm-12 col-md-6 col-xl-6">
                    <h5 className="text-primary text-center mb-0 cursor-pointer" 
                        onClick={() => handleSubmit()}
                    >
                        { isResetPassword ?
                         "Reset Password":
                         "Sign in to Mandoriya Group as Admin"
                        }
                    </h5>
                </div>
            </div>
        </div>
      </div>
  )
}
