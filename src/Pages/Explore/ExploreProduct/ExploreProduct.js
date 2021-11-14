import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ExploreProduct = (props) => {
    const { name, price, description, img } = props.explore;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '100px', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography sx={{ fontWeight: 600, m: 2, color: 'primary.main' }}variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography style={{fontSize: 14}} sx={{ fontWeight: 500, m: 2, color: 'text.success' }} variant="h6" component="div">
                        {description}
                    </Typography>
                    <Typography  sx={{ fontWeight: 500}} variant="h5" color="text.secondary">
                        {price}
                    </Typography>
                    
                    <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Add Product</Button>

                    
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ExploreProduct;