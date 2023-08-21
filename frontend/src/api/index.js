// import axios from 'axios';

// const API = axios.create({baseURL: 'http:localhost:5000'});

// const url = 'http://localhost:5000/posts';

// export const fetchPosts = () => API.get('http://localhost:5000/posts');
// export const createPost = (newPost) => API.post('http://localhost:5000/posts', newPost);
// export const likePost = (id) => API.patch(`http://localhost:5000/posts/${id}/likePost`);
// export const updatePost = (id, updatedPost) => API.patch(`http://localhost:5000/posts/${id}`, updatedPost);
// export const deletePost = (id) => API.delete(`http://localhost:5000/posts/${id}`);

// export const signIn = (formData) => API.post('/users/signin',formData)
// export const signUp = (formData) => API.post('/users/signup',formData)


import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

    // important for middleware to add something specific to our request
    // for login purpose to send token profile to our backend for it to verify and continue
    API.interceptors.request.use((req)=> {
        if(localStorage.getItem('profile')){
            req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
        }
        
        return req;
    })

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);