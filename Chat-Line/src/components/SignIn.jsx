import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import React from 'react'
import {auth} from '../firebase'
import GoogleButton from 'react-google-button'

const style = {
    wrapper: `flex justify`
}

const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}

const SignIn = () => {
  return (
    <div className={style.wrapper}>
        <GoogleButton onClick={googleSignIn}/>
    </div>
  )
}

export default SignIn