import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => (
  <nav>
    <h1>Alex's Awesome Gatsby Site</h1>
    <ul>
      <li>
        <Link className={headerStyles.link} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className={headerStyles.link} to="/about">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  </nav>
)
export default Header
