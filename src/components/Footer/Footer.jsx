import React from 'react'
import './footer.css'
import { Container, Row, Col ,ListGroup , ListGroupItem } from 'reactstrap'
import logo from '../../assets/images/logo_left_home.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4'>
            <div className="logo">
              {/* <img src={logo} alt="logo" style={{ width: "30px" }} /> */}
              <div>
                <h1 className='text-white'>
                  FoodFlat
                </h1>

              </div>
              
            </div>
            <p className="footer__text mt-4">Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở KH & ĐT TP.HCM cấp ngày 02/01/2007.
                GPMXH: 21/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 11/01/2021.
                Địa chỉ: 128 Trần Quang Khải, P.Tân Định, Q.1, TP.Hồ Chí Minh.
                Địa chỉ liên hệ và gửi chứng từ: Lô T2-1.2, Đường D1, Đ. D1, P.Tân Phú, TP.Thủ Đức, TP.Hồ Chí Minh. Điện thoại: 028 38125960.
                Email: cskh@thegioididong.com. Chịu trách nhiệm nội dung: Huỳnh Văn Tốt. Email: Tot.huynhvan@thegioididong.com. </p>
          </Col>
          <Col lg='3'>
            <div className="footer__quick-links">
              <h4 className="quick-links-title">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0 '>
                  <Link to='#'style={{ textDecoration: 'none' }}>Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'style={{ textDecoration: 'none' }}>Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'style={{ textDecoration: 'none' }}>Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'style={{ textDecoration: 'none' }}>Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='2'>
          <div className="footer__quick-links">
              <h4 className="quick-links-title">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'style={{ textDecoration: 'none' }}>Shop</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'style={{ textDecoration: 'none' }}>Cart</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'style={{ textDecoration: 'none' }}>Login</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'style={{ textDecoration: 'none' }}>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='3'>
          <div className="footer__quick-links">
              <h4 className="quick-links-title">Contact</h4>
              <ListGroup className='footer__contact'>
                <ListGroupItem className='ps-0 border-0 
                d-flex align-items-center gap-2'>
                <span><i class="ri-map-pin-line"></i>
                <p>123 Phu Hoa , Thu Dau Mot , Binh Duong</p></span>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 
                d-flex align-items-center gap-2'>
                <span><i class="ri-phone-line"></i>
                <p>+ 123 4531 789</p></span>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 
                d-flex align-items-center gap-2'>
                <span><i class="ri-mail-line"></i>
                <p>google@gmail.com</p></span>
                </ListGroupItem>

               
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer