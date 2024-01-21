
import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  margin: auto;
`;

export const FormContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
`;

export const SignUpContainer = styled(FormContainer)`
  left: 0;
  width: 50%;
  opacity: ${props => props.property ? '1' : '0'};
  z-index: ${props => props.property ? '5' : '1'};
  transform: ${props => props.property && 'translateX(100%)'}
`;

export const SignInContainer = styled(FormContainer)`
  left: 0;
  width: 50%;
  z-index: 1;
  transform: ${props => props.property && 'translateY(100%)'}

`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  transform: ${props => props.property && 'translateX(-100%)'}

`;

export const Overlay = styled.div`
  background: linear-gradient(to right, #ff4b2b, #ff416c) no-repeat 0 0 / cover;
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateY(0);
  transition: transform 0.6s ease-in-out;
  transform: ${props => props.property && 'translateX(50%)'}

`;

export const OverlayPanel = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  text-align: center;
  transform: translateY(0);
  transition: transform 0.6s ease-in-out;
`;

export const OverlayRight = styled(OverlayPanel)`
  right: 0;
  transform: ${props => props.property ? 'translateY(20%)' : 'translateY(0%)' }
`;

export const OverlayLeft = styled(OverlayPanel)`
    transform: ${props => props.property ? 'translateY(0%)' : 'translateY(-20%)' }
`;

export const InfoText = styled.p`
    font-size: 16px;
    line-height: 1.6;
    padding: 0 16px;
`

export const RegisterBtn = styled.button`
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background: #ff445c;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;
`

export const GhostBtn = styled(RegisterBtn)`
  margin-top: 24px;
  background: transparent;
  border-color: #fff;
`

