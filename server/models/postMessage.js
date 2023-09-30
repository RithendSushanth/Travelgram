import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: { 
        type: [String], default: [] 
    },
    comments: { 
        type: [String], default: [] 
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    likesCount: {
        type: Number,
        default: 0
    },
    commentsCount: {
        type: Number,
        default: 0
    },
    viewsCount: {
        type: Number,
        default: 0
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;