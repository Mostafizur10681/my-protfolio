import React from 'react';

import dark from '../../assets/bg-dark.jpg'
import profile from '../../assets/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBox, faDownload } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import sourav from '../../assets/sourav.png'
import './Banner.css'



const Banner = () => {

    return (
        <div class="hero min-h-screen " style={{
            background: `url(${dark})`,
            backgroundSize: 'cover'
        }}>
            <div class="hero-content mx-auto  flex-col lg:flex-row">
                <img class="mask w-96 mask-circle" src={sourav} />
                <div>
                    <h6 className='text-lg uppercase font-bold text-white'>HI There! </h6>
                    <h1 class="lg:text-5xl text-3xl  font-bold text-white">I'm A <span className='text-primary'>MERN Stack Developer</span></h1>
                    <p class="py-6 text-white">This is Md. Mostafizur Rahman. I'm a web designer & MERN Stack developer focused on crafting clean & user‑friendly experiences. My strength is I can learn new technology quickly. I am also a dediacted person.
                    </p>
                    <button class="btn btn-primary rounded-full mr-2 text-md text-white"><FontAwesomeIcon className='mr-2' icon={faDownload}></FontAwesomeIcon><a href="https://drive.google.com/file/d/10z1Z144HZRjQ57X1SOtYm2Oh4Gj2JAee/view?usp=sharing" target='_blank'>Download Resume</a> </button>
                    <Link to='/protfolio'><button class="btn btn-outline btn-primary rounded-full text-white"><FontAwesomeIcon className='mr-2' icon={faBox}></FontAwesomeIcon>Projects</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;