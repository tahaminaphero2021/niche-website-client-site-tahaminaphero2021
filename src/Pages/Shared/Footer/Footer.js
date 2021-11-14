import React from "react";
import { Container }from '@mui/material';
import "./Footer.css";
import footerBg from'../../../images/slider1.jpg';

const handmadeFooter = {
    background: `url(${footerBg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}
const Footer = () => {
  return (
    <Container style={handmadeFooter} sx={{ flexGrow: 1 }}>
    <div className="mt-5 footer">
      <div className="">
        <div className="row">
          <div className="col-md-4  ">
            <div className="first-cart p-2 mt-2">
            
              <h1 className="mt-5">About Us</h1>
              <p>Home</p>
              <p>Products</p>
              <p>Reviews</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="second-part">
              <h1>Useful Links</h1>
              <p className="mt-4">License Agreement</p>
              <p>Privacy Policy</p>
              <p>Terms & Condition</p>
             
              
            </div>
          </div>
          <div className="col-md-4">
            <div className="third-part">
              <h1>Contact Us</h1>
              <small className="mt-5">Office: 12 Fake Street,Bangladesh</small>
              <br />
              <small className="mt-3">Phone: (08) 8827 633354</small>
              <br />
              <small className="mt-3">Fax: 08) 08 4752 1499</small>
              <br />
              <small className="mt-3">Mail: support.goaltheme.com</small>
            </div>
          </div>
        </div>
        <hr />
        <div className="bottom text-center">
          <small>© 2021 HandmadeTheme by Goalthemes. All Rights Reserved.</small>
        </div>
      </div>
    </div>
    </Container>
  );
};

export default Footer;