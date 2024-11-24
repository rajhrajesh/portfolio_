import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonBadgeFill, BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLink = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/rajhrajesh',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/rajhrajesh',
        },
        {
            id: 3,
            child: (
                <>
                    Email <HiOutlineMail size={30} />
                </>
            ),
            // href: 'mailto:penurajeshitsd@gmail.com', //This one here is go to mail app
            href: 'https://mail.google.com/mail/?view=cm&fs=1&to=penurajeshitsd@gmail.com', // Direct Gmail link

        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/Rajesh Resume_.pdf',
            style: 'rounded-br-md',
            download: true
        }
    ]
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <uL>
                {links.map(({ id, child, href, style, download }) => (

                    <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-800' + ' ' + style}>
                        <a href={href} className='flex justify-between items-center w-full text-white' download={download} target='_blank' rel='noreferrer'>
                            {child}
                        </a>
                    </li>
                ))}
            </uL>
        </div>
    )
}

export default SocialLink