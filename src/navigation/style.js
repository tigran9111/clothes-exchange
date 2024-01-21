
import styled from 'styled-components';

export const NavigationContainer = styled.nav`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    height: 80px;
    padding: 0 20px;
    background: linear-gradient(to right, #ff4b2b6b, #ff416c) no-repeat 0 0/cover
`;


export const VideoWrapper = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
`

export const NavigationLogo = styled.span`
    font-size: 42px;
    color: white;
`;

export const NavigationLinksContainer = styled.div`
    display: flex;
    gap: 8px;
    justify-content: end;
`

export const NavigationLink = styled.div`
    color: white;
`