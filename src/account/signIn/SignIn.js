import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase';
import { FormWrapper, FormInput, SignInBtn, MainForm} from './style'

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to the main page after successful login
      navigate('/main');
    } catch (error) {
      console.error('Error logging in:', error.message);
      // Handle login error, display error message, etc.
    }
  };

  return (
    <FormWrapper>
      <h2>Sign in</h2>
      <MainForm>
        <label>Email:</label>
        <FormInput placeholder='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <FormInput placeholder='Password'  type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <SignInBtn type="button" onClick={handleSignIn}>
          Log In
        </SignInBtn>
      </MainForm>
    </FormWrapper>
  );
}

export default SignIn;