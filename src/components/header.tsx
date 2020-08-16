import React from "react";
import { Nav } from "../types";
import styled from 'styled-components';
import logo from '../images/logo.png';
import banner from '../images/banner.jpg';

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
    background: red;
    background-image: url(${banner});
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
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1024px;
    margin: 0 auto;
`

const Navigation: React.FC<navProps> = ({ nav }) => {
    return <a href='#'>
        <ListItem>
            {nav.label}
        </ListItem>
    </a>
}

export const Header = () => {
    return <HeaderStyle>
        <NavigationStyle>
            <Logo src={logo} alt="Logo" />
            <List>
                {navItems.map(navItem => {
                    return <Navigation nav={navItem} />
                })}
            </List>
        </NavigationStyle>
        

    </HeaderStyle>
}