import { faBook, faCalendarDays, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Education = () => {
    return (
        <div className='w-4/5 mx-auto mb-24'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                <div>
                    <h1 className='text-center font-bold mb-12 text-xl lg:text-3xl uppercase'>EDUCATION <span className='text-primary'> Qualification</span></h1>
                    <div class="card w-full bg-base-100 mb-5 shadow-xl">
                        <div class="card-body">
                            <h2 className='text-xl lg:text-2xl pl-10'><FontAwesomeIcon className=' text-2xl pl-2 mr-2' icon={faGraduationCap}></FontAwesomeIcon><span className='font-bold'>BSC in CSE -</span> <span>Daffodil International University</span></h2>
                            <p className='pl-10 py-3'>I have completed my Bechelor Degree from Daffodil International University
                                in CSE. I got CGPA 3.68 out of 4.00
                            </p>
                            <p className='pl-10'><FontAwesomeIcon className='mr-1' icon={faCalendarDays}></FontAwesomeIcon> 2018-2021</p>
                        </div>
                    </div>
                    <div class="card w-full bg-base-100 mb-5 shadow-xl">
                        <div class="card-body">
                            <h2 className='text-xl lg:text-2xl pl-10 '><FontAwesomeIcon className=' text-2xl pl-2 mr-2' icon={faGraduationCap}></FontAwesomeIcon><span className='font-bold'>Higher Secondary-</span> <span>Sonar Bangla College</span></h2>
                            <p className='pl-10 py-3'>I have completed my Higher Secondary from Sonar Bangla College
                                . I got GPA 5 from out of 5.
                            </p>
                            <p className='pl-10'><FontAwesomeIcon className='mr-1' icon={faCalendarDays}></FontAwesomeIcon> 2014-2016</p>
                        </div>
                    </div>

                </div>
                <div>
                    <h1 className='text-center font-bold mb-12 text-xl lg:text-3xl uppercase'>Extra Carriculam <span className='text-primary'>Activities</span></h1>
                    <div class="card w-full bg-base-100 mb-5 shadow-xl">
                        <div class="card-body">
                            <h2 className='text-xl lg:text-2xl pl-10'><FontAwesomeIcon className=' text-2xl pl-2 mr-2' icon={faBook}></FontAwesomeIcon><span className='font-bold'>Web Development Course -</span> <span>Progamming Hero</span></h2>
                            <p className='pl-10 py-3'>I have completed my Web Development course from Programming Hero.
                            </p>
                            <p className='pl-10'><FontAwesomeIcon className='mr-1' icon={faCalendarDays}></FontAwesomeIcon> 2022- Present</p>
                        </div>
                    </div>

                    <div class="card w-full bg-base-100 mb-5 shadow-xl">
                        <div class="card-body">
                            <h2 className='text-xl lg:text-2xl pl-10'><FontAwesomeIcon className=' text-2xl pl-2 mr-2' icon={faBook}></FontAwesomeIcon><span className='font-bold'>Web Design-</span> <span>Coder Trust Bangladesh</span></h2>
                            <p className='pl-10 py-3'>I have completed my Web Designing course from CoderTrust Bangladesh.
                            </p>
                            <p className='pl-10'><FontAwesomeIcon className='mr-1' icon={faCalendarDays}></FontAwesomeIcon>2021</p>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Education;