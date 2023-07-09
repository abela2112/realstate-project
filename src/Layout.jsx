import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Box, Flex } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'
Outlet
const Layout = () => {
    return (
        <main>

            <Flex justifyContent={'center'} alignItems={'center'} maxWidth={'1280px'} margin={'auto'} position={'relative'}>
                <Box>
                    <Outlet />
                    <Footer />
                </Box>
            </Flex>
        </main>
    )
}

export default Layout