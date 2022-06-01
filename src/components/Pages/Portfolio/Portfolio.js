import React from 'react';
import gadget from '../../assets/gadget.jpg';
import carWareHouse from '../../assets/carWareHouse.jpg';
import englishTutor from '../../assets/EnglishTutor.jpg';
import macBook from '../../assets/macBook.jpg';

const Protfolio = () => {
    return (
        <div className='text-center px-5 lg:px-12 my-12'>
            <h1 className='text-center font-bold mb-12 text-5xl uppercase'>My <span className='text-primary'>Protfolio</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                <div class="card card-compact mb-5 w-72 lg:w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={gadget} alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <div class="card-actions justify-start">
                            <a href="https://car-warehouse-47794.web.app/" target='_blank'><button class="btn btn-outline btn-primary text-white text-lg">Live Site</button></a>
                        </div>
                    </div>
                </div>
                <div class="card card-compact mb-5 w-72 lg:w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={carWareHouse} alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <div class="card-actions justify-start">
                            <a href="https://car-warehouse-47794.web.app/" target='_blank'><button class="btn btn-outline btn-primary text-white text-lg">Live Site</button></a>
                        </div>
                    </div>
                </div>
                <div class="card card-compact mb-5 w-72 lg:w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={englishTutor} alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <div class="card-actions justify-start">
                            <a href="https://english-tutor-react.web.app/" target='_blank'><button class="btn btn-outline btn-primary text-white text-lg">Live Site</button></a>
                        </div>
                    </div>
                </div>
                <div class="card card-compact mb-5 w-72 lg:w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={macBook} alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <div class="card-actions justify-start">
                            <a href="https://mac-book-pro-analysis.netlify.app/" target='_blank'><button class="btn btn-outline btn-primary text-white text-lg">Live Site</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Protfolio;