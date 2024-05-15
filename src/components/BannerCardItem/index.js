// Write your code here.
import './index.css'

const Designs = props => {
  const {bannerList} = props
  const {headerText, description, className} = bannerList
  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button type="button">Show More</button>
      </div>
    </li>
  )
}
export default Designs
