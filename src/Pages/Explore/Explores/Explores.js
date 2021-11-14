import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Product1 from '../../../images/blue vases.jpg';
import Product2 from '../../../images/product2.jpg';
import Product3 from '../../../images/product3.jpg';
import Product4 from '../../../images/product4.jpg';
import Product5 from '../../../images/product5.jpg';
import Product6 from '../../../images/product6.jpg';
import Product7 from '../../../images/product7.jpg';
import Product8 from '../../../images/product8.jpg';
import Product9 from '../../../images/product9.jpg';
import Product10 from '../../../images/product10.png';
import Product11 from '../../../images/product11.jpg';

import ExploreProduct from '../ExploreProduct/ExploreProduct';

const explores = [
    {
        name: 'Blue Vase',
        price:'$50',
        img: Product1,
        description:"Blue Pottery is widely recognized as a traditional craft of Jaipur, though it is Turko-Persian in origin. The name 'blue pottery' comes from the eye-catching blue dye used to color the pottery. Jaipur blue pottery, made out of a similar frit material to Egyptian faience, is glazed and low-fired."
    },
    {
        name: 'Handicraft-Jute Bag ',
        price:'$50',
        img: Product2,
        description:"Jute Bags – an environment-friendly packaging alternative.To make bags and other cloth items, the jute fibre is taken from the stem and outer skin of the jute plant. ... After immersing the stems in slow running water, the non-fibrous material can be scraped off, allowing workers to pull the fibres from the jute stem."
    },
    {
        name: 'Handicraft Pot',
        price:'$50',
        img: Product3,
        description:"A flowerpot, flower pot, planter, planterette, or alternatively plant pot is a container in which flowers and other plants are cultivated and displayed. Historically, and still to a significant extent today, they are made from plain terracotta with no ceramic glaze, with a round shape, tapering inwards."
    },
    {
        name: 'Handicraft Pottery Bowl',
        price:'$50',
        img: Product4,
        description:"Handmade bowls bring an artisanal feel to your home. Find cereal, pasta and serving bowls for the dining room, or decorate with a centerpiece bowl.Feel the pure and aesthetic beauty of the natural and organic forms of these handmade bowls."
    },
    {
        name: 'Handicraft Jewellery',
        price:'$50',
        img: Product5,
        description:"Handicraft Jewellery is literally just that, made by the “hands” of the artisan or maker. The pieces are soldered, sawed, carved, and shaped without the use of manufacturing machinery. ... Your handmade jewelry will be far less likely to have flaws and imperfections than something made in bulk."
    },
    {
        name: 'Marble Handicraft ',
        price:'$150',
        img: Product6,
        description:"Jaipur is royal city of Rajasthan and is famous for various art and crafts. All marble handicrafts items are crafted by skilled craftsmen using simple tools by hand carvings on high grade Makarana marbles with Meenakari and Kundan work. Therefore it's used as home decoration and gifting purpose."
    },
    {
        name: 'Blue Vase',
        price:'$200',
        img: Product7,
        description:"Blue Pottery is widely recognized as a traditional craft of Jaipur, though it is Turko-Persian in origin. The name 'blue pottery' comes from the eye-catching blue dye used to color the pottery. Jaipur blue pottery, made out of a similar frit material to Egyptian faience, is glazed and low-fired."
    },
    {
        name: 'Handmade Bag',
        price:'$70',
        img: Product8,
        description:"Handmade Bag is widely recognized as a traditional craft of Jaipur, though it is Turko-Persian in origin. The name 'blue pottery' comes from the eye-catching blue dye used to color the pottery. Jaipur blue pottery, made out of a similar frit material to Egyptian faience, is glazed and low-fired."
    },
    {
        name: 'Handmade Watch',
        price:'$60',
        img: Product9,
        description:"Handmade Watch is widely recognized as a traditional craft of Jaipur, though it is Turko-Persian in origin. The name 'blue pottery' comes from the eye-catching blue dye used to color the pottery. Jaipur blue pottery, made out of a similar frit material to Egyptian faience, is glazed and low-fired."
    },
    {
        name: 'Handmade Plant tree ',
        price:'$90',
        img: Product10,
        description:"Handmade plant tree is widely recognized as a traditional craft of Jaipur, though it is Turko-Persian in origin. The name 'blue pottery' comes from the eye-catching blue dye used to color the pottery. Jaipur blue pottery, made out of a similar frit material to Egyptian faience, is glazed and low-fired."
    },
    {
        name: 'Handmade Bag',
        price:'$180',
        img: Product11,
        description:"Handmade Bag is widely recognized as a traditional craft of Jaipur, though it is Turko-Persian in origin. The name 'blue pottery' comes from the eye-catching blue dye used to color the pottery. Jaipur blue pottery, made out of a similar frit material to Egyptian faience, is glazed and low-fired."
    },
]


const Explores = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 600, m: 2, color: 'primary.main' }} variant="h6" component="div">
                    OUR PRODUCTS
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5, color: 'danger.main'}} variant="h4" component="div">
                    Products We Sale For 5% Offer
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        explores.map( explore => <ExploreProduct
                            key={explore.name}
                           explore={explore}
                        ></ExploreProduct>)
                        
                        
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Explores;