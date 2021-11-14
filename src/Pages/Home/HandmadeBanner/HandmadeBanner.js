import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import product7 from '../../../images/product7.jpg';
import bg from '../../../images/plate.jpg';
import { Button, Typography, Container } from '@mui/material';

const handmadeBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}

const HandmadeBanner = () => {
    return (
        <Box style={handmadeBanner} sx={{ flexGrow: 1 }}>
            <Container>
             <Typography sx={{ fontWeight: 500, m: 2, color: 'primary.main' }} variant="h5" component="div">
                 We Made Things like
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5, color: 'white'}} variant="h4" component="div">
                HANDMADE
                </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left'
                }}>
                    <Box>
                       
                        <Typography variant="h4" sx={{ my: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                            1.Textiles. Appliqué, Crocheting, Embroidery, Felt-making, Knitting, Lace-making, Macramé, Quilting, Tapestry art, Weaving.<br />
                            2.Woodcraft <br />
                            3.Papercraft <br />
                            4.Pottery and Glass Crafts (see also Ancient Pottery) <br />
                            5.Jewellery and Other  of Craftwork.
                        </Typography>
                        <Button variant="contained">Explore</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400 }}
                        src={product7} alt="" />
                </Grid>
            </Grid>
            </Container>
        </Box>
    );
};

export default HandmadeBanner;