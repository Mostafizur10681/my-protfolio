import React from 'react';
import github from '../../assets/icon/github.png';
import mail from '../../assets/icon/mail.png';
import facebook from '../../assets/icon/facebook.png';
import twitter from '../../assets/icon/twitter.png'
import linkedin from '../../assets/icon/linkdin.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer class="footer p-10 bg-black text-neutral-content">
                <div className='w-80'>
                    <h2 className='text-3xl footer-title text-white text'>Md. Mostafizur Rahman</h2>
                    <p className='text-md'>I'm a web designer & MERN Stack developer focused on crafting clean & user‑friendly experiences. My strength is I can learn new technology quickly. I always make websites that have unique designs
                        and also develop with good performance rate. I am always try to write code clean & perfect.</p>
                </div>
                <div>
                    <span class="footer-title text-white text-xl">Important Links</span>
                    <Link to='/' className='link link-hover text-md'>Home</Link>
                    <Link to='/about' className="link link-hover text-md">About</Link>
                    <Link to='/protfolio' className='link link-hover text-md'>Projects</Link>
                    <Link to='/contact' className='link link-hover text-md'>Contact</Link>
                </div>
                <div>
                    <span class="footer-title text-white text-xl">Contact Info</span>
                    <p className='text-md'>+8801644823123</p>
                    <a href="mailto: mostafizur15-10681@diu.edu.bd" className='text-md'>mostafizur15-10681@diu.edu.bd</a>
                    <a href="mailto: sourav10681@gmail.com" className='text-md'>sourav10681@gmail.com</a>

                </div>
                <div>
                    <span class="footer-title text-white">Social Links</span>
                    <a href="https://www.facebook.com/profile.php?id=100010110405257" target='_blank'>Facebook</a>
                    <a href="https://www.linkedin.com/in/md-mostafizur-rahman/" target="_blank">Linkedin</a>
                    <a href="https://twitter.com/Mostafizur181" target="_blank">Twitter</a>
                    <a href="https://github.com/Mostafizur10681" target='_blank'>GitHub</a>

                </div>


            </footer>
            <div className='bg-black py-4'>
                <p className='text-center text-white text-sm'>&copy; 2022 | All Right Reserved by Md. Mostafizur Rahman</p>
            </div>
        </div>
    );
};

export default Footer;