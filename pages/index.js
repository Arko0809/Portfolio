// import NextLink from 'next/link'
import {Link, Container, Heading, Box, Image, Button, useColorModeValue} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Home = () => (
  <Layout>
    <Container>
      <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Soham Dey
            </Heading>
            <p>Content Creator || Web Developer || Writer</p>
          </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign="center">
          <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/arko.jpg" alt="Profile image"/>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
            Myself, Soham Dey aka Arko.
            Currently, I&apos;m pursuing my Btech CSE degree. 
            I&apos;m a hard-working and determined person. I can stay calm in stress and can tactfully manage the situation.  
            I&apos;m fascinated towards new technologies and currently diving into this massive pool of world-changing components.
            Apart from my academics, I&apos;m a Writer and Cinephile. 
            I&apos;m a content creator in YouTube which is about my audio stories, vlogs, documentaries, short films.
        </Paragraph>
        <Box align="center" my={4}>
              <Link href="https://drive.google.com/file/d/1Ec_-dekvUa6GjPfnEUrwx2rv6SxU2M2a/view?usp=sharing" target="_blank">
                <Button colorScheme='teal'>CV</Button>
              </Link>
        </Box>
        <Heading as="h3" variant="section-title">
          Contact Me
        </Heading>
        <Box borderRadius="lg" mb={6} p={3} textAlign="center" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}>
          Mobile - +91 8617759496<br></br>
          Work Related - sohamdey08@gmail.com<br></br>
          Personal - alabasterarko@gmail.com
        </Box>
      </Section>     
    </Container>
  </Layout>
)

export default Home







