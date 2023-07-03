import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
/*import YouTubeIcon from "@mui/icons-material/YouTube";*/ 
import './footer.css'

const Footer = () => {
  return (
    <div className="Footer">
      <div>
        <div className="Footer__content">
          <p>MR.MAC © 2023 | جميع الحقوق محفوظة</p>
        </div>
        <div>
          <div className="site-footer__social-icons">
            <div  className="site-footer__social-icons-member">
              <InstagramIcon />
            </div>
            <div className="site-footer__social-icons-member">
              <FacebookIcon />
            </div>
            <div className="site-footer__social-icons-member">
              <TwitterIcon />
            </div>
           {/* <div
              
              className="site-footer__social-icon-member"
              rel="noopener noreferrer"
              target="_blank"
            >
              <YouTubeIcon />
            </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer