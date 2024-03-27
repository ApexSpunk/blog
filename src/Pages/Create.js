import { Box, Button, Input, Text, Textarea, useToast } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addBlog } from '../Redux/posts/actions'
import { useNavigate } from 'react-router-dom'

function Create() {
    const dispatch = useDispatch()
    const [blogData, setBlogData] = React.useState({ title: '', body: '' })
    const toast = useToast()
    const navigate = useNavigate()

    const handleSubmit = () => {
        if (blogData.title === '') {
            toast({
                title: 'Error',
                description: 'Please fill in the title',
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        } else {
            dispatch(addBlog(blogData))
            toast({
                title: 'Success',
                description: 'Blog post created',
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
            setBlogData({ title: '', body: '' })
            navigate('/')
        }
    }
    return (
        <Box maxW={'3xl'} mx={'auto'} mt={8}>
            <Text fontSize='2xl' textAlign='center' mt={4}>Create a new blog post</Text>
            <Input placeholder='Title' mt={4} onChange={(e) => setBlogData({ ...blogData, title: e.target.value })} value={blogData.title} />
            <Textarea placeholder='Body' mt={4} onChange={(e) => setBlogData({ ...blogData, body: e.target.value })} value={blogData.body} maxLength={1000} />
            <Button mt={4} colorScheme='whatsapp' w='full' onClick={handleSubmit}>
                Create
            </Button>
        </Box>
    )
}

export default Create