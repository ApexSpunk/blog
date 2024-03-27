import {
    GET_BLOGS_LOADING, GET_BLOGS_SUCCESS, GET_BLOGS_ERROR,
    GET_BLOG_LOADING, GET_BLOG_SUCCESS, GET_BLOG_ERROR,
    ADD_BLOG_LOADING, ADD_BLOG_SUCCESS, ADD_BLOG_ERROR
} from './actionTypes';
import axios from "axios"

export const getBlogs = (start,limit) => async (dispatch) => {
    dispatch({ type: GET_BLOGS_LOADING });
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_start='+start+'&_limit='+limit);
        dispatch({ type: GET_BLOGS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_BLOGS_ERROR, payload: error.message });
    }
}

export const getBlog = (id) => async (dispatch) => {
    dispatch({ type: GET_BLOG_LOADING });
    try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        dispatch({ type: GET_BLOG_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_BLOG_ERROR, payload: error.message });
    }
}

export const addBlog = (blog) => async (dispatch) => {
    dispatch({ type: ADD_BLOG_LOADING });
    try {
        const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts', blog);
        dispatch({ type: ADD_BLOG_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: ADD_BLOG_ERROR, payload: error.message });
    }
}