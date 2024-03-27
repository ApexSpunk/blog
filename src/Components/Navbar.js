import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        // create a navbar with links to Home, About, and Contact pages
        <nav>
            <Box display='flex' alignItems='center' justifyContent='space-around' p={4} bg='gray.50' shadow='md'>
                <Link to="/">
                    <Image src='https://viamagus1.netlify.app/images/Amazon.png' h={'30px'} mt={3} alt='logo' />
                </Link>
                <Flex justifyContent='space-around' width={{ base: '60%', md: '40%', lg: '30%' }}>
                    <Link to="/">Blog</Link>
                    <Link to="/create">Create</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </Flex>
            </Box>
        </nav>
    )
}

export default Navbar