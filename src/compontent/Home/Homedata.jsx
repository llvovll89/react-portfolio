import React from 'react'
import {Link} from 'react-router-dom'; 
import {HiOutlineCursorClick} from 'react-icons/hi'


function Homedata() {
  return (
    <div className="homedata">
        <h1 className="home-title">
        Kim Geon Ho<span className='hand'>🙌</span>
        </h1>
        <p className="home-subtitle">FrontEnd Developer</p>
        <p className="home-desc">
            안녕하세요, 저는 웹 프론트엔드 신입 개발자 김건호입니다.
            저의 포트폴리오를 보고 마음에 드신다면 <span className='contact-color'>Contact</span> 해주시기 바랍니다!
        </p>

        <div className="home-btn">
        <Link to='/contact' className='btn contact-btn'>
            Contact <HiOutlineCursorClick className='icons'/>
        </Link>
        </div>
    </div>
  )
}

export default Homedata