import { AppBar, Container, CssBaseline, Grid, Grow, Typography } from '@mui/material';
import Form from '../components/Form';
import PostsContainer from '../components/PostsContainer';
import memoriesImage from './images/memories.png';

const App = () => {
  const dummyPosts = [
    { _id: 1, title: "Dummy Post 1" }
  ];

  return (
    <Container maxWidth="lg">
      <AppBar
        position="static"
        color="inherit"
        sx={{
          borderRadius: 15,
          margin: '30px 0',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h2"
          align="center"
          sx={{ color: 'rgba(0,183,255, 1)' }}
        >
          Memories
        </Typography>
        <img
          src={memoriesImage}
          alt="icon"
          height="60"
          style={{ marginLeft: '15px' }}
        />
      </AppBar>

      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <PostsContainer posts={dummyPosts} setCurrentId={1}/>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
