import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'
import Header from '../Header'

import './index.css'

const Products = () => {
  const cart = Cookies.remove('jwt_token')
  if (cart === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div>
      <Header />

      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
          className="img-size"
        />
      </div>
    </div>
  )
}
export default Products
