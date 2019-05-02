
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <nav id="nav-wrap">

      <a class="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
      <a class="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

      <ul id="nav" class="nav">
        <li class="current"><a class="smoothscroll" href="#home">Home</a></li>
        <li><a class="smoothscroll" href="#about">Sobre mi</a></li>
        <li><a class="smoothscroll" href="#resume">CV</a></li>
        <li><a class="smoothscroll" href="#portfolio">Trabajos</a></li>
        <li><a class="smoothscroll" href="#testimonials">Testimonios</a></li>
        <li><a class="smoothscroll" href="#contact">Contacto</a></li>
      </ul>

      </nav> 
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
