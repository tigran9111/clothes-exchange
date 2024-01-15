import React, { useState } from 'react';
import SignUp from './signUp/SignUp'
import SignIn from './signIn/SignIn';
import { Container, OverlayContainer, Overlay, SignUpContainer, SignInContainer, OverlayRight, OverlayLeft, GhostBtn, InfoText } from './style'

function AccountPage() {
    const [isRightPanelActive, setRightPanelActive] = useState(false);

    const handleSignUpClick = () => {
        setRightPanelActive(true);
      };
    
      const handleSignInClick = () => {
        setRightPanelActive(false);
      };


      console.log(isRightPanelActive)
  return (
    <Container 
    >
        <SignUpContainer property={isRightPanelActive}>
            <SignUp />
        </SignUpContainer>
        <SignInContainer property={isRightPanelActive}>
            <SignIn />
        </SignInContainer>
        <OverlayContainer property={isRightPanelActive}>
            <Overlay property={isRightPanelActive}>
                <OverlayLeft property={isRightPanelActive}>
                    <h1>Hello, Friend!</h1>
                    <InfoText>Enter your personal details and start journey with us</InfoText>
                    <GhostBtn onClick={handleSignInClick}>Sign Up</GhostBtn>
                </OverlayLeft>
                <OverlayRight property={isRightPanelActive} >
      
                    <h1>Welcome Back!</h1>
                    <InfoText>To keep connected with us please login with your personal info</InfoText>
                    <GhostBtn onClick={handleSignUpClick}>Sign In</GhostBtn>
                </OverlayRight>
            </Overlay>
        </OverlayContainer>
    </Container>
  );
}

export default AccountPage

