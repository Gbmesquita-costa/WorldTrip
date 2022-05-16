import { GetStaticProps } from "next"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, Autoplay, EffectFade } from "swiper"
import { revalidate } from "../services/revalidate"
import { api } from "../services/api"

import Link from "next/link"

import { Box, Flex, Img, Text } from "@chakra-ui/react"
import { Header } from "../components/header/header"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade'
import Head from "next/head"

interface ImagesWithProps {
  _id: string;
  title: string;
  continente: string;
  url: string;
}

interface Context {
  context: ImagesWithProps[]
}

export default function Home({ context }: Context) {
  return (
    <Box>
      <Head>
        <title>
          Dashboard
        </title>
      </Head>
      <Header />
      <Box
        width={["100%", "100%"]}
        maxWidth="1920px"
        margin="0 auto"
      >
        <Img src="trip/Fly.svg"
          width="100%"
          margin="0 auto"
        />

      </Box>
      <Img src="trip/Travel types.svg"
        width="100%"
        maxWidth="1160"
        margin="35px auto"
        height="144px"
      />
      <Box
        textAlign="center"
        width="100%"
        maxWidth="839px"
        margin="90px auto"
      >
        <Text
          fontSize="36px"
          fontWeight="500"
        >
          Vamos nessa?
        </Text>

        <Text
          fontSize="36px"
          fontWeight="500"
        >
          Então escolha o seu continente
        </Text>
      </Box>
      <Box
        margin="52px auto"
      >
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, EffectFade, Autoplay]}
          navigation
          slidesPerView={1}
          pagination
          effect="fade"
          scrollbar
          autoplay={{
            delay: 1500
          }}
          style={{ height: "450px", width: "100%", maxWidth: "1240px" }}
        >
          {
            context.map((elemento) => {
              return (
                <SwiperSlide key={elemento._id}>
                  <Flex
                    bgImage={`url(${elemento.url}})`}
                    width="100%"
                    h="100%"
                    bgSize="cover"
                    bgRepeat="no-repeat"
                    bgPosition="center"
                    align="center"
                    justify="center"
                  >
                    <Link href={`/slug/${elemento._id}`} >
                      <a>
                        <Text
                          textAlign="center"
                          fontSize="48px"
                          color="#F5F8FA"
                        >
                          {elemento.title}
                        </Text>
                        <Text
                          textAlign="center"
                          fontSize="24px"
                          color="#DADADA"
                        >
                          {elemento.continente}
                        </Text>
                      </a>
                    </Link>
                  </Flex>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </Box>
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const props = await api({ method: "get", url: "/images", withCredentials: true })
  const context = props.data

  return {
    props: {
      context
    },
    revalidate: revalidate
  }
}