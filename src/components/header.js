import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <div>
    <h1>Alex's Awesome Gatsby Site</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  </div>
)
export default Header
