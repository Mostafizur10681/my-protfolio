import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faLaptopCode, faLaptopMedical } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Services.css'

const Services = () => {
    return (
        <div className='my-12 py-12 bg-slate-200 px-5 lg:px-12'>
            <p className='text-center text-xl'>Which Service I will Provide You</p>
            <h1 className='text-3xl lg:text-6xl uppercase font-bold text-center text-primary mb-5'>Services</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 '>
                <div class="card w-full lg:w-96 bg-base-100 cardHover shadow-xl">
                    <figure class="px-10 pt-10">
                        <FontAwesomeIcon className='text-4xl' icon={faLaptop}></FontAwesomeIcon>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title uppercase font-bold">Web Design</h2>
                        <p>I do UI/UX design. I always try to doing unique design that helps your website get unique look </p>

                    </div>
                </div>
                <div class="card w-full lg:w-96  bg-base-100 cardHover shadow-xl">
                    <figure class="px-10 pt-10">
                        <FontAwesomeIcon className='text-4xl' icon={faLaptopCode}></FontAwesomeIcon>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title uppercase font-bold">Web Development</h2>
                        <p>I do Web Development with forntend & Backend. For developing I use many techonology like React js, Node Js, MongoDb, Express Js etc</p>

                    </div>
                </div>
                <div class="card w-full lg:w-96  bg-base-100 cardHover shadow-xl">
                    <figure class="px-10 pt-10">
                        <FontAwesomeIcon className='text-4xl' icon={faLaptopMedical}></FontAwesomeIcon>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title uppercase font-bold">Error Debuging</h2>
                        <p>I do error bugging very fast.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;