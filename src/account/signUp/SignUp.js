import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase';
import { FormWrapper, FormInput, SignInBtn, MainForm } from './style'


function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirect to the main page after successful sign-up
      navigate('/main');
    } catch (error) {
      console.error('Error signing up:', error.message);
      // Handle sign-up error, display error message, etc.
    }
  };

  return (
    <FormWrapper>
      <h2>Sign Up</h2>
      <MainForm>
        <label>Email:</label>
        <FormInput placeholder='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <FormInput placeholder='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <SignInBtn type="button" onClick={handleSignUp}>
          Sign Up
        </SignInBtn>
      </MainForm>
    </FormWrapper>
  );
}

export default SignUp;