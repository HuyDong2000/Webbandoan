import React , {useEffect , useState , useRef} from 'react'
import { NavLink , useNavigate} from 'react-router-dom'
import logo from '../../assets/images/logo_left_home.png'
import { Container, Row } from 'reactstrap'
import user_icon from '../../assets/images/logo_user_right.png'
import './header.css'
import { motion } from 'framer-motion'

import { useSelector }from 'react-redux'

const nav__link = [
  {
    path: 'home',
    display: 'Home'
  },
  {
    path: 'shop',
    display: 'Shop'
  },
  {
    path: 'cart',
    display: 'Cart'
  },
]

const Header = () => {

  const headerRef = useRef(null)

  const menuRef = useRef(null)
  const navigate = useNavigate()
  const totalQuantily = useSelector(state => state.cart.totalQuantily)
  const stickyHeaderFunc = ()  => {
    window.addEventListener("scroll" , () =>{

      if(document.body.scrollTop > 80 || 
        document.documentElement.scrollTop > 80)
        {
          headerRef.current?.classList.add("sticky__header")
      }else{
        headerRef.current?.classList.remove("sticky__header")
      }
    })
    
  }

  useEffect(() =>{
    stickyHeaderFunc()

    return () => window.removeEventListener('scroll' , stickyHeaderFunc)
  },[])

  const menuToggle = () => menuRef.current.classList.toggle('active__menu')

  const navigateToCart = () =>{
    navigate('/cart')
  }
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" style={{ width: "30px" }} />
              <div>
                <h1>
                  FoodFlat
                </h1>
                {/* <p>since 1997</p> */}
              </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav__link.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path} style={{ textDecoration: 'none' }} className={(navClass) =>
                      navClass.isActive ? 'nav__active' : ''}>
                      {item.display}
                    </NavLink>
                  </li>

                ))}
              </ul>
            </div>
            <div className="nav__icons">
              <span className='fav__icon'>
                <i class="ri-heart-line"></i>
                <span className="badge"><p>1</p></span>
              </span>
              <span className='cart__icon' onClick={navigateToCart}>
                <i class="ri-shopping-bag-line"></i>
                <span className="badge"><p>{totalQuantily}</p></span>
              </span>
              <span>
                <motion.img whileTap={{ scale: 1.2 }} src={user_icon} alt="" style={{ width: "30px" }} />
              </span>
              <div className="mobile_menu">
              <span onClick={menuToggle}><i class="ri-menu-line"></i></span>
            </div>
            </div>
           
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header