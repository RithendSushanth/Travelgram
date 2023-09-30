import express from 'express';

import { getPosts, getPostsByUser, getPostsBySearch, getPostStatistics, getPostsByCreator, getPost, createPost, updatePost, likePost, commentPost, deletePost } from '../controllers/posts.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/search', getPostsBySearch);
// router.get('/creator/:name', getPostsByCreator);
router.get('/creator', getPostsByCreator);
router.get('/:postId/statistics', getPostStatistics);
router.get('/user', getPostsByUser);
router.get('/', getPosts);
router.get('/:id', getPost);

router.post('/', auth,  createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);
router.post('/:id/commentPost', commentPost);
export default router;