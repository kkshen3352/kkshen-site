import React from "react"
import { Box, Flex, Link } from "@chakra-ui/react"
import { ColorEnums } from "../lib/style-utils"
import { GitHubicon } from "../icon/githubicon"
import { Instagramicon } from "../icon/Instagramicon"

const { BLACK, WHITE } = ColorEnums

const Footer = ({ username }) => {
  return (
    <Flex
      background={BLACK}
      alignItems="center"
      justifyContent="center"
      margin="0 auto"
      color={WHITE}
      width="100%"
      height="100px"
    >
      <footer>
        <Flex alignItems="center" justifyContent="center" margin="5px" >
          <Box>
            <Link href={`https://github.com/${username}`} isExternal>
              <GitHubicon fontSize="40px"/>
            </Link>
          </Box>
          <Box marginLeft="15px">
            <Link href={`https://www.instagram.com/${username}`} isExternal>
              <Instagramicon fontSize="40px"/>
            </Link>
          </Box>
        </Flex>
        <Box>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">gatsby</a>
        </Box>
      </footer>
    </Flex>
  )
}
export default Footer
