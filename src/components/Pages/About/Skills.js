import React from 'react';

const Skills = () => {
    return (
        <div className='w-4/5 mx-auto mb-24'>
            <h1 className='text-center font-bold mb-12 text-2xl lg:text-4xl uppercase'>MY Skills</h1>
            <div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8'>
                    <div class=" bg-gray-200 mb-3 h-1">
                        <div class="bg-green-400 uppercase h-1 text-xl " style={{ width: '80%' }} >HTML(80%)</div>
                    </div>
                    <div class="mb-3 bg-gray-200 h-1">
                        <div class="bg-green-400 uppercase h-1 text-xl " style={{ width: '80%' }} >CSS(80%)</div>
                    </div>
                    <div class=" mb-3 bg-gray-200 h-1">
                        <div class="bg-green-400 uppercase  h-1 text-xl" style={{ width: '70%' }} >Bootstrap(70%)</div>
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8'>
                    <div class="w-full bg-gray-200 mb-3 h-1">
                        <div class="bg-green-400 uppercase h-1 text-xl" style={{ width: '60%' }} >JavaScript(60%)</div>
                    </div>

                    <div class="w-full bg-gray-200 mb-3 h-1">
                        <div class="bg-green-400 uppercase h-1 text-xl" style={{ width: '50%' }}>Node js(50%)</div>
                    </div>

                    <div class="w-full bg-gray-200 mb-3 h-1">
                        <div class="bg-green-400 uppercase h-1 text-xl" style={{ width: '75%' }}>React JS(75%)</div>
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 mb-8 gap-5'>
                    <div class="w-full bg-gray-200 mb-3 h-1">
                        <div class="bg-green-400 uppercase h-1 text-xl" style={{ width: '65%' }}>Firebase(65%)</div>
                    </div>

                    <div class="w-full bg-gray-200 mb-3 h-1">
                        <div class="bg-green-400 uppercase h-1 text-xl" style={{ width: '60%' }}>Mongo DB(60%)</div>
                    </div>
                    <div class="w-full bg-gray-200 mb-3 h-1">
                        <div class="bg-green-400 uppercase h-1 text-xl" style={{ width: '80%' }}>Tailwind CSS(80%)</div>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>

                    <div class="w-full bg-gray-200 mb-3 h-1">
                        <div class="bg-green-400 uppercase h-1 text-xl" style={{ width: '55%' }}>Express JS(55%)</div>
                    </div>
                    <div class="w-full bg-gray-200 mb-3 h-1">
                        <div class="bg-green-400 uppercase h-1 text-xl" style={{ width: '70%' }}>Wordpress(70%)</div>
                    </div>
                    <div class="w-full bg-gray-200 mb-3 h-1">
                        <div class="bg-green-400 uppercase h-1 text-xl" style={{ width: '75%' }}>GitHub(75%)</div>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>

                    <div class="w-full bg-gray-200 lg:mt-6 mt-4 mb-3 h-1">
                        <div class="bg-green-400 uppercase h-1 text-xl" style={{ width: '75%' }}>Netlify(75%)</div>
                    </div>
                    <div class="w-full bg-gray-200 lg:mt-6 mb-3 h-1">
                        <div class="bg-green-400 uppercase h-1 text-xl" style={{ width: '70%' }}>Heroku(70%)</div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Skills;