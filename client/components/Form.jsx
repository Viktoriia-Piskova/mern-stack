import { Box, Button, Paper, TextField, Typography } from '@mui/material'

const Form = () => {
    return (
        <Paper>
            <Box component={"form"}>
                <Typography>Form Title</Typography>
                <TextField name="title" label="Title" />
                <Button>Send</Button>
            </Box>
        </Paper>
    )
}

export default Form