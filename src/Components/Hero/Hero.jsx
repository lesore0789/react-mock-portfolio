/* eslint-disable react/no-unescaped-entities */
import './Hero.css'
import profileImg from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profileImg} alt="" />
      <h1><span>I'm Alex Bennet,</span> frontend developer based in USA</h1>
      <p>I'm a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla, and Apple </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
