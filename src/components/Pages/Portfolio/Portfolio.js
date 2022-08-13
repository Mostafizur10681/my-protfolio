import React from 'react';
import gadget from '../../assets/gadget.jpg';
import carWareHouse from '../../assets/carWareHouse.jpg';
import englishTutor from '../../assets/EnglishTutor.jpg';
import macbook from '../../assets/macBook.jpg';
import electronics from '../../assets/electronics.jpg'
import car2 from '../../assets/car2.jpg';
import car3 from '../../assets/car3.jpg';
import gadget2 from '../../assets/gadget2.jpg';
import gadget3 from '../../assets/gadget3.jpg';
import elo2 from '../../assets/elo2.jpg';
import ele3 from '../../assets/elo3.jpg';
import tutor2 from '../../assets/tutor2.jpg';
import tutor3 from '../../assets/tutor3.jpg';
import mac2 from '../../assets/mac2.jpg';
import mac3 from '../../assets/mac3.jpg';
import community1 from '../../assets/cummunity-1.jpg';
import community2 from '../../assets/community-2.jpg';
import community3 from '../../assets/community-3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Slider from "react-slick";

const Protfolio = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='text-center px-6 lg:px-12 my-12'>
            <h1 className='text-center font-bold mb-12 text-3xl lg:text-6xl uppercase'>My <span className='text-primary'>Projects</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                <div class="card card-compact mb-5 w-full lg:w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={gadget} alt="Gadget" />
                    </figure>
                    <div class="card-body">
                        <h2 className='text-center font-bold text-2xl uppercase'>Computer Manufacturer</h2>
                        <span className='text-lg font-bold text-gray-500'>
                            <span className='uppercase text-primary text-xl'>Technologies:</span> React JS, Node JS, JavaScript(ES6), Express JS, MongoDB, Firebase
                        </span>
                        <div class="card-actions justify-center">
                            <label for="manufacturer-modal" class="btn btn-outline btn-primary text-white text-md modal-button">Details<FontAwesomeIcon className='ml-1' icon={faArrowRight}></FontAwesomeIcon></label>
                            {/* <button class="">Details </button> */}
                            <a href="https://computer-manufacturer-c3b6a.web.app/" target='_blank'><button class="btn btn-outline btn-primary text-white text-md">Live Site</button></a>
                            <a href="https://github.com/Mostafizur10681/computer-manufacturer" target='_blank'><button class="btn btn-outline btn-primary text-white text-md">GitHub</button></a>

                        </div>
                    </div>
                </div>
                <div class="card card-compact mb-5 w-full lg:w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={carWareHouse} alt="CarWareHouse" />
                    </figure>
                    <div class="card-body">
                        <h2 className='text-center font-bold text-2xl uppercase'>Car WareHouse</h2>
                        <span className='text-lg font-bold text-gray-500'>
                            <span className='uppercase text-primary text-xl'>Technologies:</span> React JS, Node JS, JavaScript(ES6), Express JS, MongoDB, Firebase
                        </span>
                        <div class="card-actions justify-center">
                            <label for="carwarehouse-modal" class="btn btn-outline btn-primary text-white text-md modal-button">Details<FontAwesomeIcon className='ml-1' icon={faArrowRight}></FontAwesomeIcon></label>
                            <a href="https://car-warehouse-47794.web.app/" target='_blank'><button class="btn btn-outline btn-primary text-white text-md">Live Site</button></a>
                            <a href="https://github.com/Mostafizur10681/car-warehouse-client" target='_blank'><button class="btn btn-outline btn-primary text-white text-md">GitHub</button></a>

                        </div>
                    </div>
                </div>
                <div class="card card-compact mb-5 w-full lg:w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={englishTutor} alt="EnglishTutor" />
                    </figure>
                    <div class="card-body">
                        <h2 className='text-center font-bold text-2xl uppercase'>English Tutor</h2>
                        <span className='text-lg font-bold text-gray-500'>
                            <span className='uppercase text-primary text-xl'>Technologies:</span> React JS, React Bootstrap, JavaScript(ES6), Firebase
                        </span>
                        <div class="card-actions justify-center">
                            <label for="englishtutor-modal" class="btn btn-outline btn-primary text-white text-md modal-button">Details<FontAwesomeIcon className='ml-1' icon={faArrowRight}></FontAwesomeIcon></label>
                            <a href="https://english-tutor-react.web.app/" target='_blank'><button class="btn btn-outline btn-primary text-white text-md">Live Site</button></a>
                            <a href="https://github.com/Mostafizur10681/english-tutor" target='_blank'><button class="btn btn-outline btn-primary text-white text-md">GitHub</button></a>

                        </div>
                    </div>
                </div>
                <div class="card card-compact mb-5 w-full lg:w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={macbook} alt="MacBook" />
                    </figure>
                    <div class="card-body">
                        <h2 className='text-center font-bold text-2xl uppercase'>Mac Book Pro</h2>
                        <span className='text-lg font-bold text-gray-500'>
                            <span className='uppercase text-primary text-xl'>Technologies:</span>Bootstrap,React Router, Context API,Custom Hook, Netlify
                        </span>
                        <div class="card-actions justify-center">
                            <label for="macbook-modal" class="btn btn-outline btn-primary text-white text-md modal-button">Details<FontAwesomeIcon className='ml-1' icon={faArrowRight}></FontAwesomeIcon></label>

                            <a href="https://mac-book-pro-analysis.netlify.app/" target='_blank'><button class="btn btn-outline btn-primary text-white text-md">Live Site</button></a>
                            <a href="https://github.com/Mostafizur10681/mac-book-pro" target='_blank'><button class="btn btn-outline btn-primary text-white text-md">GitHub</button></a>

                        </div>
                    </div>
                </div>

                {/* Community Center */}

                <div class="card card-compact mb-5 w-full lg:w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={community1} alt="Dhanmondi Community Center" />
                    </figure>
                    <div class="card-body">
                        <h2 className='text-center font-bold text-2xl uppercase'>Dhanmondi Community Center</h2>
                        <span className='text-lg font-bold text-gray-500'>
                            <span className='uppercase text-primary text-xl'>Technologies:</span>Bootstrap, Media Query, Netlify.
                        </span>
                        <div class="card-actions justify-center">
                            <label for="community-modal" class="btn btn-outline btn-primary text-white text-md modal-button">Details<FontAwesomeIcon className='ml-1' icon={faArrowRight}></FontAwesomeIcon></label>

                            <a href="https://dhanmondi-cummunity-center.netlify.app/" target='_blank'><button class="btn btn-outline btn-primary text-white text-md">Live Site</button></a>
                            <a href="https://github.com/Mostafizur10681/convention-center" target='_blank'><button class="btn btn-outline btn-primary text-white text-md">GitHub</button></a>

                        </div>
                    </div>
                </div>
                <div class="card card-compact mb-5 w-full lg:w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={electronics} alt="MacBook" />
                    </figure>
                    <div class="card-body">
                        <h2 className='text-center font-bold text-2xl uppercase'>Electronics</h2>
                        <span className='text-lg font-bold text-gray-500'>
                            <span className='uppercase text-primary text-xl'>Technologies:</span>Bootstrap,React Router, Context API,Custom Hook, Netlify
                        </span>
                        <div class="card-actions justify-center">
                            <label for="electronics-modal" class="btn btn-outline btn-primary text-white text-md modal-button">Details<FontAwesomeIcon className='ml-1' icon={faArrowRight}></FontAwesomeIcon></label>

                            <a href="https://timely-longma-a7558f.netlify.app/" target='_blank'><button class="btn btn-outline btn-primary text-white text-md">Live Site</button></a>
                            <a href="https://github.com/Mostafizur10681/mac-book-pro" target='_blank'><button class="btn btn-outline btn-primary text-white text-md">GitHub</button></a>

                        </div>
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="manufacturer-modal" class="modal-toggle" />
                    <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box">
                            <label for="manufacturer-modal" class="btn btn-sm btn-circle absolute bg-red-600 right-2 top-2">✕</label>
                            <Slider {...settings} className='mb-6'>
                                <div>
                                    <img src={gadget} alt="" srcset="" />
                                </div>
                                <div>
                                    <img src={gadget2} alt="" srcset="" />
                                </div>
                                <div>
                                    <img src={gadget3} alt="" srcset="" />
                                </div>

                            </Slider>
                            <div>
                                <h2 className='text-primary font-bold text-2xl text-left'>Computer Manufacturer Features:</h2>
                                <p className='text-left text-md'>
                                    1. Users can visit all pages and see our user’s feedback, also user can see all product.
                                </p>
                                <p className='text-left text-md'>
                                    2. User can see product details & also user ordered product.
                                </p>
                                <p className='text-left text-md'>
                                    3. Have user feedback process and order review on user dashboard.

                                </p>
                                <p className='text-left text-md'>
                                    4. Have an admin dashboard where an admin can manage the full site, orders, and users. Users cannot visit on admin dashboard.
                                </p>
                            </div>
                            <div className='mt-2'>
                                <h2 className='text-primary font-bold text-2xl text-left'>Project Details:</h2>
                                <p className='text-left text-md'>
                                    1. It's a single page Web App. Where I use React Router.v6 for build this.
                                </p>
                                <p className='text-left text-md'>
                                    2. For server side here use "heroku" server.
                                </p>
                                <p className='text-left text-md'>
                                    3. Implement Private Route and Redirect history. And For login process uses Email, Pass and Google.

                                </p>
                                <p className='text-left text-md'>
                                    4. For designing, here I use DaisyUI Tailwind CSS. Also try to make responsive for mobile and dex-top.
                                </p>
                                <p className='text-left text-md'>
                                    4. For security I use it "JWT" Token.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <input type="checkbox" id="carwarehouse-modal" class="modal-toggle" />
                    <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box">
                            <label for="carwarehouse-modal" class="btn btn-sm btn-circle absolute bg-red-600 right-2 top-2">✕</label>
                            <Slider {...settings} className='mb-6'>
                                <div>
                                    <img src={carWareHouse} alt="" srcset="" />
                                </div>
                                <div>
                                    <img src={car2} alt="" srcset="" />
                                </div>
                                <div>
                                    <img src={car3} alt="" srcset="" />
                                </div>

                            </Slider>
                            <div>
                                <h2 className='text-primary font-bold text-2xl text-left'>Car WareHouse Features:</h2>
                                <p className='text-left text-md'>
                                    1. User can see some product in home page, some product see in the manage inventory page
                                </p>
                                <p className='text-left text-md'>
                                    2. User can see product details. If user click update button they can single product. Then user can restore & delivered product.
                                </p>
                                <p className='text-left text-md'>
                                    3. User can see all product in Manage Inventory page. User also manage product like update & delete.

                                </p>
                                <p className='text-left text-md'>
                                    4. User can add new Inventory.
                                </p>
                                <p className='text-left text-md'>
                                    4. In My Items page user can only their specific inventory item.
                                </p>
                            </div>
                            <div className='mt-2'>
                                <h2 className='text-primary font-bold text-2xl text-left'>Project Details:</h2>
                                <p className='text-left text-md'>
                                    1. It's a single page Web App. Where I use React Router.v6 for build this.
                                </p>
                                <p className='text-left text-md'>
                                    2. For server side here use "heroku" server.
                                </p>
                                <p className='text-left text-md'>
                                    3. Implement Private Route and Redirect history. And For login process uses Email, Pass and Google.

                                </p>
                                <p className='text-left text-md'>
                                    4. For designing, here I use React Bootstrap. Also try to make responsive for mobile and dex-top.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <input type="checkbox" id="englishtutor-modal" class="modal-toggle" />
                    <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box">
                            <label for="englishtutor-modal" class="btn btn-sm btn-circle absolute bg-red-600 right-2 top-2">✕</label>
                            <Slider {...settings} className='mb-6'>
                                <div>
                                    <img src={englishTutor} alt="" srcset="" />
                                </div>
                                <div>
                                    <img src={tutor2} alt="" srcset="" />
                                </div>
                                <div>
                                    <img src={tutor3} alt="" srcset="" />
                                </div>

                            </Slider>
                            <div>
                                <h2 className='text-primary font-bold text-2xl text-left'>English Features:</h2>
                                <p className='text-left text-md'>
                                    1. User can see some services in home page.
                                </p>
                                <p className='text-left text-md'>
                                    2. If user click enroll button they can see procced checkout page.
                                </p>
                                <p className='text-left text-md'>
                                    3. In the services page user can see all product.

                                </p>

                            </div>
                            <div className='mt-2'>
                                <h2 className='text-primary font-bold text-2xl text-left'>Project Details:</h2>
                                <p className='text-left text-md'>
                                    1. It's a single page Web App. Where I use React Router.v6 for build this.
                                </p>
                                <p className='text-left text-md'>
                                    1. For login I use firebase login authentication.
                                </p>
                                <p className='text-left text-md'>
                                    1. User login by gmail, google & github
                                </p>


                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <input type="checkbox" id="macbook-modal" class="modal-toggle" />
                    <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box">
                            <label for="macbook-modal" class="btn btn-sm btn-circle absolute bg-red-600 right-2 top-2">✕</label>
                            <Slider {...settings} className='mb-6'>
                                <div>
                                    <img src={macbook} alt="" srcset="" />
                                </div>
                                <div>
                                    <img src={mac2} alt="" srcset="" />
                                </div>
                                <div>
                                    <img src={mac3} alt="" srcset="" />
                                </div>

                            </Slider>
                            <div>
                                <h2 className='text-primary font-bold text-2xl text-left'>Mac Book Features:</h2>
                                <p className='text-left text-md'>
                                    1.In the home page user can see banner & some review
                                </p>
                                <p className='text-left text-md'>
                                    2. If user click see all review they go to review page. And see all review
                                </p>


                            </div>
                            <div className='mt-2'>
                                <h2 className='text-primary font-bold text-2xl text-left'>Project Details:</h2>
                                <p className='text-left text-md'>
                                    1. It's a single page Web App. Where I use React Router.v6 for build this.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <input type="checkbox" id="community-modal" class="modal-toggle" />
                    <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box">
                            <label for="community-modal" class="btn btn-sm btn-circle absolute bg-red-600 right-2 top-2">✕</label>
                            <Slider {...settings} className='mb-6'>
                                <div>
                                    <img src={community1} alt="" srcset="" />
                                </div>
                                <div>
                                    <img src={community2} alt="" srcset="" />
                                </div>
                                <div>
                                    <img src={community3} alt="" srcset="" />
                                </div>

                            </Slider>

                            <div className='mt-2'>
                                <h2 className='text-primary font-bold text-2xl text-left'>Dhanmondi Community Project Details:</h2>
                                <p className='text-left text-md'>
                                    1. It's a single page Web App.
                                </p>
                                <p className='text-left text-md'>
                                    2. It's a services related website.
                                </p>
                                <p className='text-left text-md'>
                                    3. It has a frequently asked question & answer section.
                                </p>
                                <p className='text-left text-md'>
                                    4. Create this websitw using Bootstrap.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <input type="checkbox" id="electronics-modal" class="modal-toggle" />
                    <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box">
                            <label for="electronics-modal" class="btn btn-sm btn-circle absolute bg-red-600 right-2 top-2">✕</label>
                            <Slider {...settings} className='mb-6'>
                                <div>
                                    <img src={electronics} alt="" srcset="" />
                                </div>
                                <div>
                                    <img src={elo2} alt="" srcset="" />
                                </div>
                                <div>
                                    <img src={ele3} alt="" srcset="" />
                                </div>

                            </Slider>
                            <div>
                                <h2 className='text-primary font-bold text-2xl text-left'>Electronics Store Features:</h2>
                                <p className='text-left text-md'>
                                    1.User can add to cart
                                </p>
                                <p className='text-left text-md'>
                                    2. When user click add to cart they see selected item on the left side
                                </p>
                                <p className='text-left text-md'>
                                    2. Then user can choose 1 from this cart
                                </p>


                            </div>
                            <div className='mt-2'>
                                <h2 className='text-primary font-bold text-2xl text-left'>Project Details:</h2>
                                <p className='text-left text-md'>
                                    1. It's a single page Web App.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Protfolio;