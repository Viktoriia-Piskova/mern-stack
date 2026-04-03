import { AppBar, Container, CssBaseline, Grid, Grow, Paper, Typography } from '@mui/material';
import Form from '../components/Form';


const App = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppBar>
          <Typography variant="h2">Memories</Typography>
        </AppBar>
        <Grow in>
          <Container sx={{ pt: 70 }}>
            <Paper elevation={0} sx={{ p: 2, backgroundColor: '#9b9da7' }}>
              <Grid container justifyContent={"space-between"} alignItems={"stretch"} spacing={3}>
                <Grid size={{ xs: 12, sm: 7 }}>Post Cards</Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <Form />
                </Grid>
              </Grid>
              </Paper>
          </Container>
        </Grow>
      </Container></>
  );
};

export default App;
