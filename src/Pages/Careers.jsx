import React from 'react'
import "../Css/Careers.css";
import { MainBanner } from './MainBanner';
import banner from "../Images/Home/Drawings.jpg";
import TitleSection from './TitleSection';
import { Fade, Slide } from 'react-reveal';
import NewBanner from './NewBanner';

const Careers = () => {
  return (
    <>
    {/* <TitleSection title='Careers' titlePara='Spoin eravida gibh sel velit tuctor aliquet. Aenean dyfi iysda asslicikoi tudin lorem quis bibendum auctor' /> */}
    {/* <MainBanner title="Careers" imgURL={banner} para="Spoin eravida gibh sel velit tuctor aliquet. Aenean dyfi iysda asslicikoi tudin lorem quis bibendum auctor" /> */}
    <NewBanner
                title="Careers"
                imgURL={banner}
                para="At Kreeze Design Studio, we believe that great design starts with a great team. We're always on the lookout for passionate individuals who share our vision for creating stunning spaces. "
            />
    <section>
      <div className='container'>
        <div className='benefits-of-joining mb-4'>
        <h2> BENEFITS OF JOINING THE TEAM </h2>
              <p> 
              We want to work with exceptional people to contribute to our innovative team. Open , dynamic and passionate people are welcome with motivation to explore their creative minds to create creative solutions to the architectural problems today. Besides these qualities they aso have to be talented enough to join our team.
              </p>
        </div>
        <div className='row'>
          <div className='col-md-6 mb-4'>
              <Slide left>
              <h4 className='careers-developement'> Diverse Project Experience</h4>
              <p> 
              Work on a variety of projects across different sectors—residential, commercial, hospitality, and more. This diversity not only enriches your portfolio but also enhances your adaptability and problem-solving skills in various design contexts.              </p>
              </Slide> 
          </div>
          <div className='col-md-6 mb-4'>
              <Slide right>
              <h4 className='careers-developement'> Career Advancement

              </h4>
              <p> 
              As a member of our team, you’ll have clear pathways for advancement. We value ambition and initiative, offering opportunities for leadership roles and specialized positions as you grow with us.

</p>
              </Slide>
          </div>
          <div className='col-md-6 mb-4'>
              <Slide left>
              <h4 className='careers-developement'> Client Engagement
              </h4>
              <p> 
              Work directly with clients to understand their visions and needs. This hands-on experience helps you develop strong communication and interpersonal skills, essential for building lasting client relationships and delivering successful projects.

</p>
              </Slide>
          </div>
          <div className='col-md-6 mb-4'>
              <Slide right>
              <h4 className='careers-developement'>Innovative Work Environment

              </h4>
              <p> 
              Our studio encourages creativity and experimentation. You'll be immersed in an inspiring atmosphere where fresh ideas are welcomed, allowing you to explore new materials, techniques, and design philosophies.


</p>
              </Slide>
          </div>
          <div className='col-md-6 mb-4'>
              <Slide left>
              <h4 className='careers-developement'> 
              Work-Life Balance
              </h4>
              <p> 
              We understand the importance of balance. Our studio promotes flexible working arrangements and a supportive culture, ensuring you can thrive both professionally and personally.


</p>
              </Slide>
          </div>
        </div>
      </div>
    </section>
    <section>
    <div className="container">
  <div className="well">
    <Slide bottom>
    <form action="#" method="post">
     
     <div>
       <input
         type="text"
         placeholder='Name'
         name="username"
         id="username"
         required=""
       />
       {/* <label htmlFor="login-username">Username</label> */}
     </div>
     
     <div>
       <input
         type="email"
         placeholder='Email'
         name="email"
         id="email"
         required=""
       />
       {/* <label htmlFor="login-username">Username</label> */}
     </div>
     <div>
       <input
         type="text"
         placeholder='Designation'
         name="designation"
         id="designation"
         required=""
       />
       {/* <label htmlFor="login-username">Username</label> */}
     </div>
     <textarea id="story" name="story" rows="5" cols="33" placeholder='type your message here....'  >
     
</textarea>
     {/* <a href="#" id="forgot-passwd">
       Forgot Password?
     </a> */}
     <div className='main-btn'> 
     <button className="button" id="btn-submit">
       <span className="button-text">Send</span>
       <div className="button-loader">
         <div />
         <div />
         <div />
       </div>
     </button>
     </div>
   </form>
    </Slide>
    {/* <p>
      Don't have an account? <a href="#">Sign Up</a>.
    </p> */}
  </div>
</div>
    </section>
    </>
  )
}

export default Careers