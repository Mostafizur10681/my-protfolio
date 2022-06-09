import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faUser } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import profile from '../../assets/profile.png';
import { Link } from 'react-router-dom';

const HomeAbout = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={profile} class="w-full lg:w-5/12  rounded-lg shadow-2xl" />
                <div>
                    <p className='text-xl'>Let me Introduce Myself</p>
                    <h1 class="text-6xl font-bold uppercase text-primary">About Me</h1>
                    <p class="py-6 text-xl">I'm a creative and quick learner Full Stack Web Developer. I've 2+ years experience in HTML, CSS, JavaScript. I have done some react projects and two full stack projects. Nowadays I'm working with MERN stack. I want to enhance my skills and creative quality by joining a good team.</p>
                    <Link to='/about'><button class="btn btn-primary mr-2 text-white"><FontAwesomeIcon icon={faUser} className='mr-1 text-white'></FontAwesomeIcon>Learn More</button></Link>
                    <Link to='/protfolio'><button class="btn btn-outline btn-primary  text-white"><FontAwesomeIcon className='mr-2' icon={faBox}></FontAwesomeIcon>Projects</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;