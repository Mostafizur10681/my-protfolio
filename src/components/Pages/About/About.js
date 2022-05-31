import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import profile from '../../assets/profile.png';
import facebook from '../../assets/icon/facebook.png';
import whatsApp from '../../assets/icon/whatsapp.png';
import linkedin from '../../assets/icon/linkdin.png';
import { faPhone, faLocationDot, faUser, faFlag, faCalendarDays, faDownload } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Education from './Education';
import github from '../../assets/icon/github.png';
import mail from '../../assets/icon/mail.png';
import Skills from './Skills';


const About = () => {
    return (
        <div>
            <div className='mt-12'>
                <h1 className='font-bold uppercase text-3xl lg:text-6xl text-center mb-5'>About <span className='text-primary'>Me</span></h1>
                <p className='text-center text-md lg:text-2xl'>I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.</p>
                <div class="hero min-h-screen">
                    <div class="hero-content flex-col lg:flex-row">
                        <img src={profile} class="max-w-sm rounded-lg shadow-2xl mr-12" />
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h5 class="text-xl font-bold mb-2 "><FontAwesomeIcon className='text-primary mr-2' icon={faUser}></FontAwesomeIcon>Name : Md.Mostafizur Rahman</h5>
                                <h5 class="text-xl font-bold mb-2 "><FontAwesomeIcon className='text-primary mr-2' icon={faCalendarDays}></FontAwesomeIcon>Date of Birth : 22 February 1997</h5>
                                <h5 class="text-xl font-bold mb-2 "><FontAwesomeIcon className='text-primary mr-2' icon={faFlag}></FontAwesomeIcon>Nationality : Bangladeshi</h5>
                                <h5 class="text-xl font-bold mb-2"><FontAwesomeIcon className='text-primary mr-2' icon={faLocationDot}></FontAwesomeIcon>Addess : Dhaka, Bangladesh</h5>
                                <h5 class="text-xl font-bold mb-2"><FontAwesomeIcon className='text-primary mr-2' icon={faPhone}></FontAwesomeIcon>phone : 01644823123</h5>
                                <div className='flex items-center my-5'>
                                    <Link to='#'><img className='mr-3 w-8' src={facebook} alt="" /></Link>
                                    <Link to='#'><img className='mr-3 w-8' src={linkedin} alt="" /></Link>
                                    <Link to='#'><img className='mr-3 w-8' src={whatsApp} alt="" /></Link>
                                    <Link to='#'><img className='mr-3 w-8' src={github} alt="" /></Link>
                                    <Link to='#'><img className='mr-3 w-8' src={mail} alt="" /></Link>
                                </div>
                                <button class="btn btn-primary rounded-full text-lg text-white"><FontAwesomeIcon className='mr-2' icon={faDownload}></FontAwesomeIcon>Download My CV</button>
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