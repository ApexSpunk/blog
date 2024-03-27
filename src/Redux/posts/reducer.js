import {
    GET_BLOGS_LOADING, GET_BLOGS_SUCCESS, GET_BLOGS_ERROR,
    GET_BLOG_LOADING, GET_BLOG_SUCCESS, GET_BLOG_ERROR,
    ADD_BLOG_LOADING, ADD_BLOG_SUCCESS, ADD_BLOG_ERROR
} from './actionTypes';

const initialState = {
    blogs: { data: [], loading: false, error: null },
    blog: { data: {}, loading: false, error: null },
    addBlog: { loading: false, error: null }
};

const blogReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_BLOGS_LOADING:
            return { ...state, blogs: { ...state.blogs, loading: true } };
        case GET_BLOGS_SUCCESS:
            return { ...state, blogs: { data: payload, loading: false, error: null } };
        case GET_BLOGS_ERROR:
            return { ...state, blogs: { ...state.blogs, loading: false, error: payload } };

        case GET_BLOG_LOADING:
            return { ...state, blog: { ...state.blog, loading: true } };
        case GET_BLOG_SUCCESS:
            return { ...state, blog: { data: payload, loading: false, error: null } };
        case GET_BLOG_ERROR:
            return { ...state, blog: { ...state.blog, loading: false, error: payload } };

        case ADD_BLOG_LOADING:
            return { ...state, addBlog: { ...state.addBlog, loading: true } };
        case ADD_BLOG_SUCCESS:
            return { ...state, blogs: { data: [payload, ...state.blogs.data], loading: false, error: null } };
        case ADD_BLOG_ERROR:
            return { ...state, addBlog: { ...state.addBlog, loading: false, error: payload } };

        default:
            return state;
    }
}

export default blogReducer;