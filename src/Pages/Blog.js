import React, { useEffect } from 'react'
import { getBlog } from '../Redux/posts/actions'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Text } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'

function Blog() {
    const dispatch = useDispatch()
    const { data: blog, loading, error } = useSelector((state) => state.blog.blog)
    const { id } = useParams()

    useEffect(() => {
        dispatch(getBlog(id))
    }, [dispatch])
    return (
        <Box>
            {loading ? <Text>Loading...</Text> : error ? <Text>{error}</Text> : (
                <Box p={5} shadow='md' borderWidth='1px'>
                    <Text fontSize='xl'>{blog.title}</Text>
                    <Text fontSize='sm' mt={4}>{blog.body}</Text>
                </Box>
            )}
        </Box>
    )
}

export default Blog