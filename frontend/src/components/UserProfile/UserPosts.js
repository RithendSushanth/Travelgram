// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { Grid, CircularProgress } from '@material-ui/core';
// import Post from '../Posts/Post.js/Post';

// const UserPosts = ({ userName }) => { // Change the prop name to userName
//   const { posts, isLoading } = useSelector((state) => state.posts);
//   const [userPosts, setUserPosts] = useState([]);

//   useEffect(() => {
//     console.log("Posts in UserPosts component:", posts);
//     const filteredPosts = posts.filter((post) => post.name === userName); // Filter by name
//     console.log("Filtered Posts:", filteredPosts); // Log filtered posts by name
//     setUserPosts(filteredPosts);
//   }, [posts, userName]);

//   if (!userPosts.length && !isLoading) return <p>No posts found for this user.</p>;

//   return (
//     <Grid container alignItems="stretch" spacing={3}>
//       {isLoading ? (
//         <CircularProgress />
//       ) : (
//         userPosts.map((post) => (
//           <Grid key={post._id} item xs={12} sm={12} md={4} lg={2}>
//             <Post post={post} />
//           </Grid>
//         ))
//       )}
//     </Grid>
//   );
// };

// export default UserPosts;


import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import Post from '../Posts/Post.js/Post';

const UserPosts = ({ userName }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    console.log("Posts in UserPosts component:", posts); // Log posts received from Redux

    const filteredPosts = posts.filter((post) => post.name === userName);
    console.log("Filtered Posts:", filteredPosts); // Log filtered posts by name

    setUserPosts(filteredPosts);
  }, [posts, userName]);

  if (!userPosts.length && !isLoading) return <p>No posts found for this user.</p>;

  return (
    <Grid container alignItems="stretch" spacing={3}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        userPosts.map((post) => (
          <Grid key={post._id} item xs={12} sm={12} md={4} lg={2}>
            <Post post={post} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default UserPosts;