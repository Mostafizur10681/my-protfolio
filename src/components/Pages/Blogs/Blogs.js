import React from 'react';

const Blogs = () => {
    return (
        <div className='text-center px-6 lg:px-12 my-12'>
            <h1 className='text-center font-bold mb-12 text-3xl lg:text-6xl uppercase'>My <span className='text-primary'>Blogs</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <div class="card w-full lg:w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title text-center text-4xl font-bold uppercase">Coming Soon</h2>

                    </div>
                </div>
                <div class="card w-full lg:w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title text-center text-4xl font-bold uppercase">Coming Soon</h2>

                    </div>
                </div>
                <div class="card w-full lg:w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title text-center text-4xl font-bold uppercase">Coming Soon</h2>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;