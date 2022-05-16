import { Box, Flex, Text, Img } from "@chakra-ui/react"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head";
import Link from "next/link";
import { Content } from "../../components/content/content";
import { Header } from "../../components/header/header";
import { api } from "../../services/api"
import { revalidate } from "../../services/revalidate"

interface ImagesWithProps {
    _id: string;
    title: string;
    continente: string;
    url: string;
    images: [{
        slug: string;
        url: string;
        image: string;
        cidade: string;
        pais: string;
    }]
}

interface Context {
    contexto: ImagesWithProps
}

export default function Cities({ contexto }: Context) {
    return (
        <Box>
            <Head>
                <title>{contexto.title}</title>
            </Head>
            <Flex
                alignItems="center"
            >
                <Header>
                    <Link href="/">
                        <a style={{ width: "32px", height: "32px", fontSize: "40px", marginLeft:"20px" }}>
                            {"<"}
                        </a>
                    </Link>
                </Header>
            </Flex>
            <Box
                display="flex"
                width="1440px"
                maxWidth="1440px"
                margin="0 auto"
                height={["750px", "500px"]}
                bgImage={`url(${contexto.url}})`}
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPosition="center"
                alignItems="flex-end"
            >
                <Text
                    color="#F5F8FA"
                    fontSize={["100px", "48px"]}
                    fontWeight="600"
                    marginLeft="140px"
                    marginBottom="59px"
                >
                    {contexto.title}
                </Text>

            </Box>

            <Content/>
            
            <Box
                width={["1860px", "1300px", "100%"]}
                pl={{ base: "300px", md: "300px", lg: "20px"}}

                maxWidth={{base: "1160px", md: "1200px", lg: "1160px"}}
                margin="0 auto"
                height="700px"
            >
                <Text
                    fontSize={{base: "70px", md: "100px", lg: "36px"}}
                    fontWeight="500"
                    width={{base: "", md: "358px", lg: ""}}
                >
                    Cidades + 100
                </Text>

                <Flex
                    marginTop="50px"
                    flexWrap="wrap"
                    pb="80px"
                >

                    {
                        contexto.images.map((images) => (
                            <Box
                                height={{base: "1100px", md: "600px", lg: "279px"}}
                                width={{base: "1700px", md: "510px", lg: "256px"}}
                                mr="20px"
                                mt={["90px", "10px"]}
                                borderRadius="4px"
                                border="solid 2px #FFBA08"
                                key={images.url}
                            >
                                <Box
                                    width={{base: "100%", md: "100%", lg:"100%"}}
                                    height={{base: "650px", md: "250px", lg: "150px"}}
                                >
                                    <Img src={images.url} width="100%" height="100%" borderRadius="4px" />
                                </Box>
                                <Flex>
                                    <Box w={{base: "600px", md: "380px", lg: "180px"}}>
                                        <Text
                                            fontSize={{base: "80px", md: "40px", lg: "20px"}}
                                            fontWeight="600"
                                            lineHeight="25px"
                                            color="#47585B"
                                            marginTop={{base: "110px", md: "80px", lg: "18px"}}
                                            ml="40px"
                                        >
                                            {images.cidade}
                                        </Text>
                                        <Text
                                            fontSize={{base: "60px", md: "40px", lg: "16px"}}
                                            fontWeight="500"
                                            lineHeight="26px"
                                            color="#999999"
                                            ml="40px"
                                            marginTop={{base: "110px", md: "40px", lg: "12px"}}
                                        >
                                            {images.pais}
                                        </Text>
                                    </Box>
                                    <Flex
                                        ml={["20px", "10px"]}
                                        mt={{base: "115px", md: "90px", lg: "38px"}}
                                    >
                                        <Img src={images.image} w={{base: "100px", md: "80px", lg: "30px"}} h={{base: "100px", md: "80px", lg: "30px"}} />
                                    </Flex>
                                </Flex>
                            </Box>
                        ))
                    }
                </Flex>
            </Box>
        </Box>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: "blocking"
    }
}

export const getStaticProps: GetStaticProps = async context => {
    const { slug } = context.params

    const props = await api({ method: "get", url: `/users/${slug}`, withCredentials: true })
    const contexto = props.data

    return {
        props: {
            contexto
        },
        revalidate: revalidate
    }
}