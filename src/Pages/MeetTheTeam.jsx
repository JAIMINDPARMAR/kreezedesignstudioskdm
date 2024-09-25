import React, { useState } from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import team1 from "../Images/About/Team/team-1.jpg";
import team2 from "../Images/About/Team/team-2.jpg";
import team3 from "../Images/About/Team/team-3.jpg";
import team4 from "../Images/About/Team/team-4.jpg";
import team5 from "../Images/About/Team/team-5.jpg";
import team6 from "../Images/About/Team/team-6.jpg";
import { MainBanner } from "./MainBanner";
import banner from "../Images/Home/facade1.png";
import teamData from "../Asserts/TeamData";
import TitleSection from "./TitleSection";
import { Slide } from "react-reveal";
import ModalMeetTheTeam from "../Component/ModalMeetTheTeam";

const MeetTheTeam = () => {
    const [showModal , setShowModal] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    // Function to handle click on image
    const handleImageClick = (name, designation, img,descpara) => {
        setSelectedMember({ name, designation, img ,descpara});
        setShowModal(true);
    };

  return (
    <>
      {/* <MainBanner title="Meet The Team" 
            imgURL={"https://dessau.qodeinteractive.com/wp-content/uploads/2018/06/p-meet-the-team-title-img-1.jpg?id="} 
            para="Spoin eravida gibh sel velit tuctor aliquet. Aenean dyfi iysda asslicikoi tudin lorem quis bibendum auctor" /> */}
      <TitleSection
        title="Meet The Team"
        titlePara="Spoin eravida gibh sel velit tuctor aliquet. Aenean dyfi iysda asslicikoi tudin lorem quis bibendum auctor"
      />
      <section className="about-section-2-con">
        <div className="container">
          <div className="row">
            {teamData.map((v, i) => {
              return (
                <>
                  <div className="col-md-4">
                  <Slide bottom>
                  <div className="about-section-2-card-con">
                      <div className="about-section-2-card-body">
                        <img src={v.teamImg} alt="team1" onClick={() => handleImageClick(v.name, v.designation, v.teamImg, v.descpara)} />
                        {/* <div className="about-section-2-card-details">
                          <h3>{v.name}</h3>
                          {v.designation.map((e) => (
                            <p> {e}</p>
                          ))}

                          <div className="about-section-card-social-media-con">
                            <a>
                              <RiWhatsappFill />
                            </a>
                            <a>
                              <AiFillInstagram />
                            </a>
                            <a>
                              <FaFacebookSquare />
                            </a>
                            <a>
                              <IoLogoTwitter />
                            </a>
                          </div>
                        </div> */}
                  {/* {showModal? <ModalMeetTheTeam showModal={showModal} name={v.name} designation ={v.designation} img={v.teamImg} setShowModal={setShowModal} /> :<></>} */}
                      </div>
                    </div>
                  </Slide>
                  </div>
                </>
              );
              
            })}
            {showModal && selectedMember && (
                <ModalMeetTheTeam
                    showModal={showModal}
                    name={selectedMember.name}
                    designation={selectedMember.designation}
                    img={selectedMember.img}
                    descpara={selectedMember.descpara}
                    setShowModal={setShowModal}
                />
            )}
            

            {/* <div className='col-md-4'>
                            <div className='about-section-2-card-con'>
                                <div className='about-section-2-card-body'>
                                    <img src={team2} alt='team1' />
                                    <div className='about-section-2-card-details'>
                                        <h3>RUSSELL REED</h3>
                                        <p>Project Manager</p>
                                        <div className='about-section-card-social-media-con'>
                                            <a>
                                                <RiWhatsappFill />
                                            </a>
                                            <a>
                                                <AiFillInstagram />
                                            </a>
                                            <a>
                                                <FaFacebookSquare />
                                            </a>
                                            <a>
                                                <IoLogoTwitter />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='about-section-2-card-con'>
                                <div className='about-section-2-card-body'>
                                    <img src={team3} alt='team1' />
                                    <div className='about-section-2-card-details'>
                                        <h3>CHERYL RAY</h3>
                                        <p>Interior Designer</p>
                                        <div className='about-section-card-social-media-con'>
                                            <a>
                                                <RiWhatsappFill />
                                            </a>
                                            <a>
                                                <AiFillInstagram />
                                            </a>
                                            <a>
                                                <FaFacebookSquare />
                                            </a>
                                            <a>
                                                <IoLogoTwitter />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='about-section-2-card-con'>
                                <div className='about-section-2-card-body'>
                                    <img src={team4} alt='team1' />
                                    <div className='about-section-2-card-details'>
                                        <h3>BRYAN THOMAS</h3>
                                        <p>Civil Engineer</p>
                                        <div className='about-section-card-social-media-con'>
                                            <a>
                                                <RiWhatsappFill />
                                            </a>
                                            <a>
                                                <AiFillInstagram />
                                            </a>
                                            <a>
                                                <FaFacebookSquare />
                                            </a>
                                            <a>
                                                <IoLogoTwitter />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='about-section-2-card-con'>
                                <div className='about-section-2-card-body'>
                                    <img src={team5} alt='team1' />
                                    <div className='about-section-2-card-details'>
                                        <h3>ANNA JACKSON</h3>
                                        <p>Architect</p>
                                        <div className='about-section-card-social-media-con'>
                                            <a>
                                                <RiWhatsappFill />
                                            </a>
                                            <a>
                                                <AiFillInstagram />
                                            </a>
                                            <a>
                                                <FaFacebookSquare />
                                            </a>
                                            <a>
                                                <IoLogoTwitter />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='about-section-2-card-con'>
                                <div className='about-section-2-card-body'>
                                    <img src={team6} alt='team1' />
                                    <div className='about-section-2-card-details'>
                                        <h3>DYLAN CARTER</h3>
                                        <p>Creative Director</p>
                                        <div className='about-section-card-social-media-con'>
                                            <a>
                                                <RiWhatsappFill />
                                            </a>
                                            <a>
                                                <AiFillInstagram />
                                            </a>
                                            <a>
                                                <FaFacebookSquare />
                                            </a>
                                            <a>
                                                <IoLogoTwitter />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetTheTeam;
