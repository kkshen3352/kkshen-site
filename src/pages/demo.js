import React from "react"
import { Link, Box, Flex } from "@chakra-ui/react"
import Layout from "../components/layout"
import { SizeEnums } from "../lib/style-utils"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import App from "../components/redux-calc/index"

function SecondPageQuert({
  title = "React-Redux 實現計算機",
  date = "2021-03-31",
  main = [
    { text: "紀錄計算過程", ation: "顯示計算過程" },
    { text: "四則運算", ation: "四則運算" },
    { text: "平方", ation: "平方計算" },
    { text: "BACK", ation: "按鍵退格" },
    { text: "CLEAR", ation: "清除計算" },
    { text: "等於『=』", ation: "四捨五入後的近似值.取小數點四位數" },
    {
      text: "NEW!Middleware",
      ation:
        (
        <Box>當每一次按按鈕(action)被 dispatch 的時候，會計算出新的 state 並儲存下來。state 無法自己改變，它只能因應特定 action 的結果而改變。F12開發者模式可觀看</Box>),
    },
    {
      text: "github",
      ation: (
        <Link
          href={`https://github.com/kkshen3352/kkshen-site/tree/develop/src/components/redux-calc`}
          style={{ color: "teal" }}
          isExternal
        >
          點我觀看程式碼
          <ExternalLinkIcon mx="2px" />
        </Link>
      ),
    },
  ],
}) {
  const { SMALL, LARGE, EXTRALARGE, XXL } = SizeEnums

  return (
    <Layout>
      <Flex display={{ base: "column", lg: "flex" }}>
        <Flex flexDirection="column" alignItems="center">
          <Box as="h1" fontSize="32px" textShadow="#FC0 1px 0 10px">
            Redux Calculator
          </Box>
          <App />
        </Flex>
        <Box
          maxW={XXL}
          borderWidth="1px"
          borderRadius={LARGE}
          overflow="hidden"
          margin="5"
        >
          <Box padding="2rem">
            <Box
              as="h1"
              fontWeight="semibold"
              fontSize={{ base: `${LARGE}`, lg: `${EXTRALARGE}` }}
            >
              {title}
            </Box>
            <Box
              margin="5px"
              marginTop="1"
              fontSize={{ base: `${SMALL}`, lg: `${LARGE}` }}
            >
              {main.map(({ text, ation }, i) => (
                <Box key={i}>
                  <Flex margin="5px" paddingTop="5px">
                    <Box fontWeight="semibold" marginRight="15px">
                      ● {text}
                    </Box>
                    <Box>{ation}</Box>
                  </Flex>
                </Box>
              ))}
            </Box>
            <Box
              display="flex"
              margintop="10"
              alignItems="center"
              position="relative"
            >
              <Box
                as="span"
                fontSize="sm"
                position="absolute"
                paddingTop="40px"
                buttom="-10px"
                right="0"
              >
                Latest Updated:
                {date}
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Layout>
  )
}

export default SecondPageQuert
