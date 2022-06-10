import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import profile from '../../assets/profile.png';
import facebook from '../../assets/icon/facebook.png';
import whatsApp from '../../assets/icon/whatsapp.png';
import linkedin from '../../assets/icon/linkdin.png';
import { faPhone, faLocationDot, faUser, faFlag, faCalendarDays, faDownload } from '@fortawesome/free-solid-svg-icons'
import twitter from '../../assets/icon/twitter.png'
import Education from './Education';
import github from '../../assets/icon/github.png';
import mail from '../../assets/icon/mail.png';
import Skills from './Skills';


const About = () => {
    return (
        <div className='mt-12'>
            <div>
                <h1 className='font-bold uppercase text-3xl lg:text-6xl text-center mb-5'>About <span className='text-primary'>Me</span></h1>
                <p className='text-center text-md lg:text-2xl'>I'm a MERN stack Developer. I'm doing design & development with clean code.</p>
                <div class="hero min-h-screen">
                    <div class="hero-content flex-col gap-5 lg:flex-row">
                        <img src={profile} class="w-80 lg:w-96  rounded-lg shadow-2xl" />
                        <div class="card w-full lg:w-96 bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h5 class="text-xl font-bold mb-2 "><FontAwesomeIcon className=' mr-2' icon={faUser}></FontAwesomeIcon> Md.Mostafizur Rahman</h5>
                                <h5 class="text-xl font-bold mb-2 "><FontAwesomeIcon className=' mr-2' icon={faCalendarDays}></FontAwesomeIcon> 22 February 1997</h5>
                                <h5 class="text-xl font-bold mb-2 "><FontAwesomeIcon className=' mr-2' icon={faFlag}></FontAwesomeIcon> Bangladeshi</h5>
                                <h5 class="text-xl font-bold mb-2"><FontAwesomeIcon className=' mr-2' icon={faLocationDot}></FontAwesomeIcon> Dhaka, Bangladesh</h5>
                                <h5 class="text-xl font-bold mb-2"><FontAwesomeIcon className=' mr-2' icon={faPhone}></FontAwesomeIcon> 01644823123</h5>
                                <div className='flex items-center my-5'>
                                    <a href="https://www.facebook.com/profile.php?id=100010110405257" target='_blank'><img className='mr-3 rounded-md w-8' src={facebook} alt="" /></a>
                                    <a href="https://www.linkedin.com/in/md-mostafizur-rahman/" target="_blank"><img className='mr-3 rounded-md w-8' src={linkedin} alt="" /></a>
                                    <a href="https://twitter.com/Mostafizur181" target="_blank"><img className='mr-3 rounded-md w-10' src={twitter} alt="" /></a>
                                    <a href="https://github.com/Mostafizur10681" target='_blank'><img className='mr-3 rounded-md w-8' src={github} alt="" /></a>
                                    <a href="mailto: mostafizur15-10681@diu.edu.bd"><img className='mr-3 rounded-md w-10' src={mail} alt="" /></a>
                                </div>
                                <button class="btn btn-primary rounded-full text-lg text-white"><FontAwesomeIcon className='mr-2' icon={faDownload}></FontAwesomeIcon><a href="https://drive.google.com/file/d/1D3swU42HGXKORtngBiEpYTc3EcDRULEO/view?usp=sharing" target='_blank'>Download My Resume</a> </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Education></Education>
            <Skills></Skills>
        </div>
    );
};

export default About;