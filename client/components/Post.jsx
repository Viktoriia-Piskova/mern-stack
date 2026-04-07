import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box } from '@mui/material';
import { ThumbUpAlt, Delete, MoreHoriz } from '@mui/icons-material';

const Post = ({ post, setCurrentId }) => {
  return (
    <Card sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: '15px',
      height: '100%',
      position: 'relative',
    }}>
      <CardMedia 
        sx={{
          height: 0,
          paddingTop: '56.25%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backgroundBlendMode: 'darken',
        }} 
        image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} 
        title={post.title} 
      />

      <Box sx={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
      }}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{"Date"}</Typography>
      </Box>

      <Box sx={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'white',
      }}>
        <Button 
          style={{ color: 'white' }} 
          size="small" 
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHoriz fontSize="medium" />
        </Button>
      </Box>

      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
      }}>
        <Typography variant="body2" color="text.secondary" component="h2">
          {post.tags?.map((tag) => `#${tag} `)}
        </Typography>
      </Box>

      <Typography 
        sx={{ padding: '0 16px' }} 
        gutterBottom 
        variant="h5" 
        component="h2"
      >
        {post.title}
      </Typography>

      <CardContent>
        <Typography variant="body2" color="text.secondary" component="p">
          {post.message}
        </Typography>
      </CardContent>

      <CardActions sx={{
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <Button size="small" color="primary" onClick={() => {}}>
          <ThumbUpAlt fontSize="small" /> 
          &nbsp; Like &nbsp; {post.likeCount} 
        </Button>
        <Button size="small" color="primary" onClick={() => {}}>
          <Delete fontSize="small" /> 
          &nbsp; Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;