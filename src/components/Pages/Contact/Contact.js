import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link } from 'react-router-dom';
import github from '../../assets/icon/github.png';
import mail from '../../assets/icon/mail.png';
import facebook from '../../assets/icon/facebook.png';
import whatsApp from '../../assets/icon/whatsapp.png';
import linkedin from '../../assets/icon/linkdin.png';

const Contact = () => {
    return (
        <div className='mt-12'>
            <h1 className='font-bold uppercase text-3xl lg:text-6xl text-center mb-5'>Get <span className='text-primary'>In Touch</span></h1>
            <p className='text-center text-md lg:text-2xl'>I’M ALWAYS OPEN TO DISCUSSING WEB DEVELOPMENT WORK OR PARTNERSHIPS.</p>
            <div class="hero min-h-screen ">
                <div class="hero-content gap-24 flex-col lg:flex-row">
                    <div class="card w-72  bg-base-100 shadow-xl">
                        <div class="card-body">
                            <div>
                                <h5>Phone</h5>
                                <h4><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> 01644823123</h4>
                            </div>
                            <div className='mt-3'>
                                <h5 className='mb-2'>Email</h5>
                                <h4 className='mb-1'><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> mostafizur15-10681@diu.edu.bd</h4>
                                <h4><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> sourav10681@gmail.com</h4>
                            </div>
                            <h5 className='mt-5'>Social Profiles</h5>
                            <div className='grid grid-cols-3 gap-4 mt-2'>
                                <a href="https://www.facebook.com/profile.php?id=100010110405257" target='_blank'><img className='mr-3 w-8' src={facebook} alt="" /></a>
                                <a href="https://www.linkedin.com/in/md-mostafizur-rahman/" target="_blank"><img className='mr-3 w-8' src={linkedin} alt="" /></a>
                                <Link to='#'><img className='mr-3 w-8' src={whatsApp} alt="" /></Link>
                                <a href="https://github.com/Mostafizur10681" target='_blank'><img className='mr-3 w-8' src={github} alt="" /></a>
                                <a href="mailto: mostafizur15-10681@diu.edu.bd"><img className='mr-3 w-8' src={mail} alt="" /></a>
                            </div>
                        </div>
                    </div>

                    <div class="card  bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h5>If you need any help, project . Feel free to contact me. please fill out the form below and I will reply you shortly.</h5>
                            <form action="">
                                <input type="text" placeholder="Your Name" class="input input-bordered input-primary h-16 mb-8 rounded-xl my-3 w-full max-w-md mr-3" />
                                <input type="email" placeholder="Your Email" class="input input-bordered input-primary h-16 rounded-xl mb-3 w-full max-w-xs" />
                                <input type="textarea" placeholder="Message" class="input h-28 input-bordered w-full rounded-xl input-lg" />
                                <br />
                                <button class="btn btn-primary rounded-full text-lg mt-4 input-primary text-white">Message Me</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Contact;