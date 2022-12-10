import React,{useState} from 'react'
import { Button,Text,Flex} from '@chakra-ui/react'

 export const Add = () => {
    const [number,setNumber]=useState(0);
    const[isMax,setMax]=useState(false);
    const addNumber=()=>
        {
            if(number>=10)
            {
                setMax(true);
                setNumber(0)
            }
            setNumber((prev)=>prev+1);

        };
        const subNumber=()=>
            {

                setNumber(number-1);
            }
  return (
    <Flex bg="black" justifyContent="center" align="center">
   <Button onClick={addNumber}>Add</Button>
   <Text color="white" mx="10px">{number}</Text>
   <Button onClick={subNumber}>Subtract</Button>
   { isMax &&
   (
   
    <Text color="red" ml="10px">
    Max kimit is 10
    </Text>
    )

   

   }
   </Flex>
   );
};
  

export default Add