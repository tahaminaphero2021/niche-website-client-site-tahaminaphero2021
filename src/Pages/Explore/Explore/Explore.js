import React from 'react';
import Explores from '../../Explore/Explores/Explores';
import Navigation from '../../Shared/Navigation/Navigation';


const Explore1 = () => {
  
    return (
        <div>
            <Navigation></Navigation>
            <Explores></Explores>
           
        </div>
    );
};

export default Explore1;



















// import React from 'react';
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button}  from '@mui/material';

// const Explore = (props) => {
//     const { name, price, img } = props.explore;
//     return (
//         <Grid item xs={4} sm={4} md={4}>
//             <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
//                 <CardMedia
//                     component="img"
//                     style={{ width: 'auto', height: '100px', margin: '0 auto' }}
//                     image={img}
//                     alt="green iguana"
//                 />
//                 <CardContent>
//                     <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }}variant="h5" component="div">
//                         {name}
//                     </Typography>
//                     <Typography variant="h6" color="text.secondary">
//                         {price}
//                     </Typography>
//                     <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Purchase</Button>
//                 </CardContent>
//             </Card>
//         </Grid>
//     );
// };

// export default Explore;