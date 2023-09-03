import React, { useState, useRef } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles'
import { commentPost } from '../../actions/posts'


const CommentSection = ({ post }) => {

    const classes = useStyles();
    const [comments, setComments] = useState(post?.comments)
    const [comment, setComment] = useState('')
    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();
    const commentsRef = useRef();

    // const handleComment = async () => {
    //     const newComment = `${user?.result?.name}: ${comment}`;
    //     const newComments = await dispatch(commentPost(`${user?.result?.name}: ${comment}`, post._id));
    
    //     setComment('');
    //     setComments(newComments);
    
    //     commentsRef.current.scrollIntoView({ behavior: 'smooth' });
    //   };
    const handleComment = async () => {
        // Create a new comment string
        const newComment = `${user?.result?.name}: ${comment}`;
        
        // Dispatch the comment action and get the updated comments
        const newComments = await dispatch(commentPost(newComment, post._id));
    
        // Clear the comment input
        setComment('');
    
        // Update the comments state with the new comments
        setComments(newComments);
    
        // Scroll to the newly added comment
        commentsRef.current.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <div>
            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInnerContainer}>
                    <Typography gutterBottom variant="h6">Comments</Typography>
                    {comments.map((c, i) => (
                        <Typography key={i} gutterBottom variant="subtitle1">
                            <strong>{c.split(':')[0]}</strong>
                            {c.split(':')[1]}
                        </Typography>
                    ))}
                    <div ref={commentsRef}/>
                </div>
                {user?.result?.name && (
                    <div style={{ width: "70%" }}>
                        <Typography gutterBottom variant="h6">Write a Comment</Typography>
                        <TextField
                            fullWidth
                            rows={4}
                            variant="outlined"
                            label="Comment"
                            multiline
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <Button style={{ marginTop: "10px" }} fullWidth disabled={!comment} variant="contained" color="primary" onClick={handleComment}>
                            Comment
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CommentSection;