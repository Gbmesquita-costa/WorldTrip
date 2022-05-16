import { Box, Flex, Text } from "@chakra-ui/react"

export function Content() {
    return (
        <Box
            display="flex"
            flexDirection={{ base: "column", md: "column", lg: "row" }}
            alignItems="center"
            pl={{ base: "160px", md: '270px', lg: "10px" }}
        >
            <Flex
                width={["1100px", "100%"]}
                maxWidth={["1100px", "1120px"]}
                margin="91px auto"
                direction={{ base: "column", md: "column", lg: "row" }}
            >
                <Box
                    width={{ base: "1200", md: "900px", lg: "600" }}
                    maxWidth={{ base: "1200px", md: "900px", lg: "600px" }}
                    fontSize={{ base: "60px", md: "48px", lg: "24px" }}
                >
                    <Text>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                    </Text>

                </Box>
                <Flex
                    width={{ base: "100%", lg: "100%" }}
                    maxWidth="1100px"
                    height="200px"
                    alignItems="center"
                    justify="center"
                    fontSize={{ base: "110px", md: "90px", lg: "54px" }}
                    fontWeight="600"
                    textAlign="center"
                    mt={["50px", ""]}
                    pl={{ base: "160px", md: '270px', lg: "10px" }}
                >
                    <Box
                        mr={["90px", "40px"]}
                        ml="40px"
                    >
                        <Text color="#FFBA08">50</Text>
                        <Text fontSize={{ base: "50px", md: "44px", lg: "24px" }}>Países</Text>
                    </Box>
                    <Box
                        mr="40px"
                    >
                        <Text color="#FFBA08">60</Text>
                        <Text fontSize={{ base: "50px", md: "44px", lg: "24px" }} mr="20px">Línguas</Text>
                    </Box>
                    <Box>
                        <Text color="#FFBA08">27</Text>
                        <Text fontSize={{ base: "50px", md: "44px", lg: "24px" }} width={{ base: "", md: "279px", lg: "" }}>Cidades + 100</Text>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}