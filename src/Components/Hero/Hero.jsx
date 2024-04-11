/* eslint-disable react/no-unescaped-entities */
import './Hero.css'
import profileImg from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profileImg} alt="" />
      <h1><span>I'm Alex Bennet,</span> frontend developer based in USA</h1>
      <p>I'm a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla, and Apple </p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
