import React from 'react';
import github from '../../assets/icon/github.png';
import mail from '../../assets/icon/mail.png';
import facebook from '../../assets/icon/facebook.png';
import whatsApp from '../../assets/icon/whatsapp.png';
import linkedin from '../../assets/icon/linkdin.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div class="grid grid-flow-col gap-4">
                <a class="link link-hover">About us</a>
                <a class="link link-hover">Contact</a>
            </div>
            <div>
                <div class="grid grid-flow-col gap-4">
                    <a href="https://www.facebook.com/profile.php?id=100010110405257" target='_blank'><img className='mr-3 w-8' src={facebook} alt="" /></a>
                    <a href="https://www.linkedin.com/in/md-mostafizur-rahman/" target="_blank"><img className='mr-3 w-8' src={linkedin} alt="" /></a>
                    <Link to='#'><img className='mr-3 w-8' src={whatsApp} alt="" /></Link>
                    <a href="https://github.com/Mostafizur10681" target='_blank'><img className='mr-3 w-8' src={github} alt="" /></a>
                    <a href="mailto: mostafizur15-10681@diu.edu.bd"><img className='mr-3 w-8' src={mail} alt="" /></a>
                </div>
            </div>
            <div>
                <p>Copyright © 2022 - All right reserved by Md.Mostafizur Rahman</p>
            </div>
        </footer>
    );
};

export default Footer;