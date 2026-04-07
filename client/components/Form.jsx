import { Box, Button, Paper, TextField, Typography } from '@mui/material'

const Form = () => {
    const currentId = null;
    const post = { title: "Dummy post" };

    return (
        <Paper sx={{ padding: 2 }}>
            <Box
                component="form"
                autoComplete="off"
                noValidate
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    '& .MuiTextField-root': {
                        margin: 1,
                    },
                }}
            >
                <Typography variant="h6">
                    {currentId ? `Editing "${post.title}"` : 'Creating a Memory'}
                </Typography>

                <TextField
                    name="creator"
                    variant="outlined"
                    label="Creator"
                    fullWidth
                />
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                />
                <TextField
                    name="message"
                    variant="outlined"
                    label="Message"
                    fullWidth
                    multiline
                    rows={4}
                />
                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags (comma separated)"
                    fullWidth
                />

                <Box sx={{ width: '97%', margin: '10px 0' }}>
                    <Button variant="contained" component="label" fullWidth sx={{ margin: '10px 0' }}>
                        Upload Image
                        <input
                            type="file"
                            hidden
                            multiple={false}

                        />
                    </Button>
                </Box>

                <Button
                    sx={{ marginBottom: '10px' }}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                >
                    Submit
                </Button>

                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    fullWidth
                >
                    Clear
                </Button>
            </Box>
        </Paper>
    )
}

export default Form