import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
import './login-and-register.styles.scss'

const LoginAndRegisterPage = () => (
  <div className='login-and-register'>
    <SignIn />
    <SignUp />
  </div>
)

export default LoginAndRegisterPage;