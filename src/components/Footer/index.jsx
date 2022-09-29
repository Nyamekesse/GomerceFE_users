import React from "react";
import  './Footer.css'

const Footer = () => {
  return (<>
    <div id="footer">
      <div class="footer-top">
            <div class="footer-col">
                    <h3>Gomerce</h3>
                    
            </div>
            <div class="footer-col">
                  <h3>About</h3>
                  <ul>
                    <li>How to register</li>
                    <li>Forgot Password</li>
                    <li>Blog</li>
                    <li>Forum</li>
                  </ul>
            </div>
            <div class="footer-col">
                  Partner with us
            </div>
            <div class="footer-col">
                  Support
            </div>
      </div>
      <div class="footer-bottom">
        copyright
      </div>
    </div>

  </>
  );
};

export default Footer;
