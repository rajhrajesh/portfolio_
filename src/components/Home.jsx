import React from 'react'
import HeroImage from '../assets/heroImage.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import {Link} from "react-scroll";
const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className='text-3xl sm:text-4xl font-bold text-white'>I'm a <span className='bg-gradient-to-r from-red-400 via-blue-700 to-pink-400  text-transparent bg-clip-text'>MERN</span> Stack Developer</h2>
                    <p className='text-gray-500 text-base py-4 sm:text-2xl'>
                        I have one year of experience in designing and building software. Currently, I am passionate about developing web applications using technologies like React, Tailwind CSS, and SQL. You can explore my portfolio of projects, including  <a 
                            href="https://github.com/rajhrajesh/server_render_searching...git"
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ml-1"
                        >
                            My Hacker Stories
                        </a>, a React-based application deployed  <a 
                            href="https://rajhrajesh.github.io/server_render_searching../" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ml-1"
                        >
                            here
                        </a> and <a 
                            href="https://github.com/rajhrajesh/node-crud-in-mango.git" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ml-1"
                        >
                            Basic CRUD with MongoDB
                        </a>, a Node.js and Express application showcasing CRUD operations with MongoDB.
                    </p>
                    <div>
                        <Link to='portfolio' smooth duration={500} className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-500 cursor-pointer '>
                            Portfolio
                            <span className='hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img src={HeroImage} alt="my profile" className='rounded-2xl w-2/4 md:w-auto' />
                </div>
            </div>
        </div>
    )
}

export default Home