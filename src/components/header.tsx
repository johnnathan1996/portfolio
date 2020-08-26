import React,{useState, useRef, useEffect} from "react";
import { Nav } from "../types";
import styled, { keyframes } from 'styled-components';
import logo from '../images/logo.png';
import { Parallax } from 'react-parallax';
import '../global.css'
import { Link } from 'react-scroll'

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
    width: 100%;
    padding: 20px 0;
    position: fixed;
    z-index: 99;
    transition: background 0.2s, padding 0.2s;
`

const NavigationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1024px;
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
    text-align: center;
`

const Navigation: React.FC<navProps> = ({ nav }) => {
    return <Link
        activeClass="active"
        className="navigationlink"
        to={nav.label}
        spy={true}
        smooth={true}
        duration={500}
    >
        <ListItem>
            {nav.label}
        </ListItem>

    </Link>
}


export const Header = () => {
    const [navBackground, setNavBackground] = useState(false)

  const navRef = useRef()
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > (window.innerHeight - 100)
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, []);



    return <div id="Home">

        <Parallax
            bgImage={require("../images/banner.jpg")}
            bgImageAlt="Banner"
            strength={200}
        >
            <HeaderStyle>

                <NavigationStyle className={navBackground ? 'scrollactive' : ''}>
                    <NavigationContainer>
                    <Link
                        activeClass="active"
                        className="navigationlink"
                        to="Home"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <Logo src={logo} alt="Logo" />
                        </Link>
                        <List>
                            {navItems.map(navItem => {
                                return <Navigation nav={navItem} />
                            })}
                        </List>
                    </NavigationContainer>
                </NavigationStyle>

                <TitleName>
                    <Title className="titleName">john-nathan</Title>
                </TitleName>

                <ScrollDown />

            </HeaderStyle>
        </Parallax>

    </div>
}