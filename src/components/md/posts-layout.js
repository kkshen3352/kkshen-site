import React from "react"
// import { graphql } from "graphql"
import { Provider } from "./provider"
// import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../layout"
// import Header from "../header"
// import Footer from "../footer"
import { Link } from "gatsby"
import { Box } from "@chakra-ui/react"
// import Renderer from "./renderer"
export default ({ children }) => (
  <>
    <Layout>
      <Provider>
        <main>{children}</main>
        {/* <Renderer>{children}
          </Renderer> */}
      </Provider>
      <Box marginLeft="2rem" textDecoration="underline">
        <Link to="/blog">← Back to posts</Link>
      </Box>
    </Layout>
  </>
)
