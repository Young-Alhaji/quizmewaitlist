import React from "react";
import { Link } from "react-router-dom";
import styles from "../CSS/footer.css";

const Footer = () => {
   const scrollToTop = () => {
      window.scrollTo(0, 0)
  }
  return (
    <>
    <div>
    <div class="footer_section layout_padding">
         <div class="container">
            <div class="row">
               <div class="col-sm-6 col-md-6 col-lg-3">
                  <div class="footer_logo" style={{backgroundColor:"black",color: 'white',fontFamily:'sans-serif',padding:'25px 15px',letterSpacing:'3px',fontSize:'60%',width:'60px',borderRadius:'15px',fontWeight:'bold'}}>QUIZ</div>
                  <h5 style={{fontWeight:'bolder',color:'black'}}>QuizMe</h5>
               </div>
               <div class="col-sm-6 col-md-6 col-lg-3 my-3">
                  <h4 class="footer_taital">Products</h4>
                  <div class="footer_menu_main">
                     <div class="footer_menu_left">
                        <div class="footer_menu">
                           <ul>
                              <li><a href="#" onClick={scrollToTop}>Badges (Coming soon)</a></li>
                              <li><a href="#" onClick={scrollToTop}>Winnings (Coming soon)</a></li>
                              <li><a href="#" onClick={scrollToTop}>Categories (Coming soon)</a></li>
                              <li><Link to='#'onClick={scrollToTop}>Scholarships (Coming soon)</Link></li>
                              <li><a href="#" onClick={scrollToTop}>Past Live Quiz (Coming soon)</a></li>                              
                           </ul>
                        </div>
                     </div>   
                  </div>
               </div> 
               <div class="col-sm-6 col-md-6 col-lg-3 my-3">
                  <h4 class="footer_taital">About Us</h4>
                  <div class="footer_menu_main">
                     <div class="footer_menu_left">
                        <div class="footer_menu">
                           <ul>
                              <li><Link to='/about' onClick={scrollToTop}>About Us</Link></li>
                              <li><Link to='/howtopart' onClick={scrollToTop}>How to participate</Link></li>
                              <li><Link to="/contact" onClick={scrollToTop}>Contact Us</Link></li>
                              <li><Link to="#" onClick={scrollToTop}>Live Show (Coming soon)</Link></li>
                           </ul>
                        </div>
                     </div>                    
                  </div>
               </div>

               <div class="col-sm-6 col-md-6 col-lg-3 my-3">
                  <h4 class="footer_taital">Help and support</h4>
                  <div class="footer_menu_main">
                     <div class="footer_menu_left">
                        <div class="footer_menu">
                           <ul>
                              <li><Link to='/terms&condition' onClick={scrollToTop}>Terms & Condition</Link></li>
                              <li><Link to="/privacyPolicy" onClick={scrollToTop}>Privacy Policy (Coming soon)</Link></li>
                              <li><Link to="#" onClick={scrollToTop}>FAQ (Coming soon)</Link></li>
                           </ul>
                        </div>
                     </div>                    
                  </div>
               </div>
            </div>
            <div class="footer_section_2">
               <div class="row">
                  <div class="col-sm-4 col-md-4 col-lg-3">
                     <div class="social_icon">
                        <ul>
                           <li> <a href=""><i class="fa-brands fa-facebook"style={{fontSize: '200%',color: 'white'}}></i></a> </li>
                           <li> <a href=""><i class="fa-brands fa-twitter"style={{fontSize: '200%',color: 'white'}}></i></a> </li>
                           <li> <a href=""><i class="fa-brands fa-instagram"style={{fontSize: '200%',color: 'white'}}></i></a> </li>
                           <li> <a href=""><i class="fa-solid fa-envelope"style={{fontSize: '200%',color: 'white'}}></i></a> </li>
                        </ul>
                     </div>
                  </div>
                  <div class="col-sm-8 col-md-8 col-lg-9">
                     <input type="text" class="address_text" placeholder="Enter your Email" name="text"/>
                     <button type="button" class="get_bt">SUBSCRIBE</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
      
      <div class="copyright_section">
         <div class="container"> 
            <p class="copyright_text">© 2024 QuizMe App. All Rights Reserved.</p>
         </div>
      </div>
    </div>
    </>
  )
}

export default Footer;