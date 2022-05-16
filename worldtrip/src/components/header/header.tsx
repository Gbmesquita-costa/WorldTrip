import { Box, Flex, Img } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ChildrenWithProps {
    children?: ReactNode
}

export function Header({ children } : ChildrenWithProps) {
    return (
        <Flex
            width="100%"
            maxWidth="1440px"
            height={["200px", "100px"]}
            margin="0 auto"
            justify="center"
            alignItems="center"
        >  
            <Box marginRight="30px" _hover={{ color: "dodgerblue", transition: "0.4s" }}>
                {children}
            </Box>
            <Img src="/trip/WorldTrip.svg" w={["250px", ""]}/>
        </Flex>
    )
}