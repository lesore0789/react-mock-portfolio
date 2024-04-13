import './MyWork.css'
import themePattern from '../../assets/theme_pattern.svg'
import arrowIcon from '../../assets/arrow_icon.svg'
import myWorkData from '../../assets/mywork_data'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={themePattern} alt="" />
      </div>
      <div className="mywork-container">
        {myWorkData.map((work, index)=>{
          return <img key={index} src={work.w_img} alt="" />
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrowIcon} alt="" />
      </div>
    </div>
  )
}

export default MyWork
