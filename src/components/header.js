import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="inner-header">
      <div className="logo">
        <Link to="/">Adam Chrapek</Link>
      </div>
      <div className="navigation">
        <nav>
          <Link to="/omnie">o mnie</Link>
          <Link to="/wspolpraca">współpraca</Link>
          <Link to="/portfolio">portfolio</Link>
          <Link to="/cennik">cennik</Link>
          <Link to="/kontakt">kontakt</Link>
        </nav>
      </div>
    </div>
  </header>
)

export default Header
