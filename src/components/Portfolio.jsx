import React from 'react';
import task_ from '../assets/portfolio/task_.png';
import ta from '../assets/portfolio/ta.jpg';
import ser from '../assets/portfolio/ser.jpg';
import task_1 from '../assets/portfolio/task_1.png';
import spotify from '../assets/portfolio/spotify.png';
import installNode from '../assets/portfolio/installNode.jpg';

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: task_,
      demo: 'https://rajesh-p-task-tracker.vercel.app/',
      code: 'https://github.com/rajhrajesh/rajesh_p-task-tracker.git',
    },
    {
      id: 2,
      src: installNode,
      demo: 'https://bookstore-backend-bxv0.onrender.com/',
      code: 'https://github.com/rajhrajesh/bookstore_backend.git',
    },
    {
      id: 3,
      src: task_1,
      demo: 'https://easesmith-frontend-versions.vercel.app/',
      code: 'https://github.com/rajhrajesh/easesmith-frontend_-versions_.git',
    },
    {
      id: 4,
      src: ta,
      demo: 'https://rajhrajesh.github.io/levon-project-traffic-light-simulation/',
      code: 'https://github.com/rajhrajesh/levon-project-traffic-light-simulation.git',
    },
    {
      id: 5,
      src: ser,
      demo: 'https://rajhrajesh.github.io/server_render_searching../',
      code: 'https://github.com/rajhrajesh/server_render_searching...git',
    },
    {
      id: 6,
      src: spotify,
      demo: 'https://rajhrajesh.github.io/spotify-frontend/',
      code: 'https://github.com/rajhrajesh/spotify-frontend.git',
    },
  ];

  return (
    <div
      name="portfolio"
      className="p-20 bg-gradient-to-b from-black to pb-20 bg-gray-800 w-full text-white md:h-auto"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6 text-xl">Check out some of my work right here!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt={`demo_${id}`} className="rounded-md duration-200 hover:scale-105" />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(demo, '_blank')}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(code, '_blank')}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
