import React from 'react';
import github from '../../assets/icon/github.png';
import mail from '../../assets/icon/mail.png';
import facebook from '../../assets/icon/facebook.png';
import twitter from '../../assets/icon/twitter.png'
import linkedin from '../../assets/icon/linkdin.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div class="grid grid-flow-col gap-4 text-xl">
                <Link to='/about'><a class="link link-hover">About us</a></Link>
                <Link to='/contact'><a class="link link-hover">Contact</a></Link>
            </div>
            <div>
                <div class="grid grid-flow-col gap-4">
                    <a href="https://www.facebook.com/profile.php?id=100010110405257" target='_blank'><img className='mr-3 rounded-md w-8' src={facebook} alt="" /></a>
                    <a href="https://www.linkedin.com/in/md-mostafizur-rahman/" target="_blank"><img className='mr-3 rounded-md w-8' src={linkedin} alt="" /></a>
                    <a href="https://twitter.com/Mostafizur181" target="_blank"><img className='mr-3 rounded-md  w-9' src={twitter} alt="" /></a>
                    <a href="https://github.com/Mostafizur10681" target='_blank'><img className='mr-3 rounded-md w-8' src={github} alt="" /></a>
                    <a href="mailto: mostafizur15-10681@diu.edu.bd"><img className='mr-3 rounded-md w-10' src={mail} alt="" /></a>
                </div>
            </div>
            <div>
                <p>Copyright © 2022 - All right reserved by Md.Mostafizur Rahman</p>
            </div>
        </footer>
    );
};

export default Footer;