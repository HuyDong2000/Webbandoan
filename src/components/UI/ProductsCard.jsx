import React from 'react'
import ProductImg from '../../assets/images/trasua-product-img.jpg'
import { motion } from 'framer-motion'
import { Col } from 'reactstrap'
import '../../styles/product-card.css'
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'
import { toast } from 'react-toastify';


const ProductsCard = ({ item }) => {

  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(cartActions.addItem({
      id: item.id,
      productName: item.productName,
      price: item.price,
      imgUrl: item.imgUrl,
    })
    )
    toast.success('Product added successfully', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  return (
    <Col lg='3' md='4' className='mb-2'>
      <div className="product__item">
        <div className="product__img">
          <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} style={{ width: '180px', height: '180px' }} alt="" />
        </div>
        <div className='boder-width'></div>
        <div className='p-2 product__info'>

          <h4 className='product__name'>
            <Link to={`/shop/${item.id}`} style={{ textDecoration: 'none' }} className='title__name'>{item.productName}</Link>
          </h4>
          <span >{item.category}</span>
        </div>
        <div className="product__card-bottom p-2">
          <samp className='price'>${item.price}</samp>
          <motion.samp whileTap={{ scale: 1.2 }} onClick={addToCart}><i class="ri-add-line"></i></motion.samp>
        </div>
      </div>
    </Col>

  )
}

export default ProductsCard