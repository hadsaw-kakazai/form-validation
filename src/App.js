import logo from './logo.svg';
import './App.css';
import HeaderOne from './Components/HeaderOne';
import Form from './Form';
import { Box, Input, Stack } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Heading ,Text} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react'

import { Flex, Spacer } from '@chakra-ui/react'

import {useFormik} from 'formik'
import { signUpSchema } from './Schemas/indexj';

const initialValues = {
  full_name :"",
  email:"",
  password:"",
  number:""  
}


function App() {
  
  const {values,errors,handleBlur,handleChange,handleSubmit} =   useFormik({
      initialValues:initialValues,
      validationSchema :signUpSchema,
      onSubmit:(values) =>{
          console.log(values)        
      }
    })


  return (
  
      <Flex  ml={120}>
        <Box  w="1000px">
          <Flex pt={5}>
          <Box w="50%">
          <Text fontSize="3xl" as="b">Haze</Text>
          </Box>
          <Box w="50%" ml={200}>
            <span>Already Have An Account?  </span>
    <Button colorScheme='blue' variant="outline" borderRadius="full" p={5}>Login</Button>
          </Box>
          </Flex>
          
   
   <Container mt={200} maxW="md">
   
<form onSubmit={handleSubmit}>
<Stack spacing={4}>
<Heading>Sign Up Here!</Heading>
<Input  name="full_name" value={values.full_name} onChange={handleChange} onBlur={handleBlur} type="text" placeholder='Full Name' />
  <Input name="email"  value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" placeholder='Email' />
  <Input name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} type="password" placeholder='Password' />
  <Input name="number" value={values.number} onChange={handleChange} onBlur={handleBlur} type="number" placeholder='Phone Number' />
  <Button colorScheme='blue' type='submit' onSubmit={handleSubmit}>Get Started</Button>

</Stack>

</form>

    </Container>     

        </Box>

        <Box  height="980px" w="1000px">
        
      <Image src='../assests/astronaut.jpg' h="auto" maxH="980px" w="full" maxW="1000px" objectFit='cover' ></Image>
      

        </Box>
      </Flex>



     


    
  );
}

export default App;
