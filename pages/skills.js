import { Container, Heading, Image, List, Icon } from "@chakra-ui/react";
  import Layout from "../components/layouts/article";
  import Section from "../components/section";
  import { Progress } from '@chakra-ui/react';
  import { SiChakraui, SiXampp, SiSqlite } from 'react-icons/si';

  
  const Skill = () => {
    return (
      <Layout title="Skills">
        <Container>
            <Section delay={0.3}>
              <Heading as="h3" variant="section-title">
                Programming Languages
              </Heading>
              <List>
                  <Image pr={4} src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v2.png" alt="Java"/>
                  <Progress colorScheme='green' size='sm' value={85} />
              </List>
              <List>
                  <Image pr={4} src="https://img.icons8.com/color/48/000000/c-programming.png" alt="C programming"/>
                  <Progress colorScheme='green' size='sm' value={55} />
              </List>
              <List>
                  <Image pr={4} src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="Javascript"/>
                  <Progress colorScheme='green' size='sm' value={40} />
              </List>
              <List>
                  <Image pr={4} src="https://img.icons8.com/color/48/000000/python--v1.png" alt="Python"/>  
                  <Progress colorScheme='green' size='sm' value={35} />
              </List>            
            </Section>
            <Section delay={0.4}>
                <Heading as="h3" variant="section-title">
                  Technologies
                </Heading>
                <List>
                  <Image pr={4} src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="HTML5"/>  
                  <Progress colorScheme='blue' size='sm' value={90} />
                </List>  
                <List>
                  <Image pr={4} src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS3"/>  
                  <Progress colorScheme='blue' size='sm' value={65} />
                </List>  
                <List>
                  <Image pr={4} src="https://img.icons8.com/color/48/000000/bootstrap.png" alt="Bootstrap"/>  
                  <Progress colorScheme='blue' size='sm' value={65} />
                </List>  
                <List>
                  <Image pr={4} src="https://img.icons8.com/material-outlined/48/000000/django.png" alt="Django"/>  
                  <Progress colorScheme='blue' size='sm' value={55} />
                </List> 
                <List>
                  <Image pr={4} src="https://img.icons8.com/ios-filled/50/000000/jquery.png" alt="Jquery"/>  
                  <Progress colorScheme='blue' size='sm' value={45} />
                </List> 
                <List>
                  <Image pr={4} src="https://img.icons8.com/office/48/000000/react.png" alt="React"/>  
                  <Progress colorScheme='blue' size='sm' value={35} />
                </List> 
                <List>
                  <Image pr={4} src="https://img.icons8.com/ios-filled/50/000000/next.png" alt="NextJS"/>
                  <Progress colorScheme='blue' size='sm' value={30} />                     
                </List>                 
                <List>
                  <Image pr={4} src="https://img.icons8.com/color/48/000000/filmora.png" alt="Filmora"/>
                  <Progress colorScheme='blue' size='sm' value={80} />                     
                </List> 
                <List>
                  < Icon as={SiChakraui} />
                  <Progress colorScheme='blue' size='sm' value={30} />                     
                </List>
            </Section>
            <Section delay={0.4}>
                <Heading as="h3" variant="section-title">
                  Databases
                </Heading>
                <List>
                  <Image pr={4} src="https://img.icons8.com/color/48/000000/mysql--v1.png" alt="mysql"/>
                  <Progress colorScheme='orange' size='sm' value={80} />                     
                </List> 
                <List>
                  < Icon as={SiXampp} />
                  <Progress colorScheme='orange' size='sm' value={70} />                     
                </List> 
                <List>
                  < Icon as={SiSqlite} />
                  <Progress colorScheme='orange' size='sm' value={40} />                     
                </List> 
            </Section>

        </Container>
      </Layout>
    );
  };
  
  export default Skill;