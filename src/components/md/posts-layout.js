import React from "react"
import Layout from "../layout"
// import Header from "../header"
// import Footer from "../footer"
import { Link } from "gatsby"
import { Box } from "@chakra-ui/react"
import Provider from "./provider.js"
export default ({ children }) => (
  <>
    <Layout>
      <Provider>
        <main>
          <Box
            maxWidth="960px"
            padding="1.45rem 1.0875rem 1.45rem"
            alignItems="center"
            justifyContent="center"
            margin="0 auto"
          >
            {children}
            <Box marginLeft="2rem" textDecoration="underline">
              <Link to="/blog">← Back to posts</Link>
            </Box>
          </Box>
        </main>
      </Provider>
    </Layout>
  </>
)
