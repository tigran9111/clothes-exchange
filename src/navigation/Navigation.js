import React from 'react';
import { Link } from 'react-router-dom';
import{ NavigationContainer, NavigationLogo, NavigationLinksContainer,NavigationLink, VideoWrapper } from './style'

function Navigation() {
  return (
    <NavigationContainer>
        <NavigationLogo>SWAPIT</NavigationLogo>
        <VideoWrapper>
          <video  autoPlay loop muted>
            <source src='https://assets.codepen.io/3364143/7btrrd.mp4' />
          </video>
        </VideoWrapper>
        <NavigationLinksContainer>
          <NavigationLink>
            <Link style={{color: 'white', textDecoration: 'none'}} to="/main">Home</Link>
          </NavigationLink>
          <NavigationLink>
            <Link style={{color: 'white', textDecoration: 'none'}} to="/profile">Profile</Link>
          </NavigationLink>
        </NavigationLinksContainer>
    </NavigationContainer>
  );
}

export default Navigation;