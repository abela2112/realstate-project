import { Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'

const Error = () => {
    return (
        <Flex flexDirection={'column'} alignItems={'center'}>
            <Text color={'red.400'} fontSize={'3xl'} fontWeight={'black'} >OOPs!!!</Text>
            <Text color={'red.400'} fontSize={'3xl'} fontWeight={'black'} >There is something Error</Text>
            <Link bg={'gray.100'} borderRadius={5} p={2} fontSize={'lg'} marginTop={3}>please try again</Link>
        </Flex>
    )
}
export default Error