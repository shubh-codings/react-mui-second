import { BottomNavigation, Box, Container, Paper, Typography } from "@mui/material";
import ImageCollage from "../components/ImageCollage";
import TourAccordion from "../components/TourAccordion";
import BookModal from "../components/BookModal";


export default function TourInfo() {
  return (
    <Container>
      <Typography variant="h4" component='h1' textAlign='center' m={3}>Tour Around San Francisco</Typography>
      <Box sx={{ display: 'flex', marginTop: 3 }}>
        <img src="https://images.pexels.com/photos/2104742/pexels-photo-2104742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" height={450} />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component='h3' textAlign='left' m={3}>About This Tour</Typography>
        <Typography variant="p" component='p' textAlign='left' m={3}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel perferendis, animi autem inventore consequuntur voluptatem ipsum nostrum earum impedit pariatur similique quam reiciendis, suscipit odit. Quam eos quas ducimus exercitationem, eveniet quibusdam mollitia. Fugiat magni reiciendis minima consequatur odio earum dolorum aliquam commodi eveniet quia repellat fugit, fuga laudantium eius. Molestiae delectus at sit, doloremque, incidunt ex perferendis nihil quaerat</Typography>

      </Box>
      <Box marginBottom={10}>
        <Typography variant="h6" component='h3' textAlign='left' m={3}>Frequently Asked Questions</Typography>
        <TourAccordion/>
      </Box>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation >
            <BookModal/>
        </BottomNavigation>
      </Paper>
    </Container>
  )
}
