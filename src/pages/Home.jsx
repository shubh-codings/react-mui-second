import { Container, Grid } from "@mui/material";
import Tour from "../components/Tour";


export default function Home() {
    return (
        <Container sx={{mt:10}}>
            <Grid container spacing={2}>
                <Tour/>
                <Tour/>
                <Tour/>
                <Tour/>
                <Tour/>
                <Tour/>
            </Grid>
        </Container>
    )
}
