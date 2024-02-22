import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa6";

const GithubAyush = () => {
    return (
        <Link to={'https://github.com/Ayush-may'} style={{
            color: 'black'
        }} >
            <div className='ayushGithub d-flex gap-2 align-items-center'>
                <FaGithub size={'2em'} />
                Ayush-may
            </div>
        </Link>
    )
}

export default GithubAyush