import './Services.css'
import themePattern from '../../assets/theme_pattern.svg'
import arrowIcon from '../../assets/arrow_icon.svg'
import servicesData from '../../assets/services_data'

const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={themePattern} alt="" />
      </div>
      <div className="services-container">
        {servicesData.map((service,index)=> {
          return <div className='services-format' key={index}>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="services-readmore">
              <p>Read More</p>
              <img src={arrowIcon} alt="" />
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Services
