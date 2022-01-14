import { Container } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import travel from '../public/images/works/travel.jpg'
import ecomm from '../public/images/works/django.jpg'


const Works = () => (
  <Layout title="Works">
    <Container>
          <Section>
              <WorkGridItem id="travel" title="A Travel to Remember" thumbnail={travel}>
              </WorkGridItem>
          </Section>
          <Section>
              <WorkGridItem id="Ecomm" title="Bibliophilic StockPile" thumbnail={ecomm}> 
              </WorkGridItem>
          </Section>
    </Container>
  </Layout>
)

export default Works
