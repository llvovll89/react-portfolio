import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineInstagram , AiOutlineGithub} from 'react-icons/ai'
import {SiNotion} from 'react-icons/si'

function Item() {
  return (
    <div className="home-item">
        <Link to='https://instagram.com' target="_blank" className='icons social'><AiOutlineInstagram className='home-icons'/></Link>
        <Link to='https://github.com' target="_blank" className='icons social'><AiOutlineGithub className='home-icons' /></Link>
        <Link to='https://www.notion.so/' target="_blank" className='icons social'><SiNotion className='home-icons' /></Link>
    </div>
  )
}

export default Item