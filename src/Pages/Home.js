import React, { useEffect } from 'react'
import { getBlogs } from '../Redux/posts/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, ButtonGroup, Grid, Skeleton, Stack, Text, useToast } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Home() {
    const dispatch = useDispatch()
    const { data: blogs, loading, error } = useSelector((state) => state.blog.blogs)
    const [pagination, setPagination] = React.useState({ start: 0, limit: 10 })
    const toast = useToast()

    useEffect(() => {
        if(pagination.start >= 0){
            dispatch(getBlogs(pagination.start, pagination.limit))
        }else{
            toast({
                title: 'Cannot go back',
                description: 'You are already on the first page',
                status: 'warning',
                duration: 5000,
                isClosable: true,
            })
        }
    }, [dispatch, pagination])


    return (
        <Box>
            <Grid gap={6} mt='6' mx={{ base: 4, md: 20 }} templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}>
                {loading ? new Array(10).fill(0).map((_, i) => (
                    <Stack>
                        <Skeleton height='20px' />
                        <Skeleton height='150px' />
                    </Stack>
                )) : error ? <Text>{error}</Text> : blogs.map((blog) => (
                    <Link to={`/${blog.id}`} key={blog.id}>
                        <Box p={5} shadow='md' borderWidth='1px'>
                            <Text fontSize='xl'>{blog.title}</Text>
                            <Text fontSize='sm' mt={4}>{blog.body}</Text>
                        </Box>
                    </Link>
                ))}
            </Grid>
            <ButtonGroup mt='6' display='flex' justifyContent='center' mb='4'>
                <Button onClick={() => setPagination({ ...pagination, start: pagination.start - 10 })}>Previous</Button>
                <Button onClick={() => setPagination({ ...pagination, start: pagination.start + 10 })}>Next</Button>
            </ButtonGroup>
        </Box>
    )
}

export default Home