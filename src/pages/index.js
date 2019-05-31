import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default () => (
  <div>
    <Layout>
      <h2> Hello from Alex's world!</h2>
      <p>This is the home page</p>
      <p>
        Need to contact me? All my info is on the
        <Link to="/contact">contact page</Link>
      </p>
    </Layout>
  </div>
)
