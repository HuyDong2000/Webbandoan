
import React , {useEffect , useState}from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import foodflatimg from '../assets/images/Foodflat_img_01.jpg'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Services from '../services/Services'
import ProductsList from '../components/UI/ProductsList'
import products from '../assets/data/products'
import counterImg from '../assets/images/trasua-product-img.jpg'
import Clock from '../components/UI/Clock'
const Home = () => {


  const [data,setData] = useState([])
  const [dataBestSales,setBestSales] = useState([])
  useEffect(()=>{
    const filterdProductsTrenning = products.filter(
      (item) => item.category === 'chair')

      const filterdProductBestSales = products.filter(
        (item) => item.category === 'sofa')
    setData(filterdProductsTrenning)
    setBestSales(filterdProductBestSales)
  },[])
  const year = new Date().getFullYear()
  return <Helmet title={'Home'}>
    <section className='hero__section'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__container">
              <p className="hero__subtitle">Trending Product in {year}</p>
              <h2>Order Food Online In 16 Cities Nationwide & Deliver Even Just 1 dish</h2>
              <p>FoodFlat.vn is always ready to cooperate with restaurants, eateries, cafes...
                to expand business as well as increase customers. Connect to the ordering and delivery
                system to reduce management, operation, marketing, technology costs...</p>
              <motion.button whileHover={{ scale: 1.1 }} className='buy__btn' >
                <Link to='/shop' style={{ textDecoration: 'none' }}>SHOP NOW</Link></motion.button>
            </div>
          </Col>

          <Col lg='6' md='6'>
            <div className="hero_img">
              <img src={foodflatimg} style={{ width: '600px', height: '600px' }} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Services />
    <section className='trending__products'>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section__title'> Trending Products</h2>
            <div className="boder-width-trending"></div>
          </Col>
          <ProductsList data={data}/>
        </Row>
      </Container>
    </section>
    <section className='best__sales'>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section__title'> Best Sales </h2>
            <div className="boder-width-trending"></div>
          </Col>
          <ProductsList data={dataBestSales}/>
        </Row>
      </Container>
    </section>
    <section className='timer__count'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="clock__top-content">
              <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
              <h3  className='text-white fs-5 mb-3'>Quality Armchair</h3>

            </div>
            <Clock/>
            <motion.button whileTap={{ scale: 1.2 }} className='buy__btn store__btn'>
              <Link to='/shop' style={{ textDecoration: 'none' }}> Visit Store</Link>
            </motion.button>
             </Col>
          <Col lg='6' md='6' className='text-end'>
            <img src={counterImg} alt="" style={{width:'250px',height:'250px'}}/> </Col>
        </Row>
      </Container>
    </section>
    <section className='best__sales'>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section__title'> Best Sales </h2>
            <div className="boder-width-trending"></div>
          </Col>
          <ProductsList data={dataBestSales}/>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Home