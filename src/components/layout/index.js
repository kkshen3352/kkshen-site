/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Flex } from "@chakra-ui/react"
import Header from "../header"
import Footer from "../footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          username
        }
      }
    }
  `)

  return (
    <>
      <Box height="100%">
        <Header siteTitle={data.site.siteMetadata.title} />
        <Flex
          margin="0 auto"
          maxWidth="960px"
          padding="1.45rem 1.0875rem 1.45rem"
          flexDirection="column"
          minHeight="100%"
        >
          <Box paddingBottom="100px">
            <main>{children}</main>
          </Box>
        </Flex>
        <Footer username={data.site.siteMetadata.username} />
      </Box>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
