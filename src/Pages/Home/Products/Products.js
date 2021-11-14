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
import Product from '../Product/Product';
import bg from'../../../images/bg.jpg';

const products = [
    {
        name: 'Blue Vase',
        price:'$50',
        img: Product1 
    },
    {
        name: 'Handicraft-Jute Bag ',
        price:'$50',
        img: Product2
    },
    {
        name: 'Handicraft Pot',
        price:'$50',
        img: Product3
    },
    {
        name: 'Handicraft Pottery',
        price:'$50',
        img: Product4
    },
    {
        name: 'Handicraft Jewellery',
        price:'$50',
        img: Product5
    },
    {
        name: 'Marble Handicraft ',
        price:'$150',
        img: Product6
    }
]

//customize css
const handmadeBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    marginTop: 175
}

const Products = () => {
    return (
        <Box style={handmadeBanner} sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                    OUR PRODUCTS
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5, color: 'primary.main'}} variant="h4" component="div">
                    Products We Sale
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map( product => <Product
                            key={product.name}
                            product={product}
                        ></Product>)
                        
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;