import React from "react";
import { Nav } from "../types";
import styled, { keyframes } from 'styled-components';
import logo from '../images/logo.png';
import { Parallax } from 'react-parallax';
import '../global.css'


interface navProps {
    nav: Nav
}

const navItems: Array<Nav> = [
    {
        id: 1,
        label: "Home"
    },
    {
        id: 2,
        label: "About"
    },
    {
        id: 3,
        label: "Works"
    },
    {
        id: 4,
        label: "Contact"
    },
]

const HeaderStyle = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const List = styled.ul`
    margin: 0;
    display: flex;
    justify-content: flex-end;
`;

const ListItem = styled.li`
    padding: 0 10px;
`

const Logo = styled.img`
    width: 110px;
`
const NavigationStyle = styled.div`
    position: fixed;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1024px;
    margin: 0 auto;
`

const scroll = keyframes`
  20%, 100% {
    opacity: 0;
    transform: translateY(-30px);
  }
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
`

const ScrollDown = styled.div`
width: 30px;
height: 50px;
bottom: 3%;
margin-left: -15px;
margin-top: -25px;
box-shadow: inset 0 0 0 1px #fff;
border-radius: 25px;
position: absolute;
left: 50%;

:before {
    content: '';
  width: 6px;
  height: 6px;
  background: #fff;
  margin-left: -3px;
  bottom: 8px;
  border-radius: 4px;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-name: ${scroll};
  position: absolute;
  left: 50%;
}
`

const TitleName = styled.div`
    flex-grow: 1;
    display: inline-flex;
    align-items: center;
`

const Title = styled.h1`
    color: white;
    font-size: 100px;
    text-transform: capitalize;
`

const Navigation: React.FC<navProps> = ({ nav }) => {
    return <a href='#'>
        <ListItem>
            {nav.label}
        </ListItem>
    </a>
}

export const Header = () => {
    return <>

        <Parallax
            bgImage={require("../images/banner.jpg")}
            bgImageAlt="Banner"
            strength={200}
        >
            <HeaderStyle>

                <NavigationStyle>
                    <Logo src={logo} alt="Logo" />
                    <List>
                        {navItems.map(navItem => {
                            return <Navigation nav={navItem} />
                        })}
                    </List>
                </NavigationStyle>

                <TitleName>
                    <Title className="titleName">john-nathan</Title>
                </TitleName>

                <ScrollDown />

            </HeaderStyle>
        </Parallax>


    </>
}