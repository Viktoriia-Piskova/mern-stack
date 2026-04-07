import { Grid, CircularProgress } from '@mui/material';
import Post from "./Post.jsx";

const PostsContainer = ({ posts, setCurrentId }) => {
    return (
        <>
            {!posts?.length ? (
                <CircularProgress />
            ) : (
                <Grid
                    container
                    alignItems="stretch"
                    spacing={3}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    {posts.map((post) => (
                        <Grid key={post._id} size={{ xs: 12, sm: 6, md: 6 }}>
                            <Post
                                post={post}
                                setCurrentId={setCurrentId}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}
        </>
    );
};

export default PostsContainer;