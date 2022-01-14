import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'
import Paragraph from '../components/paragraph'


const Bio = () => (
    <Layout title="Bio">
        <Container>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                  Dates
                </Heading>
                <BioSection>
                  <BioYear>2001, 8th Sept</BioYear>
                    Born in Kolkata, India.
                </BioSection>
                <BioSection>
                  <BioYear>2017</BioYear>
                     Completed 10th Standard from Kolkata.<br></br>
                     National Gems Higher Secondary School.<br></br>
                     ICSE Board - 93%
                </BioSection>
                <BioSection>
                  <BioYear>2019</BioYear>
                     Completed 12th Standard from Kolkata.<br></br>
                     National Gems Higher Secondary School.<br></br>
                     ISC Board - 92%
                </BioSection>
                <BioSection>
                  <BioYear>2019 to present</BioYear>
                     Pursuing Btech Computer Science in Engineering<br></br>
                     Narula Institute of Technology, North 24 Parganas, West Bengal.<br></br>
                     Average CGPA - 8.75
                </BioSection>
            </Section>
            <Section delay={0.3}>
              <Heading as="h3" variant="section-title">
                Hobbies
              </Heading>
              <Paragraph>
                •	Making Cinema - Direction, Screenplay, Script, Editing.<br></br>
                •	Writing Poems and Stories; Voice Acting.<br></br>
                •	Reading books.<br></br>
                •	Playing Cricket, Football, Kabaddi. <br></br>
                •	Listening to Music.<br></br>
              </Paragraph>
            </Section>

              

        </Container>
    </Layout>
)

export default Bio
