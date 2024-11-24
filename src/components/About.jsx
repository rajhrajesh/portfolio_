import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-600'>
                        <span className='animate-bounce bg-gradient-to-r from-black via-indigo-100 to-black text-transparent bg-clip-text'>About Me</span>
                    </p>
                </div>

                <p className='text-xl mt-8'>
                    Hello! I'm <span className='bg-gradient-to-r from-red-600 via-pink-500 to-indigo-400 text-transparent bg-clip-text font-semibold'>Rajesh</span>, a passionate <span className='bg-gradient-to-r from-red-600 via-pink-500 to-indigo-400 text-transparent bg-clip-text'>Junior Full Stack Developer (MERN)</span> with a strong foundation in web development. I specialize in <span className='bg-gradient-to-r from-red-600 via-pink-500 to-indigo-400 text-transparent bg-clip-text'>React.js</span>, <span className='bg-gradient-to-r from-red-600 via-pink-500 to-indigo-400 text-transparent bg-clip-text'>Node.js</span>, <span className='bg-gradient-to-r from-red-600 via-pink-500 to-indigo-400 text-transparent bg-clip-text'>Express.js</span>, <span className='bg-gradient-to-r from-red-600 via-pink-500 to-indigo-400 text-transparent bg-clip-text'>MongoDB</span>, and <span className='bg-gradient-to-r from-red-600 via-pink-500 to-indigo-400 text-transparent bg-clip-text'>Tailwind CSS</span>. I’m eager to dive into new challenges and continuously expand my expertise.
                </p>
                <br />
                <p className='text-xl'>
                    I have hands-on experience with a wide range of technologies, including
                    <span className='ml-1 bg-gradient-to-r from-green-600 via-cyan-500 to-purple-400 text-transparent bg-clip-text'>
                        HTML, CSS, JavaScript, Node.js, Bootstrap, React.js, SQL
                    </span>.
                    My passion for web development drives me to continuously learn and apply best practices in building scalable and user-friendly applications.
                    I'm comfortable working with both front-end and back-end technologies, allowing me to contribute to full-stack projects effectively.
                    I am eager to take on new challenges and expand my skillset through real-world experiences and collaboration.
                </p>

            </div>
        </div>
    )
}

export default About;
