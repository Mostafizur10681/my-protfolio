import React from 'react';
import bg from '../../assets/bg.png';
import dark from '../../assets/bg-dark.jpg'
import profile from '../../assets/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUser, faBox } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div class="hero min-h-screen " style={{
            background: `url(${dark})`,
            backgroundSize: 'cover'
        }}>
            <div class="hero-content mx-auto  flex-col lg:flex-row">
                <img class="mask w-96 mask-circle" src={profile} />
                <div>
                    <h6 className='text-lg uppercase font-bold text-white'>HI There!</h6>
                    <h1 class="text-5xl font-bold text-white">I'm A <span className='text-primary'>MERN Stack Developer</span></h1>
                    <p class="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Link to='/about'><button class="btn btn-active btn-primary mr-5 rounded-full text-white"><FontAwesomeIcon className='mr-2' icon={faUser}></FontAwesomeIcon>More About Me</button></Link>
                    <Link to='/protfolio'><button class="btn btn-outline btn-primary rounded-full text-white"><FontAwesomeIcon className='mr-2' icon={faBox}></FontAwesomeIcon>Protfolio</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;