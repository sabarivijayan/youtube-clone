/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import './Navbar.css'
const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
        <div className="nav-left flex-div">
            <img className='menu-icon' onClick={() => setSidebar(prev => prev===false?true:false)} src={assets.menu} alt="" />
            <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link>
        </div>
        <div className="nav-middle flex-div">
            <div className="search-box flex-div">
                <input type="text" placeholder='Search' />
                <img src={assets.search} alt="" />    
            </div>
        </div>
        <div className="nav-right flex-div">
            <img src={assets.upload} alt="" />
            <img src={assets.more} alt="" />
            <img src={assets.notification} alt="" />
            <img src={assets.jack} className='user-icon' alt="" />
        </div>
    </nav>
  )
}

export default Navbar