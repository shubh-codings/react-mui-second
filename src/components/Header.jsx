import styled from "@emotion/styled";
import { Menu } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <Box sx={{ flexGrow: 1, position:"sticky",top:0,right:0 , zIndex:9}}>
            <AppBar position="static" >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 ,display:{xs:'block',sm:'none'}}}
                    >
                        <Menu />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI
                    </Typography>
                    <Typography variant="paragraph" component={Link} to='/' color='background.default' 
                    sx={{textDecoration:'none',display: { xs: 'none', sm: 'block' },marginX:'20px'}}>Home</Typography>
                    
                </Toolbar>
            </AppBar>
        </Box>
    )
}
