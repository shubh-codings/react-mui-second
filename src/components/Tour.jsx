import { AccessTime } from "@mui/icons-material";
import { Button, Grid, Paper, Rating, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";


export default function Tour() {
  return (
    <Grid item xs={4}>
        <Paper elevation={16}>
            <img src="https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width='100%'
            />
            <Stack padding={2} gap={1}>
                <Stack direction='row' gap={1} alignItems='center'>
                    <AccessTime fontSize="11"/>
                    <Typography variant="caption">5 Hours</Typography>
                </Stack>
                <Stack direction='row'  gap={1} alignItems='center'>
                    <Rating name="read-only" value={4.5} readOnly precision={0.5}/>
                    <Typography  variant="body1">4.5</Typography>
                    <Typography  variant="body1" mx={2}>(365 reviews)</Typography>
                </Stack>
                <Stack direction='row' gap={1} alignItems='center'>
                    <Typography  variant="body1">Price</Typography>  
                    <Typography  variant="body1" mx={2}>$1356</Typography>
                </Stack>
                <Stack>
                    <Button variant="outlined" component={Link} to='/tourInfo'>View Now</Button>
                </Stack>
            </Stack>

        </Paper>
    </Grid>
  )
}
