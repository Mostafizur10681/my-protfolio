import React from 'react';

const Skills = () => {
    return (
        <div className='w-4/5 mx-auto mb-24'>
            <h1 className='text-center font-bold mb-12 text-4xl uppercase'>MY Skills</h1>
            <div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8'>
                    <div class=" bg-gray-200 mb-3 h-1">
                        <div class="bg-green-400 uppercase h-1 text-xl " style={{ width: '80%' }} >HTML</div>
                    </div>
                    <div class="mb-3 bg-gray-200 h-1">
                        <div class="bg-green-400 uppercase h-1 text-xl " style={{ width: '80%' }} >CSS</div>
                    </div>
                    <div class=" mb-3 bg-gray-200 h-1">
                        <div class="bg-green-400 uppercase  h-1 text-xl" style={{ width: '65%' }} >Bootstrap</div>
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8'>
                    <div class="w-full bg-gray-200 mb-3 h-1">
                        <div class="bg-green-400 uppercase h-1 text-xl" style={{ width: '60%' }} >JavaScript</div>
                    </div>

                    <div class="w-full bg-gray-200 mb-3 h-1">
                        <div class="bg-green-400 uppercase h-1 text-xl" style={{ width: '50%' }}>Node js</div>
                    </div>

                    <div class="w-full bg-gray-200 mb-3 h-1">
                        <div class="bg-green-400 uppercase h-1 text-xl" style={{ width: '75%' }}>React JS</div>
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 mb-8 gap-5'>
                    <div class="w-full bg-gray-200 mb-3 h-1">
                        <div class="bg-green-400 uppercase h-1 text-xl" style={{ width: '55%' }}>Firebase</div>
                    </div>

                    <div class="w-full bg-gray-200 mb-3 h-1">
                        <div class="bg-green-400 uppercase h-1 text-xl" style={{ width: '60%' }}>Mongo DB</div>
                    </div>
                    <div class="w-full bg-gray-200 mb-3 h-1">
                        <div class="bg-green-400 uppercase h-1 text-xl" style={{ width: '70%' }}></div>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    <div class="w-full bg-gray-200 mb-3 h-1">
                        <div class="bg-green-400 uppercase h-1 text-xl" style={{ width: '80%' }}>Tailwind CSS</div>
                    </div>

                    <div class="w-full bg-gray-200 mb-3 h-1">
                        <div class="bg-green-400 uppercase h-1 text-xl" style={{ width: '55%' }}>Express JS</div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Skills;