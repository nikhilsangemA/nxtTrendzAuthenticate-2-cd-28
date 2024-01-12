import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'
import Header from '../Header'

import './index.css'

const Cart = () => {
  const product = Cookies.get('jwt_token')
  if (product === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div>
      <Header />

      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
          className="img-size"
        />
      </div>
    </div>
  )
}
export default Cart
