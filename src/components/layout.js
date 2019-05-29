import React from "react"
import Header from "./header"
import Footer from "./footer"
const Layout = props => {
  return (
    <div>
      <Header>This is the home page</Header>
      {props.children}
      <Footer />
    </div>
  )
}
export default Layout
