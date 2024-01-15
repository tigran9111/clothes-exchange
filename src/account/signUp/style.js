import styled from 'styled-components';

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`;

export const MainForm =styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;
`

export const FormInput = styled.input`
    background: #eee;
    border: none;
    padding: 12px 8px;
    width: 100%;
`

export const SignInBtn = styled.button`
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
    margin-top: 24px;
    text-align: center;
    cursor: pointer;
`