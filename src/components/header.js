import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import "../styles/styles.scss"

const HeaderComponent = styled.header`
  height: 80px;
  width: 100%;
  position: absolute;
  top: 0px;
  z-index: 10;
`
const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`
const HeaderLogo = styled.div`
  a {
    font-weight: 700;
    text-decoration: none;
    letter-spacing: 1.5px;
    color: black;
    font-size: 2.25rem;
  }
`

const HeaderNavigation = styled.div``
const HeaderNavigationNav = styled.nav`
  a {
    margin: 0 20px;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1.25px;
    color: black;
    text-decoration: none;
    &:last-child {
      margin-right: 0;
    }
  }
`
const Header = () => (
  <HeaderComponent>
    <HeaderContainer>
      <HeaderLogo>
        <Link to="/">Adam Chrapek</Link>
      </HeaderLogo>
      <HeaderNavigation>
        <HeaderNavigationNav>
          <Link to="/about">O mnie</Link>
          <Link to="/portoflio">Portfolio</Link>
          <Link to="/contact">Kontakt</Link>
        </HeaderNavigationNav>
      </HeaderNavigation>
    </HeaderContainer>
  </HeaderComponent>
)

export default Header
