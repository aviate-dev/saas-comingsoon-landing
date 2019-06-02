import { Link } from "gatsby"
import React from "react"
import logo from '../images/logo-dark.svg'
const Header = () => (
  <div>
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="container">
  <div class="navbar-brand">
    <a class="navbar-item">
      <img src={logo} width="150" height="40"/>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

    </div>

    <div class="navbar-end">
    <a class="navbar-item" href="#sec1">
        Contact
      </a>
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          
        </div>
      </div>
    </div>
  </div>
  </div>
</nav>

</div>
 
)


export default Header
